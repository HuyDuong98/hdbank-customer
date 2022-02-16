// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import Style from '../../styles/components/shared/Banner.module.scss'
import { FC } from 'react'
import { Box } from '@material-ui/core'
import { TIME_AUTO_PLAY_SLIDE } from '../../utils/constants/variables'
// install Swiper modules
SwiperCore.use([Pagination, Autoplay])
interface IBannerSlideProps {
  listBanner: string[]
  dotPosition?: 'in' | 'under'
}
const BannerSlide: FC<IBannerSlideProps> = ({ listBanner, dotPosition = 'under' }) => {
  return (
    <>
      {listBanner && (
        <Swiper observer observeParents pagination={{ clickable: true }} className={Style.slide} autoplay={{
          delay: TIME_AUTO_PLAY_SLIDE,
          disableOnInteraction: false
        }}
          loop={true}
          loopFillGroupWithBlank={true}>
          {listBanner.map((d, i) => (
            <SwiperSlide key={i}>
              <img width="100%" src={d} alt="" />
              {dotPosition === 'under' && <Box className={Style.emptySpacing}></Box>}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  )
}
export default BannerSlide
