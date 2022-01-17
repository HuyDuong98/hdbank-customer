import { FC, useState } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import Style from '@styles/account/LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import OtpInput from 'react-otp-input'

const ConfirmOTP: FC = () => {
  const [otpVerification, setOtpVerification] = useState('')

  const { t } = useTranslation()

  const renderInput = () => {
    return (
      <OtpInput
        value={otpVerification}
        onChange={setOtpVerification}
        numInputs={6}
        containerStyle={Style.otpInputWrapper}
      />
    )
  }

  return (
    <>
      <div className={Style.titleWrapper}>
        <h3>Xác nhận OTP</h3>
        <span>Mã OTP đã được gửi đến 039****552</span>
        <span className={Style.alert}>1 phút 30 giây</span>
      </div>

      {renderInput()}

      <Grid container justifyContent="center" className={Style.buttonWrapper}>
        <Button variant="contained" color="primary" size="large" fullWidth={true}>
          {t('Xác nhận OTP')}
        </Button>
        <Typography variant="body2" className={Style.alertText}>
          OTP chỉ gửi đến số điện thoại đã đăng ký với HDSaiSon
        </Typography>
      </Grid>
    </>
  )
}

export default ConfirmOTP
