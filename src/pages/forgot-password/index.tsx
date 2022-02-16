import { FC, useState } from 'react'
import Style from '../../styles/account/LoginForm.module.scss'
import { Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import Slideshow from '../../components/account/Slideshow'
import ForgotPassForm from '../../components/account/ForgotPassForm'
import { useTranslation } from 'react-i18next'
import { pagePath } from '../../utils/constants/pagePath'
import VerifyOTP from '../../components/otp/VerifyOTP'
import { useRouter } from 'next/router'

const Logo = '/assets/Logo.png'

const ForgotPassword: FC = () => {
  const { t } = useTranslation()

  const [isOpenOTP, setIsOpenOTP] = useState(false)

  const handleSendRequest = () => handleCloseOTP()

  const handleCloseOTP = () => setIsOpenOTP(!isOpenOTP)
  const router = useRouter()

  const handleSuccessOTP = () => router.push(pagePath.changePassword)

  const renderVerifyOTP = () => {
    const dProps = {
      isOpen: isOpenOTP,
      handleClose: () => handleCloseOTP(),
      handleSuccessOTP: () => handleSuccessOTP(),
    }
    return (
      <>
        <VerifyOTP {...dProps} />
      </>
    )
  }

  const renderBodyPage = () => {
    const fProps = {
      handleSendRequest: () => handleSendRequest(),
    }

    return (
      <Grid container className={Style.container}>
        <Grid item xs={12} md={6} className={Style.mainWrapper}>
          <Slideshow />
        </Grid>
        <Grid item xs={12} md={6} className={Style.mainWrapper}>
          <Grid container justifyContent="center">
            <Grid item md={10} lg={7} className={Style.wrapper}>
              <img src={Logo} className={Style.logo} onClick={() => router.push(pagePath.login)} />

              <Grid container className={Style.headingWrapper}>
                <Typography variant="h3" color="primary">
                  Cùng HDBANK <br /> đem ước mơ về nhà
                </Typography>
              </Grid>

              <ForgotPassForm {...fProps} />
              <Grid container justifyContent="center" className={Style.registerWrapper}>
                <Link href={pagePath.login} >
                  {t('Quay về đăng nhập')}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {renderVerifyOTP()}
      </Grid>
    )
  }

  return <>{renderBodyPage()}</>
}

export default ForgotPassword
