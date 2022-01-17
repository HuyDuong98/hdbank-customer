import { Box, Grid } from '@material-ui/core'
import { FC } from 'react'
import Style from '../../styles/layouts/LandingPage.module.scss'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import DialogTips from '../shared/DialogTips'

const LayoutLandingPage: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box className={Style.wapperLadding}>{children}</Box>
      <DialogTips />
      <Footer />
    </>
  )
}
export default LayoutLandingPage
