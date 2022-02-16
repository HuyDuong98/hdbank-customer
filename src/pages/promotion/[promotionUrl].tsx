import { Box, Button, Container, Divider, Grid, IconButton, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/promotion/DetailPromotion.module.scss'
import copy from 'copy-to-clipboard'
import { Markup } from 'interweave'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRecoilValue } from 'recoil'
import Link from 'next/link'
import SwiperCore, { Autoplay, Navigation } from 'swiper'

//components
import PageTitle from '@components/shared/PageTitle'
import SocialShare from '../../components/shared/SocialShare'
import BannerSlide from '../../components/shared/BannerSlide'
import PageHeading from '../../components/shared/PageHeading'

//utils
import { pagePath } from '../../utils/constants/pagePath'
import { TIME_AUTO_PLAY_SLIDE } from '../../utils/constants/variables'
import { convertUrltoSlug } from '../../utils/helpers/commonHelpers'
import { getCookie } from '@utils/helpers/cookieHelpers'
import i18n from '../../config/i18next'

//apis
import { getPromotionsDetail } from '../../apis/landing-page/promotion'

//stores
import { isMobileState } from '../../stores/sharedStores'

//icons
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import CardPromotionOther from '../../components/promotion/CardPromotionOther'
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined'
import { useRef } from 'react'

export default function DetailPromotion({ data }) {
  const { t } = useTranslation()
  const isMobile = useRecoilValue(isMobileState)
  const lstBreadCrumb = [{ label: t('promotion'), path: pagePath.promotion }, { label: t('promotionDetails') }]

  const promotionDetail = data

  SwiperCore.use([Autoplay, Navigation])

  const handleCopyLink = () => {
    copy(window.location.href, {
      debug: true,
      message: 'Press #{key} to copy',
    })
  }

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <Container className={Style.detailPromotion}>
      {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}

      {promotionDetail && (
        <>
          {promotionDetail?.banners &&
            promotionDetail?.banners.pc_Mode.length > 0 &&
            promotionDetail?.banners.mobile_Mode.length > 0 && (
              <Box className={Style.banner}>
                <BannerSlide
                  listBanner={isMobile ? promotionDetail?.banners?.mobile_Mode : promotionDetail?.banners?.pc_Mode}
                />
              </Box>
            )}
          <Box className={Style.contentDetail}>
            <PageTitle title={promotionDetail.promotionName} color="primary" />

            <Grid container className={Style.description}>
              <Grid item md={12} xs={12}>
                <Box className={Style.time}>
                  <AccessTimeIcon />
                  <Typography>
                    {promotionDetail.createdDate}-{promotionDetail.finishDate}
                  </Typography>
                </Box>
                {promotionDetail?.applicable && promotionDetail?.applicable.length > 0 && (
                  <Box mt={3}>
                    <Typography component="h6">{t('appliedCards')}</Typography>
                    {!isMobile ? (
                      <Grid container spacing={3}>
                        {promotionDetail?.applicable?.map((item, index) => (
                          <Grid key={index} item md={2} sm={4} xs={6}>
                            <Box className={Style.card}>
                              <Link href={`${pagePath.productPage}/${convertUrltoSlug(item.title)}.${item.id}`}>
                                <a>
                                  <img src={isMobile ? item.mobile_mode : item.pc_mode} alt={item.title} />
                                </a>
                              </Link>
                              <Box className={Style.detailCard}>
                                <Box>
                                  <Link href={`${pagePath.productPage}/${convertUrltoSlug(item.title)}.${item.id}`}>
                                    <a>
                                      <Typography variant="body1" className={Style.title}>
                                        {item.title}
                                      </Typography>
                                    </a>
                                  </Link>
                                </Box>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  size="small"
                                  onClick={() => (window.location.href = item.url)}
                                >
                                  {t('register')}
                                </Button>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    ) : (
                      <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        observeParents
                        pagination={{
                          clickable: true,
                          bulletActiveClass: `${Style.paginationActiveStyle}`,
                        }}
                        autoplay={{
                          delay: TIME_AUTO_PLAY_SLIDE,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                      >
                        {promotionDetail?.applicable?.map((item, index) => (
                          <SwiperSlide key={index}>
                            <Box className={Style.card}>
                              <div className={Style.image}>
                                <Link href={`${pagePath.productPage}/${convertUrltoSlug(item.title)}.${item.id}`}>
                                  <a>
                                    <img src={isMobile ? item.mobile_mode : item.pc_mode} alt={item.title} />
                                  </a>
                                </Link>
                              </div>
                              <Box className={Style.detailCard}>
                                <Link href={`${pagePath.productPage}/${convertUrltoSlug(item.title)}.${item.id}`}>
                                  <a>
                                    <Typography className={Style.title}>{item.title}</Typography>
                                  </a>
                                </Link>
                              </Box>
                              <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => (window.location.href = item.url)}
                              >
                                {t('Đăng ký')}
                              </Button>
                            </Box>
                            <Box className={Style.sliderSpacingBottom}></Box>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </Box>
                )}
              </Grid>
            </Grid>
            {/* change content from API */}
            <Box mt={3} className={Style.prmotionContent}>
              <Markup content={promotionDetail.content} />
            </Box>
          </Box>
          <Box component="section">
            <Grid container>
              <Grid item md={3}>
                <SocialShare />
              </Grid>
              <Grid item md={3}>
                <Box mt={isMobile ? 3 : 4}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Typography>{t('copyLink')}</Typography>
                    </Grid>
                    <Grid item>
                      <IconButton className={Style.copyLink} onClick={() => handleCopyLink()}>
                        <FileCopyOutlined />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box component="section" className={Style.promotionsOther}>
            <Typography component="h2" align="center">
              {t('discoverMoreOffers')}
            </Typography>
            <Typography align="center" className={Style.subTitle}>
              {t('countlessCreditCardOffersForYou')}
            </Typography>
            <Divider />
            <Box className={Style.sliderOther}>
              <Swiper
                breakpoints={{
                  300: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    centeredSlides: true,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  // when window width is >= 768px
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                navigation={
                  !isMobile
                    ? {
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }
                    : false
                }
                className={Style.swiperOther}
                spaceBetween={30}
                autoplay={{
                  delay: TIME_AUTO_PLAY_SLIDE,
                  disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
              >
                {promotionDetail &&
                  promotionDetail.otherPromotions?.map((data) => {
                    return (
                      <SwiperSlide key={data.id} className={Style.slideItem}>
                        <Link href={`${pagePath.promotion}/${convertUrltoSlug(data.propotionName)}.${data.id}`}>
                          <Grid className={Style.itemWrap}>
                            <CardPromotionOther
                              image={isMobile ? data.mobile_mode : data.pc_mode}
                              title={data.propotionName}
                              content={data.content}
                              startDate={data.start}
                              endDate={data.end}
                              label={data.label_text}
                            />
                          </Grid>
                        </Link>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
              {!isMobile && (
                <>
                  <IconButton ref={navigationPrevRef} id="navPrev" className={Style.navPrev}>
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton ref={navigationNextRef} id="navNext" className={Style.navNext}>
                    <ChevronRightIcon />
                  </IconButton>
                </>
              )}
            </Box>
          </Box>
        </>
      )}
    </Container>
  )
}

export async function getServerSideProps(context) {
  const param = context.params?.promotionUrl
  const id = param.slice(param.indexOf('.') + 1)

  let langCode = getCookie('UserLanguage', context.req.headers.cookie) || 'vi'
  langCode = langCode === 'vn' || i18n.language === 'vi-VN' ? 'vi' : 'en'

  const data = await getPromotionsDetail(langCode, id)

  return {
    props: { data },
  }
}
