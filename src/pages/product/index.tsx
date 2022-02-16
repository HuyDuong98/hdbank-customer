import { Box, Container, Grid, Typography } from '@material-ui/core'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import Style from '../../styles/product/ListProductPage.module.scss'

//components
import Filter from '../../components/product/Filter'
import ProductItem from '../../components/product/ProductItem'
import PageHeading from '../../components/shared/PageHeading'
import PageTitle from '@components/shared/PageTitle'
import CustomPagination from '../../components/shared/CustomPagination'

//data
import { isMobileState } from '../../stores/sharedStores'
import { getListProduct, getFilterProduct, getListProductByFilter } from '../../apis/landing-page/product'

interface IFilterItem {
  id: string
  title: string
  isActice: boolean
}

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

const contentDefault = {
  page: 1,
  pageSize: 10,
  total_record: 0,
  products: [],
}

const ProductsPage: FC = () => {
  const isMobile = useRecoilValue(isMobileState)
  const { t, i18n } = useTranslation()
  const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language

  const [listFilter, setListFilter] = useState([])
  const [contentPage, setContentPage] = useState(contentDefault)
  const [stateFilter, setStateFilter] = useState<IFilterItem[]>([])

  const lstBreadCrumb = [{ label: 'allProduct' }]
  const handleGetIdFilter = () => {
    const arrayId = [] as string[]
    for (const item of stateFilter) {
      arrayId.push(item.id)
    }
    const ids = arrayId.join()
    return ids
  }

  const {
    data: listProduct,
    isFetching: productFetching,
    refetch,
  } = useQuery(
    ['listProductQuery', langCode, contentPage.page, contentPage.pageSize, handleGetIdFilter()],
    () =>
      stateFilter.length == 0
        ? getListProduct(langCode, contentPage.page, contentPage.pageSize)
        : getListProductByFilter(langCode, contentPage.page, contentPage.pageSize, handleGetIdFilter()),
    {},
  )

  const { data: lstFilter, isFetching: filterFetching } = useQuery(
    ['filterProductQuery', langCode],
    () => getFilterProduct(langCode),
    {},
  )

  useEffect(() => {
    if (!listProduct) return

    if (listProduct.products.length >= 0) {
      setContentPage((prevState) => ({ ...prevState, ...listProduct }))
    } else {
      setContentPage(contentDefault)
    }
  }, [listProduct])

  useEffect(() => {
    if (!lstFilter) return

    const temp = lstFilter.map((filter) => {
      const newChild = filter.filter_child.map((item) => {
        return { ...item, isActive: false }
      })

      return { ...filter, filter_child: newChild }
    })

    setListFilter(temp)
  }, [lstFilter])

  const handleChangePage = (_, page) => {
    setContentPage((prevState: any) => ({
      ...prevState,
      page: page,
    }))
  }

  const hanleChangePageSize = (value) => {
    setContentPage((prevState: any) => ({
      ...prevState,
      pageSize: value,
      page: 1,
    }))
  }

  const handleFilter = (filter) => {
    setStateFilter(filter)
    refetch()
  }

  const renderPagination = () => {
    if (contentPage.products.length > 0) {
      return (
        <Box my={3}>
          <CustomPagination
            page={contentPage.page}
            totalRecord={contentPage.total_record}
            countPage={contentPage.pageSize}
            hanleChangePage={(e, value) => handleChangePage(e, value)}
            hanleChangePageSize={(value) => hanleChangePageSize(value)}
            options={lstOption}
          />
        </Box>
      )
    } else {
      return null
    }
  }

  if (productFetching && filterFetching) return <></>

  return (
    <Container>
      <Grid className={Style.pageWrap}>
        {!isMobile && (
          <Grid>
            <PageHeading breadCrumbs={lstBreadCrumb} iconHome />

            <PageTitle title={t('productList')} />
          </Grid>
        )}

        <Filter lstFilter={listFilter} getFilter={(filter) => handleFilter(filter)} />
        {stateFilter.length > 0 && (
          <Box className={Style.tagsFilter}>
            {stateFilter.map((item) => (
              <div className={Style.tag} key={item.id}>
                <Typography component="span" variant="inherit">
                  {item.title}
                </Typography>
              </div>
            ))}
          </Box>
        )}
        {contentPage.products?.length > 0 ? (
          <ProductItem lstProduct={contentPage.products} />
        ) : (
          <Box className={Style.noResults}>
            <Typography component="h1">{t('noResult')}</Typography>
          </Box>
        )}

        {renderPagination()}
      </Grid>
    </Container>
  )
}
export default ProductsPage
