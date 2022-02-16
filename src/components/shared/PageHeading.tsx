import { FC, useState } from 'react'
import Style from '@styles/components/shared/PageHeading.module.scss'
import { Grid, Typography, Breadcrumbs } from '@material-ui/core'
import clsx from 'clsx'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { pagePath } from '../../utils/constants/pagePath'

const HomeIcon = '/assets/icons/ic_home.svg'

interface IBreadCrumb {
  label: string
  path?: string
}

interface IHeadingProps {
  breadCrumbs: IBreadCrumb[]
  iconHome?: boolean
}

const PageHeading: FC<IHeadingProps> = ({ breadCrumbs, iconHome = false }) => {
  const { t } = useTranslation()
  const [active] = useState(breadCrumbs[breadCrumbs.length - 1])
  const router = useRouter()
  const handleClick = (e, path) => {
    e.preventDefault()
    router.push(path)
  }
  const handleBackHome = (e) => {
    e.preventDefault()
    router.push(pagePath.landingPage)
  }
  return (
    <Grid container className={Style.container} alignItems="center">
      {iconHome ? (
        <>
          <img src={HomeIcon} onClick={handleBackHome} className={Style.homeIcon} />
          <NavigateNextIcon fontSize="small" className={Style.breadcrumbIconInHome} />
        </>
      ) : (
        <div className={Style.headingBar}></div>
      )}

      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" className={Style.breadcrumbIcon} />}
        aria-label="breadcrumb"
        classes={{
          separator: Style.rootseparator,
        }}
      >
        {breadCrumbs.map((breadCrum, idx) => {
          return (
            <Typography
              key={idx}
              className={clsx({
                [Style.active]: active.label === breadCrum.label,
                [Style.cursor]: breadCrum.path,
              })}
              onClick={(e) => breadCrum.path && handleClick(e, breadCrum.path)}
            >
              {t(breadCrum.label)}
            </Typography>
          )
        })}
      </Breadcrumbs>
    </Grid>
  )
}

export default PageHeading
