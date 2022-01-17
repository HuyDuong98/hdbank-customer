import { FC, useEffect, useState } from 'react'
import { Button, Grid, Link, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import Style from '../../styles/account/LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { pagePath } from '../../utils/constants/pagePath'
import Joi from 'joi'
import { ILoginModel } from '../../models/ILoginModel'
import { useValidateForm } from '../../hooks/useValidateForm'
import CustomTextField from '../shared/CustomTextField'
import { setCookie, getCookie, eraseCookie } from '../../utils/helpers/cookieHelpers'
import CustomAvatar from '../shared/CustomAvatar'
import { useMutation } from 'react-query'
import { signIn } from '../../apis/account'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { useRouter } from 'next/router'

const Logo ='/assets/Logo.png'

const schema = Joi.object({
  username: Joi.number().empty(null).required().messages({
    'number.base': 'Vui lòng chỉ nhập số',
    'number.unsafe': 'Số không hợp lệ',
    'any.required': 'Tên đăng nhập không được để trống',
  }),
  password: Joi.string().empty(null).required().messages({
    'any.required': 'Mật khẩu không được để trống',
  }),
  captcha: Joi.string().empty(null).required().max(6).messages({
    'any.required': 'Mã kiểm tra không được để trống',
    'string.max': 'Mã kiểm tra không hợp lệ',
  }),
})

const simpleSchema = Joi.object({
  password: Joi.string().empty(null).required().messages({
    'any.required': 'Mật khẩu không được để trống',
  }),
})

const USERNAME_COOKIE_KEY = 'signedInUsername'

const LoginForm: FC = () => {
  const [captcha] = useState('189605')
  const [loginForm, setLoginForm] = useState<ILoginModel>({
    username: null,
    password: null,
    captcha: null,
  })

  const [validatedKey, setValidatedKey] = useState<string>()
  const [showSimpleLoginForm, setShowSimpleLoginForm] = useState(false)
  const [password, setPassword] = useState({
    icon: <Visibility />,
    hidden: true,
  })
  const { errors, validateAll, eraseErrors } = useValidateForm(
    loginForm,
    showSimpleLoginForm ? simpleSchema : schema,
    validatedKey,
  )
  const { t } = useTranslation()
  const router = useRouter();

  useEffect(() => {
    const username = getCookie(USERNAME_COOKIE_KEY)
    if (username) setShowSimpleLoginForm(true)
  }, [])

  const { mutateAsync } = useMutation(signIn)

  const handleLogin = async () => {
    if (validateAll()) {
      const response = await mutateAsync({
        userName: loginForm.username,
        password: loginForm.password,
      })

      if (response.isSuccessful) {
        setCookie(USERNAME_COOKIE_KEY, response.successData.accessToken, 330)
        router.push(pagePath.personalInfo)
      } else {
        // login faild
        const errorMessage = response.responseMessage
      }
    }
  }

  const handleOnchange = (value: unknown, key: string) => {
    setValidatedKey(key)
    setLoginForm({ ...loginForm, [key]: value })
  }

  const handleResetLoginForm = () => {
    eraseCookie(USERNAME_COOKIE_KEY)
    setShowSimpleLoginForm(false)
    eraseErrors()
  }

  const getErrorMessage = (field: string) => {
    const error = errors?.find((f) => f.field === field)
    return error ? error.message : ''
  }

  const hasErrors = (field: string) => {
    const error = getErrorMessage(field)
    return !!error
  }

  const handleTypePassword = () => {
    if (password.hidden) setPassword({ icon: <VisibilityOff />, hidden: !password.hidden })
    else setPassword({ icon: <Visibility />, hidden: !password.hidden })
  }

  return (
    <Grid container justifyContent="center">
      <Grid item md={10} lg={7} className={Style.wrapper}>
        <img src={Logo} className={Style.logo} onClick={() => router.push(pagePath.login)} />

        <Grid container className={Style.headingWrapper}>
          <Typography variant="h3" color="primary">
            Cùng HDBANK <br /> đem ước mơ về nhà
          </Typography>
        </Grid>

        {!showSimpleLoginForm ? (
          <CustomTextField
            value={loginForm.username}
            placeholder={t('Tên đăng nhập')}
            error={hasErrors('username')}
            helperText={getErrorMessage('username')}
            validation
            onChange={(value) => handleOnchange(value || null, 'username')}
          />
        ) : (
          <Grid container alignItems="center" direction="column">
            <CustomAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"></CustomAvatar>
            <Typography variant="body1">Dương</Typography>
          </Grid>
        )}

        <CustomTextField
          value={loginForm.password}
          placeholder={t('Mật khẩu')}
          error={hasErrors('password')}
          helperText={getErrorMessage('password')}
          validation
          type={password.hidden ? 'password' : 'text'}
          onChange={(value) => handleOnchange(value || null, 'password')}
          icon={password.icon}
          isIconClick={true}
          onIconClick={() => handleTypePassword()}
        />

        {!showSimpleLoginForm && (
          <Grid container spacing={5}>
            <Grid item md={6}>
              <CustomTextField
                value={loginForm.captcha}
                placeholder={t('Mã kiểm tra')}
                error={hasErrors('captcha')}
                helperText={getErrorMessage('captcha')}
                validation
                onChange={(value) => handleOnchange(value || null, 'captcha')}
              />
            </Grid>
            <Grid item md={6} className={Style.captchaWrapper}>
              <Grid container alignItems="center">
                <Grid item md={8}>
                  <Typography variant="h5">{captcha}</Typography>
                </Grid>
                <Grid item md={4}>
                  <IconButton aria-label="refresh">
                    <AutorenewIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}

        <Grid container justifyContent="center" className={Style.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={true}
            //disabled={loginForm.username && loginForm.password && loginForm.captcha ? false : true}
            onClick={handleLogin}
          >
            {t('Đăng nhập')}
          </Button>
        </Grid>
        <Grid container justifyContent="center" className={Style.forgotPasswordWrapper}>
          <Link
            variant="subtitle1"
            onClick={() => {
              router.push(pagePath.forgotPass)
            }}
          >
            {t('Quên mật khẩu')}
          </Link>
        </Grid>

        {!showSimpleLoginForm ? (
          <Grid container justifyContent="center" className={Style.registerWrapper}>
            <Typography variant="body1">{t('Bạn chưa có tài khoản?')}</Typography>
            <Link
              variant="subtitle1"
              onClick={() => {
                router.push(pagePath.register)
              }}
            >
              {t('Đăng ký ngay')}
            </Link>
          </Grid>
        ) : (
          <Grid container justifyContent="center" className={Style.registerWrapper}>
            <Link variant="subtitle1" onClick={handleResetLoginForm}>
              {t('Tài khoản khác?')}
            </Link>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default LoginForm
