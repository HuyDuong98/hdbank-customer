import { Rating } from '@material-ui/lab'
import { FC } from 'react'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import { Avatar, Box, Grid, Typography } from '@material-ui/core'
import Style from '../../styles/components/FeedbackItem.module.scss'
interface IFeedbackItem {
  valueRating: number | null
  content: string | null
  avatar: string
  name: string
  subInfo?: string
}
const FeedbackItem: FC<IFeedbackItem> = (props) => {
  const { valueRating, content, avatar, name, subInfo } = props
  return (
    <Box className={Style.wrapper}>
      <Box mb={2}>
        <Rating
          value={valueRating}
          emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
          icon={<StarRoundedIcon fontSize="inherit" />}
        />
      </Box>
      <Typography>{content}</Typography>
      <Grid container alignItems="center" className={Style.avatar}>
        <Avatar src={avatar} />
        <Box ml={2}>
          <Typography variant="h6">{name}</Typography>
          <Typography>{subInfo}</Typography>
        </Box>
      </Grid>
    </Box>
  )
}
export default FeedbackItem
