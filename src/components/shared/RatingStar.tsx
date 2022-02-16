import { FC, useState } from 'react'
import { Grid } from '@material-ui/core'
import Style from '../../styles/components/shared/RatingStart.module.scss'

import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import StarRoundedIcon from '@material-ui/icons/StarRounded'

interface IRatingStarProps {
  canAction: boolean
  rating?: number
  onChange?: (number: number) => void
}

const RatingStar: FC<IRatingStarProps> = (props) => {
  const { rating, canAction, onChange } = props
  const [ratinTemp, setRatingTemp] = useState(0)

  const handleChangeRating = (number) => {
    setRatingTemp(number)
    if (onChange) onChange(number)
  }

  const renderStar = (number) => {
    const stars = [] as any

    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= number ? (
          <StarRoundedIcon key={i} onClick={() => canAction && handleChangeRating(i)} />
        ) : (
          <StarBorderRoundedIcon key={i} onClick={() => canAction && handleChangeRating(i)} />
        ),
      )
    }
    return <>{stars}</>
  }

  return (
    <Grid container className={Style.starWrapper}>
      {renderStar(ratinTemp || rating)}
    </Grid>
  )
}
export default RatingStar
