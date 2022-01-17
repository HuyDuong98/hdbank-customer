// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import Style from '../../styles/components/shared/Banner.module.scss'
import { FC } from 'react'
import { Box } from '@material-ui/core'
// install Swiper modules
SwiperCore.use([Pagination])
interface IBannerSlideProps {
  listBanner: string[]
  dotPosition?: 'in' | 'under'
}
const BannerSlide: FC<IBannerSlideProps> = ({ listBanner, dotPosition = 'under' }) => {
  return (
    <>
      {listBanner && (
        <Swiper observer observeParents pagination={{ clickable: true }} className={Style.slide}>
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
