import { FC, useState } from 'react'
import { Grid } from '@material-ui/core'
import Style from '../../styles/account/Slideshow.module.scss'
const Slide1= '/assets/slides/slide-3.png'
const Slide2= '/assets/slides/slide-2.png'
const Slide3= '/assets/slides/slide-3.png'

const slideImageSources = [
  {
    id: 1,
    source: Slide1,
  },
  {
    id: 2,
    source: Slide2,
  },
  {
    id: 3,
    source: Slide3,
  },
]

const Slideshow: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  const getSlideClasses = (slide: number) => {
    if (slide !== currentSlide) return `${Style.hiddenSlide} ${Style.fade}`

    return Style.fade
  }

  const getSlideDotClasses = (slide: number) => {
    if (slide === currentSlide) return `${Style.active} ${Style.slideDot}`

    return Style.slideDot
  }

  return (
    <Grid container className={Style.container}>
      {slideImageSources.map((f) => {
        return <img key={f.id} src={f.source} className={getSlideClasses(f.id)} />
      })}
      <Grid container justifyContent="center" className={Style.slideDotWrapper}>
        {slideImageSources.map((f) => {
          return <span key={f.id} className={getSlideDotClasses(f.id)} onClick={() => setCurrentSlide(f.id)} />
        })}
      </Grid>
    </Grid>
  )
}

export default Slideshow
