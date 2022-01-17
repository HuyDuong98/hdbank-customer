import { FC } from 'react'
import Style from '../../styles/components/shared/Banner.module.scss'
import { Grid } from '@material-ui/core'

const Banner: FC = () => {
  return (
    <Grid container className={Style.container}>
      <img className={Style.bannerImage} src='/assets/Banner.svg'/>
    </Grid>
  )
}
export default Banner
