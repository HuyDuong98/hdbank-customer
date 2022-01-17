import { Box, Container, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { FC, useState, useEffect } from 'react'
import Style from '@styles/news/News.module.scss'
import PageHeading from '../../components/shared/PageHeading'
import Tabs from '../../components/shared/Tabs'
import { useTranslation } from 'react-i18next'
import { isMobileState } from '../../stores/sharedStores'
import { useRecoilValue } from 'recoil'
import { createTheme } from '@material-ui/core/styles'
import { getAllNews, getFilterNews, getNewsByCate } from '../../apis/landing-page/news'
import { useQuery } from 'react-query'

//components
import AllNews from '../../components/news/AllNews'
import NewsByCate from '../../components/news/NewsByCate'
import CustomPagination from '../../components/shared/CustomPagination'

const lstBreadCrumb = [{ label: 'news' }]

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

const byCate = {
  listNews: [],
  highlight: {
    id: '',
    title: '',
    short_description: '',
    publish_date: '',
    pc_mode: '',
    mobile_mode: '',
  },
  page: 1,
  pagesize: 10,
  total: 0,
}

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

const breakpointsValues = {
  breakpoints: {
    values: BREAKPOINTS,
  },
}

const myTheme = { other: 'stuff' }
const theme = createTheme({ ...myTheme, ...breakpointsValues })

const NewsPage: FC = () => {
  const { t, i18n } = useTranslation()

  const isMobile = useRecoilValue(isMobileState)
  const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language
  const isXsSize = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  })

  const [type, setType] = useState('0')
  const [isAllNews, setIsAllNews] = useState(true)
  const [allNews, setAllNews] = useState({
    general: {
      highlight: {},
      news: [],
    },
    news: {
      highlight: {},
      news: [],
    },
    promotional_news: {
      highlight: {},
      news: [],
    },
    servicesNew: {
      highlight: {},
      news: [],
    },
  })

  const [newsByCate, setNewsByCate] = useState(byCate)

  const [filter, setFilter] = useState<any>([])

  const { data: filterNewsData, isFetching: filterNewsFetching } = useQuery(
    ['filterNewsQuery', langCode],
    () => getFilterNews(langCode),
    {},
  )

  const { data: allNewsData, isFetching: allNewsFetching } = useQuery(
    ['allNewsQuery', type, newsByCate.page, newsByCate.pagesize, langCode],
    () => (isAllNews ? getAllNews(langCode) : getNewsByCate(langCode, type, newsByCate.page, newsByCate.pagesize)),
  )

  useEffect(() => {
    if (!allNewsData) return

    if (isAllNews) {
      setAllNews(allNewsData)
    } else {
      if (allNewsData.listNews.length > 0) {
        const temp = allNewsData.listNews.shift()
        setNewsByCate({
          ...allNewsData,
          listNews: allNewsData.listNews,
          highlight: temp,
        })
      } else {
        setNewsByCate(byCate)
      }
    }
  }, [allNewsData])

  useEffect(() => {
    if (!filterNewsData) return
    const temp = filterNewsData.map((data) => {
      return {
        label: data.item,
        value: data.value,
      }
    })
    setFilter(temp)
  }, [filterNewsData])

  const handleTab = (value) => {
    if (value === '0') {
      setIsAllNews(true)
    } else {
      setIsAllNews(false)
      setNewsByCate((prevState: any) => ({
        ...prevState,
        page: 1,
      }))
    }

    setType(value)
  }

  const handleCountPage = (value) => {
    setNewsByCate((prevState: any) => ({
      ...prevState,
      pagesize: value,
      page: 1,
    }))
  }

  const handleChangePageSize = (_, page) => {
    setNewsByCate((prevState: any) => ({
      ...prevState,
      page: page,
    }))
  }

  const renderAllNews = () => {
    return <AllNews {...allNews} isXsSize={isXsSize} />
  }

  const renderNewsByCate = () => {
    const nProps = {
      listNews: newsByCate.listNews,
      highlight: newsByCate.highlight,
      isXsSize,
    }
    return <NewsByCate {...nProps} />
  }

  const renderPagination = () => {
    return (
      <Box my={3}>
        <CustomPagination
          page={newsByCate.page}
          totalRecord={newsByCate.total}
          countPage={newsByCate.pagesize}
          hanleChangePage={(e, value) => handleChangePageSize(e, value)}
          hanleChangePageSize={(value) => handleCountPage(value)}
          options={lstOption}
        />
      </Box>
    )
  }

  const isLoading = allNewsFetching && filterNewsFetching

  if (isLoading) return <></>

  return (
    <Container >
      <Grid className={Style.newsPageWrap}>
        {!isMobile &&
          <Grid>
            <PageHeading breadCrumbs={lstBreadCrumb} iconHome />
          </Grid>
        }

        <Box mt={3} mb={3}>
          <Typography variant="h1">{t('news')}</Typography>
        </Box>

        <Tabs tabs={filter} value={type} onChange={(path) => handleTab(path)} />

        <Grid>{isAllNews ? renderAllNews() : renderNewsByCate()}</Grid>

        {!isAllNews && newsByCate.listNews.length > 0 && renderPagination()}
      </Grid>
    </Container>
  )
}

export default NewsPage
