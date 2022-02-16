import { Box } from '@material-ui/core'
import { FC } from 'react'
import Style from '../../styles/layouts/LandingPage.module.scss'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import DialogTips from '../shared/DialogTips'
import { useRecoilValue } from 'recoil'
import { isOpenMenu } from '../../stores/sharedStores'

const LayoutLandingPage: FC = ({ children }) => {
  const openMenuState = useRecoilValue(isOpenMenu)
  return (
    <Box className={`${openMenuState && Style.hiddenWrap}`}>
      <Header />
      <Box className={Style.wapperLadding}>{children}</Box>
      <DialogTips />
      <Footer />
    </Box>
  )
}
export default LayoutLandingPage
