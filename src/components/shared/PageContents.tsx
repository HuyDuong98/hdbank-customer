import { FC } from 'react'
import Style from '../../styles/components/shared/PageContents.module.scss'
import { Grid, Typography } from '@material-ui/core'
interface PageContentsProps {
  title: string
  subTitle?: string
  cssClass?: string
}

const PageContents: FC<PageContentsProps> = (props) => {
  const { title, subTitle, cssClass } = props
  return (
    <Grid container justifyContent="center" className={cssClass}>
      <Grid item xs={12} lg={6} className={Style.contentWrapper}>
        <Typography variant="h4">{title}</Typography>
        {subTitle && <Typography variant="body1">{subTitle}</Typography>}
      </Grid>
    </Grid>
  )
}

export default PageContents
