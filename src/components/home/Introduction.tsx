import { FC, useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/components/home/Introduction.module.scss'
import Joi from 'joi'
import { useValidateForm } from '../../hooks/useValidateForm'
import { sendOTP, verifyOTP } from '../../apis/otp'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { pagePath } from '../../utils/constants/pagePath'

//components
import CustomTextField from '../shared/CustomTextField'
import DialogOTP from '../otp/DialogOTP'
import DialogRegister from '../register/DialogRegister'
import DialogSetPassword from '../register/DialogSetPassword'
import DialogAccountExist from '../register/DialogAccountExist'

//images
const IntroduceImg = '/assets/mobile/landing/introduce.png';

const schema = Joi.object({
  phoneNumber: Joi.string()
    .empty(null)
    .required()
    .length(10)
    .pattern(new RegExp(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/))
    .messages({
      'any.required': 'phoneNoneEmpty',
      'string.pattern.base': 'phoneWrong',
      'string.length': 'phoneWrong',
    }),
})

const Introduce: FC = () => {
  const { t } = useTranslation()
  const [validatedKey, setValidatedKey] = useState<string>()
  const [isOTP, setIsOTP] = useState(false)
  const [isDialogRegister, setIsDialogRegister] = useState(false)
  const [isDialogSetPassword, setIsDialogSetPassword] = useState(false)
  const [isDialogAccountExist, setIsDialogAccountExist] = useState(false)

  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true)
  const [loginForm, setLoginForm] = useState<any>({
    phoneNumber: null,
  })

  let otpNumber = ''

  const router = useRouter()

  const [otpResponse, setOtpResponse] = useState({
    responseCode: 0,
    responseMessage: '',
    otp_Remaining: 0,
    expired_Date: '',
    unlock_Date: '',
  })

  const { errors, validateAll } = useValidateForm(loginForm, schema, validatedKey)

  const { data: otpData, refetch: sendOtp } = useQuery('otpQuery', () => sendOTP(loginForm.phoneNumber), {
    enabled: false,
  })

  const { data: verifyData, refetch: verifyOtp } = useQuery(
    'verifyOtpQuery',
    () => verifyOTP(loginForm.phoneNumber, otpNumber),
    {
      enabled: false,
    },
  )

  useEffect(() => {
    if (!otpData) return
    if (otpData.responseCode === 1) {
      setOtpResponse(otpData)
      setIsOTP(true)
    } else {
      handleShowDialogAccountExist()
    }
  }, [otpData])

  useEffect(() => {
    if (!verifyData) return
    handleShowOTP()
    if (verifyData.responseCode === 1) {
      handleShowDialogRegister()
    }
  }, [verifyData])

  const hanldeSendOtp = () => {
    sendOtp()
  }

  const handleVerify = (otp) => {
    otpNumber = otp
    verifyOtp()
  }

  const handleShowOTP = () => setIsOTP(!isOTP)
  const handleShowDialogRegister = () => setIsDialogRegister(!isDialogRegister)
  const handleShowDialogSetPassword = () => setIsDialogSetPassword(!isDialogSetPassword)
  const handleShowDialogAccountExist = () => setIsDialogAccountExist(!isDialogAccountExist)

  const handleOnchange = (value, key) => {
    setValidatedKey(key)
    setLoginForm((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const checkSubmitEnable = () => {
    if (loginForm.phoneNumber && validateAll()) {
      setDisabledSubmit(false)
    } else {
      setDisabledSubmit(true)
    }
  }

  const getErrorMessage = (field: string) => {
    const error = errors?.find((f) => f.field === field)
    return error ? t(error.message) : ''
  }

  const hasErrors = (field: string) => {
    const error = getErrorMessage(field)
    return !!error
  }

  const handleSuccessForm = () => {
    handleShowDialogRegister()
    handleShowDialogSetPassword()
  }

  const renderOTP = () => {
    const dProps = {
      ...otpResponse,
      isOpen: isOTP,
      phone: loginForm.phoneNumber || '',
      handleClose: () => handleShowOTP(),
      handleResend: () => hanldeSendOtp(),
      handleVerify: (otp) => handleVerify(otp),
    }
    return <DialogOTP {...dProps} />
  }

  const renderDialogAccountExist = () => {
    const dProps = {
      isOpen: isDialogAccountExist,
      phone: loginForm.phoneNumber || '',
      handleClose: () => handleShowDialogAccountExist(),
    }
    return <DialogAccountExist {...dProps} />
  }

  const renderDialogRegister = () => {
    const dProps = {
      isOpen: isDialogRegister,
      handleClose: () => handleShowDialogRegister(),
      handleSuccess: () => handleSuccessForm(),
    }
    return <DialogRegister {...dProps} />
  }

  const renderDialogSetPassword = () => {
    const dProps = {
      isOpen: isDialogSetPassword,
      handleClose: () => handleShowDialogSetPassword(),
    }
    return <DialogSetPassword {...dProps} />
  }

  const renderPageBody = () => {
    return (
      <Grid className={Style.introduceWrap}>
        <div className={Style.imgWrap}>
          <Grid container className={Style.imgDiv}>
            <img src={IntroduceImg} className={Style.introduceImg} />
          </Grid>
        </div>

        <div className={Style.textWrap}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <span className={Style.highlight}>{t('breakPayment')}</span>

              <Grid container direction="column" className={Style.headingWrap}>
                <Grid container direction="column" className={Style.title}>
                  <Typography variant="h3">{t('fastTransaction')}</Typography>
                  <Typography variant="h3">{t('securePayment')}</Typography>
                </Grid>

                <Grid container direction="column" className={Style.sub}>
                  <Typography variant="body2">{t('customerTrusted')}</Typography>
                  <Typography variant="body2">{t('registerNow')}</Typography>
                </Grid>
              </Grid>

              <Grid container className={Style.form}>
                <Grid container>
                  <div className={Style.textFieldWrapper}>
                    <CustomTextField
                      value={loginForm.phoneNumber}
                      placeholder={t('09XX XXX XXX')}
                      error={hasErrors('phoneNumber')}
                      helperText={getErrorMessage('phoneNumber')}
                      onChange={(value) => handleOnchange(value || null, 'phoneNumber')}
                      onKeyUp={checkSubmitEnable}
                    />
                  </div>

                  <Grid className={Style.btnDiv}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={Style.mobileBtn}
                      onClick={hanldeSendOtp}
                      disabled={disabledSubmit}
                    >
                      {t('register')}
                    </Button>
                  </Grid>
                </Grid>

                <Grid container className={Style.haveAccount}>
                  <Typography variant="body2">{t('haveAccount')}</Typography>
                  <span
                    className={Style.link}
                    onClick={() => {
                      router.push(pagePath.login)
                    }}
                  >
                    &nbsp;{t('login')}
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }

  return (
    <>
      {renderPageBody()}
      {isOTP && renderOTP()}
      {isDialogRegister && renderDialogRegister()}
      {isDialogSetPassword && renderDialogSetPassword()}
      {isDialogAccountExist && renderDialogAccountExist()}
    </>
  )
}

export default Introduce
