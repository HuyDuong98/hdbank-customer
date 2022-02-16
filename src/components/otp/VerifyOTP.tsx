import { Box, Button, Divider, Typography } from '@material-ui/core'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CustomDialog from '../shared/CustomDialog'
import Style from '../../styles/components/VerifyOTP.module.scss'
import { useState } from 'react'
import OtpInput from 'react-otp-input'

interface IVerifyOTPProps {
  isOpen: boolean
  handleClose: () => void
  handleSuccessOTP: () => void
}

const VerifyOTP: FC<IVerifyOTPProps> = (props) => {
  const { isOpen, handleClose, handleSuccessOTP } = props

  const [otpVerification, setOtpVerification] = useState('')
  const { t } = useTranslation()

  const handleSubmit = () => {
    handleSuccessOTP()
    handleClose()
  }
  return (
    <>
      <CustomDialog isOpen={isOpen} title={t('Xác thực OTP')} handleClose={handleClose}>
        <Box className={Style.otpWrapper}>
          <Typography component="h4">{t('XÁC THỰC OTP')}</Typography>
          <Typography>
            {t('Mã xác minh OTP đã được gửi đến xxxxxxx123')}
            <br />
            {t('với mục đính xác thực thông tin')}
          </Typography>

          <OtpInput
            value={otpVerification}
            onChange={setOtpVerification}
            numInputs={6}
            containerStyle={Style.otpInputWrapper}
          />
          <Box>
            <Typography>{t('Sẽ hết hạn sau')}:</Typography>
            <br />
            <Typography color="primary">{t('60 giây')}</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={Style.btnConfirm}
            disableElevation
          >
            {t('Xác nhận')}
          </Button>
          <Divider />
          <Box className={Style.otpNote}>
            <Typography>
              Lưu ý: Mã OTP chỉ được gửi đến số điện thoại <br />
              bạn đăng ký với HDBANK
            </Typography>
          </Box>
          <Button variant="outlined" color="primary" disableElevation>
            {t('Gửi lại OTP')} (3)
          </Button>
        </Box>
      </CustomDialog>
    </>
  )
}
export default VerifyOTP
