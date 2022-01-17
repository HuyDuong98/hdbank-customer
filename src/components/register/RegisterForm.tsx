import { FC, useState } from 'react'
import Style from '../../styles/account/RegisterForm.module.scss'
import { Grid, Container, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

//components
import RegisterStepper from './RegisterStepper'
import RegisterCompleted from './RegisterCompleted'
import CustomerInfo from './CustomerInfo'
import LoginAccount from './LoginAccount'
import VerifyOTP from '../../components/OTP/VerifyOTP'

const lstStep = [
  {
    main: 'Thông tin khách hàng',
    sub: 'Họ tên, số điện thoại',
  },
  {
    main: 'Xác thực OTP',
    sub: 'Xác thực OTP',
  },
  {
    main: 'Tài khoản đăng nhập',
    sub: 'Tên đăng nhập, mật khẩu',
  },
  {
    main: 'Hoàn tất',
    sub: 'Đăng ký thành công',
  },
]

enum Stepper {
  Identification,
  FaceAuthentication,
  AccountInformation,
  Complete,
}

const RegisterForm: FC = () => {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)
  const [isOTP, setIsOTP] = useState(false)

  const handleShowOTP = () => setIsOTP(!isOTP)

  const handleSuccessOTP = () => {
    setActiveStep(activeStep + 1)
  }

  const handleVerifyOTP = () => {
    setActiveStep(1)
    handleShowOTP()
  }

  const handleStepClick = (step: number) => {
    setActiveStep(step)
  }

  const handleNext = () => {
    if (activeStep === 3) return
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const renderStepComponent = () => {
    if (activeStep === 0) return renderCustomerInfo()
    if (activeStep === 1) return renderOTP()
    if (activeStep === 2) return renderLoginAccount()

    return <RegisterCompleted />
  }

  const renderOTP = () => {
    const dProps = {
      isOpen: isOTP,
      handleClose: () => handleShowOTP(),
      handleSuccessOTP: () => handleSuccessOTP(),
    }
    return <VerifyOTP {...dProps} />
  }

  const renderCustomerInfo = () => {
    const idProps = {
      handleNext: () => handleVerifyOTP(),
    }
    return <CustomerInfo {...idProps} />
  }

  const renderLoginAccount = () => {
    const idProps = {
      handleNext: () => handleNext(),
    }
    return <LoginAccount {...idProps} />
  }

  const renderStepper = () => {
    const sProps = {
      activeStep,
      steps: lstStep,
      cssClass: Style.stepper,
      completedStep: Stepper.Complete,
      onStepClick: handleStepClick,
    }
    return <RegisterStepper {...sProps} />
  }

  const renderBody = () => {
    return (
      <Container fixed>
        <Grid container className={Style.registerTitle}>
          <Typography variant="subtitle1" className={Style.now}>
            {t(' ĐĂNG KÝ NGAY')}
          </Typography>
          &nbsp;
          <Typography>{t('để nhận được nhiều gói vay với ưu đãi hấp dẫn dành cho riêng bạn')}</Typography>
        </Grid>

        <Grid container className={Style.registerBody}>
          <Grid item xs={12} md={5} lg={4}>
            {renderStepper()}
          </Grid>
          <Grid item xs={12} md={7} lg={8} className={Style.registerContent}>
            {renderStepComponent()}
          </Grid>
        </Grid>
      </Container>
    )
  }

  return <Grid container>{renderBody()}</Grid>
}

export default RegisterForm
