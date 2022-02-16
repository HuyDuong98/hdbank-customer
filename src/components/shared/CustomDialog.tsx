import { Grid, Dialog, Typography } from '@material-ui/core'
import { FC } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import Style from '../../styles/components/shared/CustomDialog.module.scss'
import { useRecoilValue } from 'recoil'
import { isMobileState } from '../../stores/sharedStores'
interface IDialogProps {
  isOpen: boolean
  handleClose: () => void
  title: string
}

const CustomDialog: FC<IDialogProps> = (props) => {
  const { title, isOpen, handleClose, children } = props
  const isMobile = useRecoilValue(isMobileState)
  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      maxWidth="lg"
      scroll={isMobile ? 'paper' : 'body'}
      classes={{ paper: Style.dialogWrapper }}
    >
      <Grid className={Style.dialogHeader}>
        <Typography component="h2">{title}</Typography>

        <CloseIcon className={Style.icon} onClick={handleClose} />
      </Grid>
      {children}
    </Dialog>
  )
}
export default CustomDialog
