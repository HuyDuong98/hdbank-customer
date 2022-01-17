import { FC } from 'react'
import { Button, Dialog } from '@material-ui/core'
import Style from '@styles/account/LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import Slideshow from './Slideshow'
import CloseIcon from '@material-ui/icons/Close'
import { Swiper, SwiperSlide } from 'swiper/react'
interface IDialogLoginProps {
  isOpen: boolean
  handleClose: () => void
}

const Image = '/assets/banners/banner_alert.png'

export default function DialogLogin(props: IDialogLoginProps) {
  const { isOpen, handleClose } = props
  const { t } = useTranslation()
  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="sm" classes={{ paper: Style.dialogWrapper }}>
      <div className={Style.dialogWrapper__img}>
        <Swiper pagination={true}>
          <SwiperSlide>
            <img width="100%" src={Image} />
          </SwiperSlide>
          <SwiperSlide>
            <img width="100%" src={Image} />
          </SwiperSlide>
          <SwiperSlide>
            <img width="100%" src={Image} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={Style.dialogWrapper__text}>
        <span>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </span>

        <Button variant="contained" color="primary" size="large" className={Style.textBtn} onClick={handleClose}>
          {t('Xem ngay')}
        </Button>
      </div>

      <div className={Style.closeDialog} onClick={handleClose}>
        <div>
          <CloseIcon className={Style.icon} />
        </div>
      </div>
    </Dialog>
  )
}