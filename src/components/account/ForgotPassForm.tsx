import { FC, useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import Style from '@styles/account/LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import CustomTextField from '@components/shared/CustomTextField'

interface IForgotPassFormProps {
  handleSendRequest: () => void
}

const ForgotPassForm: FC<IForgotPassFormProps> = (props) => {
  const { handleSendRequest } = props
  const { t } = useTranslation()

  const [phoneNumb, setphoneNumb] = useState('')

  return (
    <>
      <div className={Style.titleWrapper}>
        <h3>{t('Đặt lại mật khẩu')}</h3>
        <span>{t('Vui lòng nhập số điện thoại bạn đã đăng ký để lấy lại mật khẩu.')}</span>
      </div>

      <CustomTextField
        value={phoneNumb}
        placeholder={t('Số điện thoại')}
        label={t('Số điện thoại')}
        onChange={(value) => {
          setphoneNumb(value)
        }}
        type="number"
      />
      <Grid container justifyContent="center" className={Style.buttonWrapper}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={true}
          disabled={phoneNumb ? false : true}
          onClick={handleSendRequest}
        >
          {t('Gửi yêu cầu')}
        </Button>
      </Grid>
    </>
  )
}

export default ForgotPassForm
