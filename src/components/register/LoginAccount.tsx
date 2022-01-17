import { FC, useState } from 'react'
import Style from '../../styles/account/RegisterForm.module.scss'
import { Grid, Button } from '@material-ui/core'
import PageContents from '../../components/shared/PageContents'
import { useTranslation } from 'react-i18next'

import CustomTextField from '../../components/shared/CustomTextField'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'

interface ILoginAccountProps {
  handleNext: () => void
}

const LoginAccount: FC<ILoginAccountProps> = (props) => {
  const { handleNext } = props
  const { t } = useTranslation()

  const [show, setShow] = useState({
    password: false,
    confirm: false,
  })

  const [info, setInfo] = useState({
    username: '',
    password: '',
    confirm: '',
  })

  const handleShow = (key) => setShow({ ...show, [key]: !show[key] })

  const handleInfo = (value, key) => setInfo({ ...info, [key]: value })

  return (
    <>
      <PageContents
        title={t('Tài khoản đăng nhập')}
        subTitle={t('Vui lòng nhập đầy đủ thông tin để xác nhận tài khoản nhanh nhất')}
        cssClass={Style.pageContents}
      ></PageContents>

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={6}>
          <div className={Style.textFieldWrapper}>
            <CustomTextField
              value={info.username}
              placeholder={t('Nhập tên đăng nhập')}
              label={t('Tên đăng nhập')}
              onChange={(value) => {
                handleInfo(value, 'username')
              }}
            ></CustomTextField>
          </div>
          <div className={Style.textFieldWrapper}>
            <CustomTextField
              value={info.password}
              placeholder={t('Nhập mật khẩu')}
              label={t('Mật khẩu')}
              onChange={(value) => {
                handleInfo(value, 'password')
              }}
              type={!show['password'] ? 'password' : 'text'}
              icon={show['password'] ? <VisibilityIcon /> : <VisibilityOffIcon />}
              isIconClick
              onIconClick={() => handleShow('password')}
            ></CustomTextField>
          </div>
          <div className={Style.textFieldWrapper}>
            <CustomTextField
              value={info.confirm}
              placeholder={t('Xác nhận mật khẩu')}
              label={t('Xác nhận mật khẩu')}
              type={!show['confirm'] ? 'password' : 'text'}
              onChange={(value) => {
                handleInfo(value, 'confirm')
              }}
              icon={show['confirm'] ? <VisibilityIcon /> : <VisibilityOffIcon />}
              isIconClick
              onIconClick={() => handleShow('confirm')}
            ></CustomTextField>
          </div>

          <Button variant="contained" color="primary" size="large" fullWidth={true} onClick={handleNext}>
            {t('Tiếp tục')}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default LoginAccount
