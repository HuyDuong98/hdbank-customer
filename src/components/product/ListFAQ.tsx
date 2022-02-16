import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import Style from '../../styles/product/ProductDetail.module.scss'
import { useTranslation } from 'react-i18next'
import { pagePath } from '../../utils/constants/pagePath'
import FAQItem from '../faq/FAQItem'
import { useRouter } from 'next/router'
import { IFAQDetail } from '@models/IFAQ'
interface IFAQ {
  id: string
  title: string
  description: string
}
interface IListFQAProps {
  lstFQA: IFAQ[]
}

const ListFQA: FC<IListFQAProps> = (props) => {
  const { lstFQA } = props
  const { t } = useTranslation()

  const router = useRouter()

  const faqItems = lstFQA.map<IFAQDetail>((item) => {
    return {
      question_title: item.title,
      id: item.id,
      description: item.description,
    }
  })

  return (
    <Grid className={Style.fqaWrap}>
      <Grid container direction="column" className={Style.headingWrap}>
        <Grid container direction="column" className={Style.title}>
          <Typography variant="h3">{t('faq')}</Typography>
        </Grid>
      </Grid>
      <FAQItem questions={faqItems} />
      <span
        className={Style.link}
        onClick={() => {
          router.push(pagePath.faq)
        }}
      >
        {t('seeMore')}
      </span>
    </Grid>
  )
}
export default ListFQA
