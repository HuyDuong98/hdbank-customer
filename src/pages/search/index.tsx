import { Box, Grid, Typography } from '@material-ui/core'
import { Markup } from 'interweave'
import { FC, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { getFilter, getSearchData } from '../../apis/landing-page/search'
import PageHeading from '../../components/shared/PageHeading'
import { isMobileState } from '../../stores/sharedStores'
import Style from '../../styles/search/Search.module.scss'
import Tabs from '../../components/shared/Tabs'
import { ISearchModel } from '../../models/ISearchModel'
import CustomPagination from '../../components/shared/CustomPagination'
import { convertValueSearch } from '../../utils/helpers/commonHelpers'
import { getCookie, setCookie } from '../../utils/helpers/cookieHelpers'
import { useRouter } from 'next/router'

const lstOption = [
  {
    name: 10,
    value: 10,
  },
  {
    name: 15,
    value: 15,
  },
  {
    name: 20,
    value: 20,
  },
  {
    name: 25,
    value: 25,
  },
]

const Search: FC = () => {
  const isMobile = useRecoilValue(isMobileState)
  const { t, i18n } = useTranslation()
  const langCode =
    i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language === 'en-US' ? 'en' : i18n.language
  const cookieName = 'searchValue'
  const lstBreadCrumb = [{ label: t('Tìm kiếm') }]
  const [countPage, setCountPage] = useState<number>(10)
  const [totalRecord, setTotalRecord] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [tabs, setTabs] = useState([])
  const router = useRouter()

  const [valueTab, setValueTab] = useState('0')
  const keyword = router.query.keyword as string;

  const [lstSearch, setLstSearch] = useState<ISearchModel[]>([])

  const { data: filter } = useQuery(['filterQuery', keyword, langCode], () => getFilter(keyword || '', langCode))
  const { data: searchData } = useQuery(['searchQuery', keyword, langCode, valueTab, pageNumber, countPage], () =>
    getSearchData(keyword || '', langCode, valueTab, pageNumber, countPage),
  )

  useEffect(() => {
    if (filter && filter.data.length > 0) {
      const newTabs = filter.data.map((item) => {
        return { label: `${item.item_text} (${item.item_count})`, value: item.id }
      })
      setTabs(newTabs)
    }
  }, [filter])

  useEffect(() => {
    if (searchData) {
      const newSearchs = searchData?.data?.map((item) => {
        const newDataTitle = convertValueSearch(item.title)
        const newDataContent = convertValueSearch(item.content)
        const newKeywork = convertValueSearch(searchData.keyword)
        const indexDataTitle = newDataTitle?.indexOf(newKeywork)
        const indexDataContent = newDataContent?.indexOf(newKeywork)
        const valueTitle = item.title?.normalize('NFC').slice(indexDataTitle, indexDataTitle + newKeywork.length)
        const valueContent = item.content
          ?.normalize('NFC')
          .slice(indexDataContent, indexDataContent + newKeywork.length)
        return {
          id: item.id,
          title: item.title?.normalize('NFC').replaceAll(valueTitle, `<strong>${valueTitle}</strong>`),
          content: item.content?.normalize('NFC').replaceAll(valueContent, `<strong>${valueContent}</strong>`),
          tag: item.text_type,
          url: item.url,
        }
      })
      setLstSearch(newSearchs)
      setTotalRecord(searchData.total_record)
      if (searchData.total_record) {
        let i = 0
        const cookieData = {
          time: new Date(),
          value: keyword,
        }
        for (i; i < 5; i++) {
          const searchValue = getCookie(`${cookieName}${i}`)
          if (!searchValue) {
            setCookie(`${cookieName}${i}`, JSON.stringify(cookieData), 7)
            break
          } else {
            const value = JSON.parse(searchValue)
            if (value.value === keyword) {
              setCookie(`${cookieName}${i}`, JSON.stringify(cookieData), 7)
              break
            }
          }
        }
        if (i >= 5) {
          let temp = {
            time: null,
            value: null,
          }
          let past = 0
          for (let j = 0; j < 5; j++) {
            const cookieSearch = getCookie(`${cookieName}${j}`)
            if (cookieSearch) {
              const search = JSON.parse(cookieSearch)
              if (temp.time === null) temp = search
              else if (new Date(temp.time || new Date()) > new Date(search.time)) {
                temp = search
                past = j
              }
            }
          }
          setCookie(`${cookieName}${past}`, JSON.stringify(cookieData), 7)
        }
      }
    }
  }, [searchData])

  const handleChangePageSize = (e, page) => {
    setPageNumber(page)
  }

  const handleTab = (value) => {
    setValueTab(value)
    setPageNumber(1)
  }

  const handleCountPage = (value) => {
    setCountPage(parseInt(value))
    setPageNumber(1)
  }

  return (
    <>
      <Box className={Style.searchWrapper}>
        {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}
        <Box mt={2} mb={2}>
          <Typography component="h1">
            {t('Kết quả tìm kiếm')}: {filter && filter.keyword}
          </Typography>
        </Box>
        <Tabs tabs={tabs} value={valueTab} onChange={(value) => handleTab(value)} />
        {lstSearch && lstSearch.length > 0 && (
          <>
            {lstSearch.map((item, index) => (
              <Box key={index} className={Style.searchItem}>
                <Typography variant="h6">
                  <Markup content={item.title} />
                </Typography>
                <Box className={Style.content}>
                  <Typography>
                    <Markup content={item.content} />
                  </Typography>
                </Box>
                <Grid container alignItems="center">
                  <Box className={Style.tag}>
                    <Typography>{item.tag}</Typography>
                  </Box>
                  <a href={item.url}>{t('Xem chi tiết')}</a>
                </Grid>
              </Box>
            ))}
            <Box my={3}>
              <CustomPagination
                page={pageNumber}
                totalRecord={totalRecord}
                countPage={countPage}
                hanleChangePage={(e, value) => handleChangePageSize(e, value)}
                hanleChangePageSize={(value) => handleCountPage(value)}
                options={lstOption}
              />
            </Box>
          </>
        )}
        {!lstSearch ||
          (lstSearch.length === 0 && (
            <Box mt={3} mb={6}>
              <Typography variant="body1">{t('Không tìm được kết quả phù hợp')}</Typography>
            </Box>
          ))}
      </Box>
    </>
  )
}
export default Search
