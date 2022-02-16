import { FC } from 'react'
import { Button, Grid } from '@material-ui/core'
import Style from '../../styles/account/RegisterForm.module.scss'
import { useTranslation } from 'react-i18next'
import PageContents from '../shared/PageContents'
import { pagePath } from '../../utils/constants/pagePath'
import { useRouter } from 'next/router'

const CompleteIcon = '/assets/icons/complete.svg'

const RegisterCompleted: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <>
      <PageContents title={t('Hoàn tất thay đổi')} cssClass={Style.pageContents}></PageContents>

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={6}>
          <Grid container justifyContent="center" className={Style.completeIconWrapper}>
            <img src={CompleteIcon} />
            <span>Bạn đã hoàn tất đăng ký tài khoản HDBank.</span>
            <span>Thực hiện đăng nhập để sử dụng dịch vụ.</span>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={true}
            onClick={() => {
              router.push(pagePath.login)
            }}
          >
            {t('Đăng nhập')}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default RegisterCompleted
