import { Grid, Typography, Button, Checkbox, Badge, FormControlLabel } from '@material-ui/core'
import { FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/product/ListProductPage.module.scss'
import { Markup } from 'interweave'
import { pagePath } from '../../utils/constants/pagePath'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

//icons
import ClearIcon from '@material-ui/icons/Clear'

//img
const CompareIcon = '/assets/mobile/landing/compare-icon.svg'
const CompareIconBlack = '/assets/mobile/landing/compare-icon-black.svg'
const Card2 = '/assets/mobile/landing/card-2.png'

import { isMobileState } from '../../stores/sharedStores'
import { useRecoilValue } from 'recoil'
import { convertUrltoSlug } from '../../utils/helpers/commonHelpers'

interface ICriteria {
  criteria_id: string
  criteria_name: string
  prod_id: string | number
  content: string
}

interface IProductItem {
  id: string | number
  title: string
  pc_mode: string
  mobile_mode: string
  hyperlink: string
  criterias: ICriteria[]
}

interface IProductProps {
  lstProduct: IProductItem[]
}

function isOdd(n) {
  return Math.abs(n % 2) == 1
}

const ProductItem: FC<IProductProps> = (props) => {
  const router = useRouter()
  const { lstProduct } = props
  const { t } = useTranslation()

  const isMobile = useRecoilValue(isMobileState)

  const [checked, setChecked] = useState({})

  const [lstCompare, setLstCompare] = useState<any>([])
  const isLength = lstCompare.length > 1

  useEffect(() => {
    const sessionStorageData = sessionStorage.getItem('cardCompare')
    const cardCompare = sessionStorageData && JSON.parse(sessionStorageData)
    if (cardCompare) {
      setLstCompare(cardCompare.list)
      setChecked(cardCompare.checked)
    }
  }, [])

  const remove = (card) => {
    const temp = lstCompare

    temp.map((item, idx) => {
      if (item.id === card.id) {
        temp.splice(idx, 1) //remove card
        const newChecked = { ...checked, [card.id]: false }
        setLstCompare(temp)
        setChecked(newChecked)

        const cardCompare = {
          checked: newChecked,
          list: temp,
        }

        sessionStorage.setItem('cardCompare', JSON.stringify(cardCompare))
      }
    })
  }

  const onChooseCard = (e, card) => {
    const isChecked = e.target.checked
    const temp = lstCompare

    if (isChecked) {
      // add card into compare list
      const newChecked = { ...checked, [card.id]: isChecked }

      setLstCompare([...lstCompare, card])
      temp.push(card)

      setChecked(newChecked)
      const cardCompare = {
        checked: newChecked,
        list: temp,
      }

      sessionStorage.setItem('cardCompare', JSON.stringify(cardCompare))
    } else {
      remove(card)
    }

    if (temp.length === 3)
      router.push(pagePath.compareProductsPage)
  }

  const handleChangePage = () => {
    if (isLength)
      router.push(pagePath.compareProductsPage)
  }

  const renderListProduct = () => {
    return (
      <Grid className={Style.listProductWrap}>
        {lstProduct.map((product, idx) => {
          const { id, title, pc_mode, mobile_mode, criterias, hyperlink } = product

          const img = !isMobile ? pc_mode : mobile_mode
          return (
            <Grid key={idx} container className={Style.itemWrap}>
              <Link href={`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`} passHref >
                <Typography color="textPrimary" variant="h5">
                  {t(title)}
                </Typography>
              </Link>
              <Grid container>
                <Grid item lg={2} sm={4} xs={12}>
                  <Grid container direction="column">
                    <Link href={`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`} passHref>
                      <img src={img || Card2} alt="" />
                    </Link>

                    <Grid>

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          if (hyperlink) {
                            window.location.href = hyperlink
                          }
                          return
                        }}
                      >
                        {t('openCard')}
                      </Button>

                    </Grid>

                    <Grid className={Style.actionWrap}>
                      <Grid>
                        <span
                          className={Style.link}
                          onClick={() => router.push(`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`)}
                        >
                          {t('seeDetail')}
                        </span>
                      </Grid>

                      <FormControlLabel
                        className={Style.checkBox}
                        control={
                          <Checkbox
                            checked={checked[id] || false}
                            onChange={(e) => onChooseCard(e, product)}
                            color="primary"
                            disabled={!checked[id] && lstCompare.length >= 3}
                          />
                        }
                        label={t('compareCards')}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item lg={10} sm={8} xs={12} className={Style.textWrap}>
                  <Grid container spacing={2}>
                    {criterias.map((criteria, idx) => {
                      const { criteria_name, content } = criteria

                      return (
                        <Grid key={idx} item lg={3} sm={6} xs={12}>
                          <Grid
                            container
                            direction="column"
                            className={clsx(Style.groupInfo, {
                              [Style.noneLine]: idx === 0,
                              [Style.oddLine]: !isOdd(idx),
                            })}
                          >
                            <Typography variant="body1" className={Style.title}>
                              {criteria_name}
                            </Typography>
                            <Markup content={content} />
                          </Grid>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    )
  }

  const renderBadge = () => {
    return (
      <Grid className={Style.badgeWrap}>
        <Grid className={Style.relative}>
          <Grid
            //className={Style.badgeIcon}
            className={clsx(Style.badgeIcon, {
              [Style.blackColor]: !isLength,
            })}
            onClick={handleChangePage}
          >
            <Badge badgeContent={`${lstCompare.length}/3`} color="primary">
              <img alt='' src={isLength ? CompareIcon : CompareIconBlack} />
            </Badge>
          </Grid>

          <Grid className={Style.listCardWrap}>
            {lstCompare.map((card, idx) => {
              return (
                <Grid
                  key={idx}
                  className={clsx(Style.cardItem, {
                    [Style.shadow]: !isLength,
                  })}
                >
                  <Grid className={Style.flex}>
                    <img alt='' src={card.img || Card2} className={Style.cardImg} />

                    <span className={Style.cardName}>{card.title}</span>
                  </Grid>
                  <ClearIcon className={Style.closeIcon} onClick={() => remove(card)} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      {renderListProduct()}
      {lstCompare.length > 0 && renderBadge()}
    </>
  )
}
export default ProductItem
