import { FC } from 'react'
import { Grid, Typography, Avatar, IconButton, Button, Box, Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/product/ProductDetail.module.scss'
import RatingStar from '../../components/shared/RatingStar'
import { isMobileState } from '../../stores/sharedStores'
import { useRecoilValue } from 'recoil'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

//icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

interface IFeedBackItem {
  id: string
  name: string
  position: string
  rate: number
  content: string
  avatar: string | null
}

interface IFeedBackProps {
  lstFeedback: IFeedBackItem[]
}

const ListReview: FC<IFeedBackProps> = (props) => {
  const { lstFeedback } = props
  const { t } = useTranslation()
  const isMobile = useRecoilValue(isMobileState)

  return (
    <Grid className={Style.bgColor}>
      <Container>
        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
          className={Style.customerReviewWrap}
        >
          <Grid container direction="column" className={Style.headingWrap}>
            <Grid container direction="column" className={Style.title}>
              <Typography variant="h3">{t('Khách hàng nhận xét')}</Typography>
            </Grid>
            <span>{t('Excepteur sint occaecat cupidatat non proident, sunt in culpa qui')}</span>
          </Grid>

          <Grid container className={Style.sliderWrap}>
            <Swiper
              breakpoints={{
                300: {
                  slidesPerView: 'auto',
                },
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                960: {
                  slidesPerView: 3,
                },
              }}
              navigation={
                !isMobile
                  ? {
                      prevEl: '#navPrevReview',
                      nextEl: '#navNextReview',
                    }
                  : false
              }
              className={Style.swiperWrap}
            >
              {lstFeedback.map((feedback, idx) => {
                const { name, position, rate, content, avatar } = feedback

                return (
                  <SwiperSlide key={idx} className={Style.slideItem}>
                    <Grid container alignItems="center" className={Style.itemWrap}>
                      <Grid container alignItems="center" className={Style.padding}>
                        <RatingStar canAction={false} rating={rate} />

                        <span className={Style.comments}>{content}</span>

                        <Grid item>
                          <Avatar
                            alt="Remy Sharp"
                            src={avatar || 'https://mui.com/static/images/avatar/1.jpg'}
                            className={Style.avatarImg}
                          ></Avatar>
                        </Grid>
                        <Grid item>
                          <Grid container direction="column" className={Style.productInfo}>
                            <span>{t(name)}</span>
                            <span>{t(position)}</span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {!isMobile && (
              <>
                <IconButton id="navPrevReview" className={Style.navPrev}>
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton id="navNextReview" className={Style.navNext}>
                  <ChevronRightIcon />
                </IconButton>
              </>
            )}
          </Grid>

          {!isMobile && (
            <Grid className={Style.btnDiv}>
              <Button disableElevation variant="contained" color="primary" className={Style.mobileBtn}>
                {t('Xem tất cả')}
              </Button>
            </Grid>
          )}

          <Grid item xs={10} sm={8} md={6} lg={5}>
            <Box textAlign="center" className={Style.contentColor}>
              <Typography component="p">
                <Typography component="span">HD Bank</Typography>
                luôn lắng nghe và không ngừng nâng cao chất lượng sản phẩm và dịch vụ nhằm mang đến sự trải nghiệm gia
                tăng cho Khách hàng của mình.
              </Typography>
              <Button variant="contained" color="primary">
                {t('Gửi đánh giá')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default ListReview
