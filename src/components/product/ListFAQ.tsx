import { Grid, Typography } from '@material-ui/core'
import { FC, useState, useEffect } from 'react'
import Style from '../../styles/product/ProductDetail.module.scss'
import { useTranslation } from 'react-i18next'
import { pagePath } from '../../utils/constants/pagePath'
import FAQItem from '../faq/FAQItem'
import { useQuery } from 'react-query'
import { getFaqDetail } from '../../apis/faq'
import { useRouter } from 'next/router'
interface IFAQ {
  id: string
  title: string
  content: string
}
interface IListFQAProps {
  lstFQA: IFAQ[]
}

const ListFQA: FC<IListFQAProps> = (props) => {
  const { lstFQA } = props
  const { t, i18n } = useTranslation()
  const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language

  const [desc, setDesc] = useState<any>()
  const router = useRouter()

  let faqID = ''

  const { data: faqDetail, refetch } = useQuery(
    ['faqDetailQuery', langCode, faqID],
    () => getFaqDetail(langCode, faqID),
    {
      enabled: false,
    },
  )

  useEffect(() => {
    if (!faqDetail) return
    setDesc(faqDetail.description)
  }, [faqDetail])

  const handleGetFaqDetail = (id: string) => {
    faqID = id
    refetch()
  }

  return (
    <Grid className={Style.fqaWrap}>
      <Grid container direction="column" className={Style.headingWrap}>
        <Grid container direction="column" className={Style.title}>
          <Typography variant="h3">{t('faq')}</Typography>
        </Grid>
      </Grid>
      {lstFQA.map((item, idx) => (
        <Grid key={idx} onClick={() => handleGetFaqDetail(item.id)}>
          <FAQItem question={item.title} content={desc} />
        </Grid>
      ))}
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
