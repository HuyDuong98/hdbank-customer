import { Grid, Typography, Button } from '@material-ui/core'
import { FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/product/ListProductPage.module.scss'
import { isMobileState } from '../../stores/sharedStores'
import { useRecoilValue } from 'recoil'
import clsx from 'clsx'

const FilterFull = '/assets/icons/filter-full.svg'
const FilterSolid = '/assets/icons/filter-solid.svg'

interface IFilter {
  id: string | number
  title: string
  filter_child: {
    id: string
    title: string
    isActive
  }[]
}

interface IFilterItem {
  id: string
  title: string
}
interface IFilterProps {
  lstFilter: IFilter[]
  getFilter: (filter: IFilterItem[]) => void
}

const Filter: FC<IFilterProps> = (props) => {
  const { lstFilter, getFilter } = props
  const { t } = useTranslation()

  useEffect(() => {
    setContent(lstFilter)
  }, [lstFilter])

  //global states
  const isMobile = useRecoilValue(isMobileState)

  const [isFilter, setIsFilter] = useState(false)
  const [content, setContent] = useState<any>([])
  const [listId, setListId] = useState<IFilterItem[]>([])

  const onFilter = (groupName, filterItem) => {
    let newArray: any[] = []
    const temp = listId
    const indexID = temp.indexOf(filterItem.id)

    content.forEach((group, idx) => {
      const { title, filter_child } = group
      if (title !== groupName) {
        newArray = [...content]
      } else {
        const temp: any[] = []

        filter_child.forEach((item) => {
          const { title } = item
          if (title === filterItem.title) {
            item.isActive = !filterItem.isActive
          }
          temp.push(item)
        })

        newArray[idx] = { title: groupName, filter_child: temp }
      }
    })

    if (indexID > -1) {
      temp.splice(indexID, 1) //remove card
    } else {
      temp.push({ id: filterItem.id, title: filterItem.title })
    }

    setContent(newArray)
    setListId(temp)
  }

  const handleFilter = () => {
    getFilter(listId)
    setIsFilter(!isFilter)
  }

  const handleClearFilter = () => {
    content.map((group) => {
      const { filter_child } = group
      filter_child.map((item) => (item.isActive = false))
    })

    setContent([...content])
    setListId([])
    getFilter([])
  }

  return (
    <Grid container className={Style.filterWrap}>
      <Grid container justifyContent="flex-end" className={Style.filterHeading}>
        {!isMobile && (
          <Typography component="span" className={Style.active}>
            {t('product')}
          </Typography>
        )}

        <Grid className={Style.iconGroup}>
          {!isMobile ? (
            <Typography variant="body2">{t('filter')}</Typography>
          ) : (
            <Typography variant="h6" className={Style.mobileTitle}>
              {t('productList')}
            </Typography>
          )}
          <img
            src={isFilter ? FilterFull : FilterSolid}
            className={Style.icon}
            onClick={() => setIsFilter(!isFilter)}
          />
        </Grid>
      </Grid>

      {isFilter && (
        <>
          <Grid className={Style.listWrap}>
            {content?.map((group, idx) => {
              const { title, filter_child } = group
              const groupName = title
              return (
                <Grid key={idx} className={Style.group}>
                  <Typography variant="body1">{t(title)}</Typography>

                  <Grid className={Style.tags}>
                    {filter_child?.map((item, idx) => {
                      const { title, isActive } = item
                      return (
                        <Grid key={idx}>
                          <span
                            className={clsx({
                              [Style.active]: isActive,
                            })}
                            onClick={() => onFilter(groupName, item)}
                          >
                            {t(title)}
                          </span>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              )
            })}
          </Grid>

          <Grid className={Style.btnGroup}>
            <Button variant="contained" onClick={handleClearFilter}>
              {t('clearFilter')}
            </Button>
            <Button variant="contained" color="primary" onClick={handleFilter}>
              {t('apply')}
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  )
}
export default Filter
