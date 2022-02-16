import { Box, Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import Style from '../../styles/components/CardPromotionOther.module.scss'

interface ICardPromotionOther {
  image: string
  title: string
  content: string
  startDate: string
  endDate: string
  label?: string
}

const CardPromotionOther: FC<ICardPromotionOther> = (props) => {
  const { image, title, content, startDate, endDate, label } = props
  return (
    <>
      <Box className={Style.cardPromotion}>
        {label && (
          <Box className={Style.noti}>
            <span>{label}</span>
          </Box>
        )}
        <img width="100%" src={image} />
        <Grid container direction="column" className={Style.productInfo}>
          <Typography variant="body1" className={Style.padding}>
            <strong>{title}</strong>
          </Typography>
          <span className={Style.padding}>{content}</span>
          <span className={`${Style.time} ${Style.padding}`}>
            {startDate} - {endDate}
          </span>
        </Grid>
      </Box>
    </>
  )
}

export default CardPromotionOther
