import { FC } from 'react'
import { Button, Grid, Dialog, Typography } from '@material-ui/core'
import Style from '../../styles/components/DialogAccountExist.module.scss'
import { useTranslation } from 'react-i18next'
import CloseIcon from '@material-ui/icons/Close'
import { pagePath } from '../../utils/constants/pagePath'

interface IDialogAccountExistProps {
  isOpen: boolean
  phone: string
  handleClose: () => void
}

const DialogAccountExist: FC<IDialogAccountExistProps> = (props) => {
  const { t } = useTranslation()
  const { isOpen, handleClose, phone } = props

  const handleChangePage = () => {
    // history.push(pagePath.login)
    handleClose()
  }

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="md" scroll="paper" classes={{ paper: Style.dialogWrapper }}>
      <Grid className={Style.dialogHeader}>
        <Typography component="h2"> </Typography>

        <CloseIcon className={Style.icon} onClick={handleClose} />
      </Grid>

      <Grid className={Style.noteWrap}>
        <Grid className={Style.text}>
          <h6>{t('Thông báo')}</h6>
          <span className={Style.phone}>
            Đã tồn tại tài khoản trên hệ thống HDBank cho số điện thoại *********{phone.slice(-3)}.
          </span>
          <span>Quý khách hàng có thể thực hiện đăng nhập để trải nghiệm không giới hạn dịch vụ tại HDBank.</span>
        </Grid>

        <Grid className={Style.btn}>
          <Button variant="contained" color="primary" size="large" onClick={handleChangePage}>
            {t('login')}
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default DialogAccountExist
