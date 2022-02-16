import { Button, Typography, Grid } from '@material-ui/core'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/product/CompareProduct.module.scss'
import { isMobileState } from '../../stores/sharedStores'
import { useRecoilValue } from 'recoil'

//images
const CardDialog = '/assets/mobile/landing/card-dialog.png'
const CheckIcon = '/assets/mobile/landing/Check_fill.svg'
import CustomDialog from '../../components/shared/CustomDialog'

interface ICard {
  id: string
  title: string
  desciption: string
  pc_mode: string
  mobile_mode: string
}

interface IDialogListCardProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: (cardID: any) => void
  listCard: ICard[]
}

const DialogListCard: FC<IDialogListCardProps> = (props) => {
  const { isOpen, handleClose, listCard, handleSubmit } = props
  const { t } = useTranslation()
  const isMobile = useRecoilValue(isMobileState)

  const [checked, setChecked] = useState('')

  return (
    <>
      <CustomDialog handleClose={handleClose} isOpen={isOpen} title={t('productList')}>
        <Grid className={Style.dialogBody}>
          <Grid className={Style.overflow}>
            <Grid className={Style.listWrap}>
              {listCard.map((card, idx) => {
                const { id, title, desciption, pc_mode, mobile_mode } = card
                const image = !isMobile ? pc_mode : mobile_mode
                return (
                  <Grid key={idx} className={Style.cardItem} onClick={() => setChecked(id)}>
                    <img src={image || CardDialog} className={Style.cardImg} />
                    <Grid className={Style.cardInfo}>
                      <Typography variant="h6">{title}</Typography>
                      <span>{desciption}</span>
                    </Grid>

                    {checked === id && <img src={CheckIcon} className={Style.checkIcon} />}
                  </Grid>
                )
              })}
            </Grid>
          </Grid>

          <Grid className={Style.btn}>
            <Button
              variant="contained"
              disabled={checked === '' ? true : false}
              fullWidth
              color="primary"
              onClick={() => handleSubmit(checked)}
            >
              {t('select')}
            </Button>
          </Grid>
        </Grid>
      </CustomDialog>
    </>
  )
}
export default DialogListCard
