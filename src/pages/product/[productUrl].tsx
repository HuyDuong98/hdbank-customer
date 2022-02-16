import { Grid, Container } from '@material-ui/core'
import Style from '@styles/product/ProductDetail.module.scss'

import { useRecoilValue } from 'recoil'
import { isMobileState } from '../../stores/sharedStores'

//components
import PageHeading from '../../components/shared/PageHeading'
import Detail from '../../components/product/Detail'
import ListFAQ from '../../components/product/ListFAQ'

//utils
import { getCookie } from '@utils/helpers/cookieHelpers'
import { pagePath } from '../../utils/constants/pagePath'
import i18n from '../../config/i18next'

//apis
import { getProductDetail } from '../../apis/landing-page/product'

export default function ProductDetailPage({ data }) {
  const lstBreadCrumb = [{ label: 'productList', path: pagePath.productPage }, { label: 'cardDetails' }]
  const content = data

  const isMobile = useRecoilValue(isMobileState)

  return (
    <Container className={Style.pageWrap}>
      <Grid className={Style.paddingPage}>
        {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}
        <Detail {...content.info} lstPromote={content.promotes} />
        <ListFAQ lstFQA={content.faQs} />
      </Grid>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const param = context.params?.productUrl
  const id = param.slice(param.indexOf('.') + 1)

  let langCode = getCookie('UserLanguage', context.req.headers.cookie) || 'vi'
  langCode = langCode === 'vn' || i18n.language === 'vi-VN' ? 'vi' : 'en'

  const data = await getProductDetail(langCode, id)

  return {
    props: {
      data,
    },
  }
}
