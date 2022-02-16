import { Box, Typography, Grid, Dialog } from '@material-ui/core'
import { FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/components/DialogOTP.module.scss'
import OtpInput from 'react-otp-input'

//icons
import CloseIcon from '@material-ui/icons/Close'

interface IDialogOTPProps {
  isOpen: boolean
  phone: string
  otp_Remaining: number
  expired_Date: string
  unlock_Date: string
  handleClose: () => void
  handleResend: () => void
  handleVerify: (otp) => void
  // handleSuccessOTP: () => void
}

const DialogOTP: FC<IDialogOTPProps> = (props) => {
  const { isOpen, handleClose, phone, otp_Remaining, expired_Date, unlock_Date, handleResend, handleVerify } = props
  const { t } = useTranslation()
  let timer
  let timerResend

  const [otpVerification, setOtpVerification] = useState('')
  const [seconds, setSeconds] = useState(0)
  const [secondsResend, setSecondsResend] = useState(30)

  useEffect(() => {
    const expired = new Date(expired_Date)
    const unlock = new Date(unlock_Date)
    const msDifference = expired.getTime() - unlock.getTime()
    const minutes = Math.round(msDifference / 60000)
    const resultInMinutes = minutes > 0 ? minutes : 60 + minutes
    setSeconds(resultInMinutes * 60)
  }, [expired_Date, unlock_Date])

  useEffect(() => {
    if (seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000)
    }

    if (secondsResend > 0) {
      timerResend = setTimeout(() => setSecondsResend(secondsResend - 1), 1000)
    }
  })

  useEffect(() => {
    if (otpVerification.length === 6) handleVerify(otpVerification)
  }, [otpVerification])

  const onResend = () => {
    handleResend()
    clearTimeout(timer)
    clearTimeout(timerResend)
    setSeconds(0)
    setSecondsResend(30)
  }

  const renderOTP = () => {
    return (
      <Box className={Style.otpWrapper}>
        <Grid>
          <span>
            {t('enterOPT')}
            <br />
            {t('yourPhone', { phone: phone.slice(-3) })}
          </span>
        </Grid>

        {seconds ? (
          <Grid className={Style.timer}>
            <span>{t('expireOTP')}</span>

            <span className={Style.seconds}>&nbsp;{seconds}&nbsp;</span>

            <span>{t('second')}</span>
          </Grid>
        ) : (
          <Grid className={Style.expires}>
            <Typography variant="body1">{t('hasExpired')}</Typography>
          </Grid>
        )}

        <OtpInput
          value={otpVerification}
          onChange={setOtpVerification}
          numInputs={6}
          containerStyle={Style.otpInputWrapper}
        />

        <Box>
          <Grid>
            <span>{t('notReceiveMessage')}</span>
          </Grid>

          {!secondsResend ? (
            <Grid className={Style.resend}>
              <span onClick={onResend}>{t('resendOTP')}</span>
            </Grid>
          ) : (
            <Grid className={Style.expires}>
              <Typography variant="body1">
                {t('resendOTP')} {`(${secondsResend})s`}
              </Typography>
            </Grid>
          )}
        </Box>
      </Box>
    )
  }

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="lg" scroll="paper" classes={{ paper: Style.dialogWrapper }}>
      <Grid className={Style.dialogHeader}>
        <Typography component="h2">&nbsp;</Typography>

        <CloseIcon className={Style.icon} onClick={handleClose} />
      </Grid>

      {renderOTP()}
    </Dialog>
  )
}
export default DialogOTP
