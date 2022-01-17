import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import Style from '../../styles/news/News.module.scss'
import { useTranslation } from 'react-i18next'
import { isMobileState } from '../../stores/sharedStores'
import { useRecoilValue } from 'recoil'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { convertUrltoSlug } from '../../utils/helpers/commonHelpers'

//image
const NewsImg = '/assets/mobile/landing/news-page.png'

interface AllNewsProps {
  general: any
  news: any
  promotional_news: any
  servicesNew: any
  isXsSize: boolean
}

const AllNews: FC<AllNewsProps> = (props) => {
  const { general, news, promotional_news, servicesNew, isXsSize } = props
  const router = useRouter()

  const { t } = useTranslation()
  const isMobile = useRecoilValue(isMobileState)

  const handleChangePage = (title, id) => {
    router.push({
      pathname: '/news/[newsUrl]',
      query: { newsUrl: `${convertUrltoSlug(title)}.${id}` },
    })
  }

  const renderGeneralItem = (props) => {
    const { content, create_date, id, pc_mode, mobile_mode, type_text, title, isItem } = props
    const image = !isMobile ? pc_mode : mobile_mode
    return (
      <Grid container className={Style.generalItem}>
        {isItem && (
          <Typography variant="body1" className={Style.titleMobile} onClick={() => handleChangePage(title, id)}>
            {title}
          </Typography>
        )}
        <Grid container spacing={isXsSize ? 2 : 1}>
          <Grid item sm={12} xs={isItem ? 6 : 12}>
            <img onClick={() => handleChangePage(title, id)} src={image || NewsImg} />
          </Grid>
          <Grid item sm={12} xs={isItem ? 6 : 12}>
            <Grid
              container
              direction="column"
              className={clsx({
                [Style.itemInfo]: isItem,
              })}
            >
              <Grid container alignItems="center" className={Style.dateWrap}>
                <div className={Style.arrow}>
                  <div className={Style.innerArrow}>{type_text}</div>
                </div>
                <Typography variant="body2">{create_date}</Typography>
              </Grid>
              <Typography
                variant={!isItem ? 'h6' : 'body1'}
                className={Style.title}
                onClick={() => handleChangePage(title, id)}
              >
                {title}
              </Typography>
              <span
                className={clsx(Style.content, {
                  [Style.contentItem]: isItem,
                })}
              >
                {content}
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const renderGeneralNews = () => {
    return (
      <Grid container spacing={5} className={Style.generalWrap}>
        <Grid item sm={8}>
          {renderGeneralItem({ ...general.highlight })}
        </Grid>

        <Grid item sm={4}>
          <Grid container spacing={3}>
            {general?.news?.map((news, idx) => {
              return (
                <Grid key={idx} item>
                  {renderGeneralItem({ ...news, isItem: true })}
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const renderNewsByCate = (props) => {
    const { titleNews, highlight, news } = props

    if (!highlight) return <></>

    const { content, create_date, id, pc_mode, mobile_mode, title } = highlight
    const image = !isMobile ? pc_mode : mobile_mode
    return (
      <Grid className={Style.byCateWrap}>
        <Typography variant="h6" className={Style.heading}>
          {t(titleNews)}
        </Typography>
        <Grid container spacing={isXsSize ? 2 : 5} className={Style.mainNewsWrap}>
          <Grid item sm={6}>
            <Grid container>
              <img src={image || NewsImg} onClick={() => handleChangePage(title, id)} />
            </Grid>
          </Grid>

          <Grid item sm={6}>
            <Grid container direction="column">
              <Typography variant="body2" className={Style.date}>
                {create_date}
              </Typography>
              <Typography variant="h6" className={Style.title} onClick={() => handleChangePage(title, id)}>
                {title}
              </Typography>
              <span className={Style.content}>{content}</span>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={5} className={Style.otherNewsWrap}>
          {news?.map((newsItem, idx) => {
            const { content, create_date, id, pc_mode, mobile_mode, title } = newsItem
            const image = !isMobile ? pc_mode : mobile_mode
            return (
              <Grid key={idx} item sm={4}>
                {isXsSize && (
                  <Typography variant="body1" className={Style.titleMobile} onClick={() => handleChangePage(title, id)}>
                    {title}
                  </Typography>
                )}
                <Grid container spacing={2}>
                  <Grid item sm={12} xs={6}>
                    <img src={image || NewsImg} onClick={() => handleChangePage(title, id)} />
                  </Grid>
                  <Grid item sm={12} xs={6}>
                    <Grid container direction="column">
                      <Typography variant="body2" className={Style.date}>
                        {create_date}
                      </Typography>
                      <Typography
                        variant="body1"
                        className={clsx(Style.title, {
                          [Style.titlePC]: isXsSize,
                        })}
                        onClick={() => handleChangePage(title, id)}
                      >
                        {title}
                      </Typography>
                      <span className={Style.content}>{content}</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid className={Style.allNewsWrap}>
      {renderGeneralNews()}
      {renderNewsByCate({ ...news, titleNews: 'news' })}
      {renderNewsByCate({ ...promotional_news, titleNews: 'promotionInformation' })}
      {renderNewsByCate({ ...servicesNew, titleNews: 'tin sản phẩm & dịch vụ' })}
    </Grid>
  )
}

export default AllNews
