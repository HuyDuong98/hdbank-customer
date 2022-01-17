import { Grid, Container } from '@material-ui/core'
import { FC, useState, useEffect } from 'react'
import Style from '@styles/product/ProductDetail.module.scss'
import PageHeading from '../../components/shared/PageHeading'
import Detail from '../../components/product/Detail'
import ListFAQ from '../../components/product/ListFAQ'
import { getProductDetail } from '../../apis/landing-page/product'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { isMobileState } from '../../stores/sharedStores'
import { pagePath } from '../../utils/constants/pagePath'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function ProductDetailPage({ id }) {

  const { i18n } = useTranslation()
  const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language

  const lstBreadCrumb = [{ label: 'productList', path: pagePath.productPage }, { label: 'cardDetails' }]
  const [content, setContent] = useState({
    faQs: [],
    feedback: [],
    info: { id: '', hyperlink: '' },
    promotes: [],
  })

  const isMobile = useRecoilValue(isMobileState)
  const { data, isFetching } = useQuery(['detailQuery', langCode, id], () => getProductDetail(langCode, id))

  useEffect(() => {
    if (!data) return
    setContent(data)
  }, [data])

  if (isFetching) return <></>

  return (
    <>
      <Container className={Style.pageWrap}>
        <Grid className={Style.paddingPage}>
          {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}
          <Detail {...content.info} lstPromote={content.promotes} />
          <ListFAQ lstFQA={content.faQs} />
        </Grid>
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const param = context.params?.productUrl
  const id = param.slice(param.indexOf(".") + 1)
  return {
    props: {
      id
    }
  }
}
