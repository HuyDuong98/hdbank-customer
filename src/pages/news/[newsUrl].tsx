import { Container, Grid, Typography, IconButton, Divider, useMediaQuery } from '@material-ui/core'
import { useState } from 'react'
import Style from '../../styles/news/NewsDetail.module.scss'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import { Markup } from 'interweave'
import copy from 'copy-to-clipboard'
import { createTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import i18n from '../../config/i18next'
import { useRouter } from 'next/router'

//components
import BannerSlide from '../../components/shared/BannerSlide'
import PageHeading from '../../components/shared/PageHeading'
import SocialShare from '../../components/shared/SocialShare'
import PageTitle from '@components/shared/PageTitle'

//utils
import { getNewsDetailPage } from '../../apis/landing-page/news'
import { getCookie } from '../../utils/helpers/cookieHelpers'
import { pagePath } from '../../utils/constants/pagePath'

//apis
import { getBanner } from '../../apis/landing-page/banner'

//stores
import { isMobileState } from '../../stores/sharedStores'

//image
const NewsImg = '/assets/mobile/landing/news-page.png'

//icons
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined'
import CloseIcon from '@material-ui/icons/Close'

const lstBreadCrumb = [{ label: 'news', path: pagePath.news }, { label: 'newsDetail' }]

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

export default function NewsDetailPage({ bannerData, data }) {
  const { t } = useTranslation()
  const isMobile = useRecoilValue(isMobileState)
  const isXsSize = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  })
  const router = useRouter()

  const [showBanner, setShowBanner] = useState(true)
  const contentPage = data

  const handleCopyLink = () => {
    copy(window.location.href, {
      debug: true,
      message: 'Press #{key} to copy',
    })
  }

  const handleChangePage = (id) => {
    router.push(`/news/${id}`)
  }

  const renderCopyLink = () => {
    return (
      <Grid className={Style.mediaWrap}>
        <Grid>
          <SocialShare />
        </Grid>
        <Grid>
          <Grid container alignItems="center" className={Style.copylink}>
            <Grid item>
              <Typography>{t('copyLink')}</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleCopyLink}>
                <FileCopyOutlined />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const renderRelatedList = (listNews) => {
    return (
      <Grid className={Style.relatedList}>
        <Typography variant="h6" align="center">
          {t('relatedNews')}
        </Typography>
        <Divider />

        <Grid container spacing={3} className={Style.listOtherWrap}>
          {listNews?.map((item, idx) => {
            const { content, title, createdDate, pc_mode, mobile_mode, id, type_text } = item
            const image = !isMobile ? pc_mode : mobile_mode
            return (
              <Grid key={idx} item sm={4}>
                {isXsSize && (
                  <Typography variant="body1" className={Style.titleMobile} onClick={() => handleChangePage(id)}>
                    {title}
                  </Typography>
                )}
                <Grid container spacing={2}>
                  <Grid item sm={12} xs={6} onClick={() => handleChangePage(id)}>
                    <img src={image || NewsImg} />
                  </Grid>
                  <Grid item sm={12} xs={6}>
                    <Grid container direction="column">
                      <Grid container alignItems="center" className={Style.dateWrap}>
                        <div className={Style.arrow}>
                          <div className={Style.innerArrow}>{type_text}</div>
                        </div>
                        <Typography variant="body2">{createdDate}</Typography>
                      </Grid>

                      <Typography
                        variant="body1"
                        className={clsx(Style.title, {
                          [Style.titlePC]: isXsSize,
                        })}
                        onClick={() => handleChangePage(id)}
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

  const renderBannerPage = () => {
    const image = !isMobile ? bannerData.pc_mode : bannerData.mobile_mode

    return (
      showBanner && (
        <Grid
          className={clsx(Style.bannerPage, {
            [Style.mobileMode]: isMobile,
          })}
        >
          <Grid className={Style.imgWrap}>
            <CloseIcon className={Style.icon} onClick={() => setShowBanner(false)} />
            <img src={image} />
          </Grid>
        </Grid>
      )
    )
  }

  return (
    <Grid className={Style.newsDetailPageWrap}>
      <Container>
        {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}

        <Grid className={Style.contentWrap}>
          <Grid className={Style.bannerWrap}>
            <BannerSlide listBanner={!isMobile ? contentPage?.banners?.pc_Mode : contentPage?.banners?.mobile_Mode} />
          </Grid>

          <Grid container alignItems="center" className={Style.dateWrap}>
            <div className={Style.arrow}>
              <div className={Style.innerArrow}>{contentPage?.type_text}</div>
            </div>
            <Typography variant="body2">{contentPage?.createdDate}</Typography>
          </Grid>

          <PageTitle title={t(contentPage?.title)} />

          <Markup content={contentPage?.content} />
          {renderCopyLink()}
        </Grid>

        {renderRelatedList(contentPage?.relatedNews)}
      </Container>

      {bannerData && renderBannerPage()}
    </Grid>
  )
}

export async function getServerSideProps(context) {
  const param = context.params?.newsUrl
  const id = param.slice(param.indexOf('.') + 1)

  let langCode = getCookie('UserLanguage', context.req.headers.cookie) || 'vi'
  langCode = langCode === 'vn' || i18n.language === 'vi-VN' ? 'vi' : 'en'

  const bannerData = await getBanner(langCode, 2)
  const data = await getNewsDetailPage(langCode, id)

  return {
    props: {
      bannerData,
      data,
    },
  }
}
