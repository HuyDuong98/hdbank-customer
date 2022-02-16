import Style from '../../styles/product/Product.module.scss'
import { Box, Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { pagePath } from '../../utils/constants/pagePath'
import { convertUrltoSlug } from '../../utils/helpers/commonHelpers'
import { useRecoilValue } from 'recoil'
import { isMobileState } from '../../stores/sharedStores'
import Link from 'next/link'

const DocumentIcon = '/assets/icons/document.svg'

interface ICardPromotionProps {
  image: string
  title: string
  start: string
  finish: string
  content: string
  id: number
  noti?: string
}
const CardPromotion: FC<ICardPromotionProps> = (props) => {
  const { t } = useTranslation()
  const isMobile = useRecoilValue(isMobileState)
  const { title, start, finish, content, image, id, noti } = props
  return (
    <Box className={Style.featuredPromotion}>
      <Grid container justifyContent="space-between">
        <Grid item md={6} xs={12}>
          <Box className={Style.image}>
            {noti && (
              <Box className={Style.noti}>
                <span>{noti}</span>
              </Box>
            )}
            <Link href={`${pagePath.promotion}/${convertUrltoSlug(title)}.${id}`} passHref>
              <img src={image} alt="" />
            </Link>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box className={Style.contentWrapper}>
            <Link href={`${pagePath.promotion}/${convertUrltoSlug(title)}.${id}`} passHref>
              <Typography component="h2" color="primary">
                {title}
              </Typography>
            </Link>
            <Box>
              <Grid direction="row" container>
                <Grid item>
                  <Box className={Style.time}>
                    <AccessTimeIcon />
                    <Typography>
                      {start}-{finish}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={2} display="flex">
              <Box>
                <img src={DocumentIcon} />
              </Box>
              <Typography>{content}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
export default CardPromotion
