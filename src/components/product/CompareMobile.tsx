import { Grid, Typography, Button, IconButton } from '@material-ui/core'
import { FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/product/CompareProduct.module.scss'
import { Markup } from 'interweave'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/router'
import { pagePath } from '../../utils/constants/pagePath'
import Link from 'next/link'

//image
const CardImg = '/assets/mobile/landing/card-2.png'
const emptyCard = '/assets/mobile/landing/empty-card.png'
const ControlBar = '/assets/mobile/landing/control-bar.svg'

//icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import AddIcon from '@material-ui/icons/Add'
import { convertUrltoSlug } from '../../utils/helpers/commonHelpers'
import { TIME_AUTO_PLAY_SLIDE } from '../../utils/constants/variables'

interface IProduct {
  id: string
  title: string
  pc_mode: string
  mobile_mode: string
}
interface ICriteria {
  name: string
  items: { id: string; value: string }[]
}

interface ICompareMobileProps {
  products: IProduct[]
  criterias: ICriteria[]
  onChooseCard: (cardIndex, cardId) => void
}

const CompareMobile: FC<ICompareMobileProps> = (props) => {
  const { products, criterias, onChooseCard } = props
  const { t } = useTranslation()
  const router = useRouter()
  const [fixNameCard, setFixNameCard] = useState(false)
  const [swipers, setSwipers] = useState({
    items: [],
  })
  const addSwiper = (swiper) => {
    setSwipers((swipers: any) => ({
      items: swipers.items.concat([swiper]),
    }))
  }
  const slideToSlide = (index) => {
    swipers.items.map((item: any) => {
      item.slideTo(index, 300)
      return item
    })
  }
  const renderEmptyBox = () => {
    return (
      <Grid className={Style.colDetail}>
        <Grid container direction="column" className={Style.itemProduct}>
          <Typography className={Style.cardName}></Typography>

          <Grid className={Style.emptyCardMobile}>
            <img src={emptyCard} alt="" />
          </Grid>

          <Grid className={Style.addCardMobile} onClick={() => onChooseCard(2, null)}>
            <AddIcon />
            <span className={Style.link}>{t('selectCards')}</span>
          </Grid>
        </Grid>
      </Grid>
    )
  }
  const handleScroll = () => {
    const position = window.pageYOffset
    if (position > 130) {
      setFixNameCard(true)
    } else {
      setFixNameCard(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Grid container className={Style.compareMobileWrap}>
      <Typography variant="h6" className={Style.mobileTitle}>
        {t('compareCards')}
      </Typography>

      <Grid container className={Style.contentWrap}>
        {fixNameCard && (
          <Swiper
            slidesPerView={2}
            onSwiper={(swiper) => addSwiper(swiper)}
            onActiveIndexChange={(swiper) => slideToSlide(swiper.activeIndex)}
            navigation={{
              prevEl: '#navPrev',
              nextEl: '#navNext',
            }}
            className={`${Style.swiperWrap} ${Style.swiperFix}`}
          >
            {products.map((card, idx) => {
              const { title, mobile_mode, id } = card
              return (
                <SwiperSlide key={idx}>
                  <Grid container direction="column" className={`${Style.colDetail} ${Style.first}`}>
                    <Link href={`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`}>
                      <Typography className={Style.cardName}>{title}</Typography>
                    </Link>
                  </Grid>
                </SwiperSlide>
              )
            })}
            {products.length === 2 && <SwiperSlide>{<div></div>}</SwiperSlide>}
          </Swiper>
        )}
        <Swiper
          slidesPerView={2}
          onSwiper={(swiper) => addSwiper(swiper)}
          onActiveIndexChange={(swiper) => slideToSlide(swiper.activeIndex)}
          navigation={{
            prevEl: '#navPrev',
            nextEl: '#navNext',
          }}
          className={Style.swiperWrap}
        >
          {products.map((card, idx) => {
            const { title, mobile_mode, id } = card
            return (
              <SwiperSlide key={idx}>
                <Grid container direction="column" className={`${Style.colDetail} ${Style.first}`}>
                  <Link href={`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`}>
                    <Typography className={Style.cardName}>{title}</Typography>
                  </Link>
                  <Link href={`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`}>
                    <img src={mobile_mode || CardImg} className={Style.cardImg} />
                  </Link>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disableElevation
                    onClick={() => {
                      router.push(pagePath.register)
                    }}
                  >
                    {t('register')}
                  </Button>

                  <Link href={`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`} passHref>
                    <Typography className={Style.link}>{t('seeDetail')}</Typography>
                  </Link>

                  <Grid>
                    <Button
                      startIcon={<img src={ControlBar} className={Style.chooseIcon} />}
                      onClick={() => onChooseCard(idx, id)}
                    >
                      {t('chooseAnotherCards')}
                    </Button>
                  </Grid>
                </Grid>
              </SwiperSlide>
            )
          })}

          {products.length === 2 && <SwiperSlide>{renderEmptyBox()}</SwiperSlide>}
        </Swiper>

        <>
          <IconButton id="navPrev" className={Style.navPrev}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton id="navNext" className={Style.navNext}>
            <ChevronRightIcon />
          </IconButton>
        </>
      </Grid>

      {criterias.map((cri, idx) => {
        const { name, items } = cri
        return (
          <Grid container key={idx}>
            <Grid className={Style.headDetail}>
              <Typography>{name}</Typography>
            </Grid>

            <Grid container className={Style.contentWrap}>
              <Swiper
                slidesPerView={2}
                navigation={{
                  prevEl: '#navPrev',
                  nextEl: '#navNext',
                }}
                className={Style.swiperWrap}
                onSwiper={(swiper) => addSwiper(swiper)}
                onActiveIndexChange={(swiper) => slideToSlide(swiper.activeIndex)}
              >
                {items.map((item, idx) => {
                  const { value } = item
                  return (
                    <SwiperSlide key={idx}>
                      <Grid container direction="column" className={Style.colDetail}>
                        <Markup content={value} />
                      </Grid>
                    </SwiperSlide>
                  )
                })}

                {products.length === 2 && <SwiperSlide></SwiperSlide>}
              </Swiper>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
export default CompareMobile
