import { FC } from 'react'
import Style from '../../styles/layouts/Layout.module.scss'
import { Container, Grid, Typography } from '@material-ui/core'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import Banner from '../shared/Banner'
import { useTranslation } from 'react-i18next'

const Layout: FC = ({ children }) => {
  const { t } = useTranslation()
  return (
    <Grid container>
      <Header />
      <Grid container className={Style.bodyWrapper}>
        <Banner />
        <Container fixed>
          <Grid item xs={12}>
            <Typography variant="h4" className={Style.welcomeText}>
              {t('Xin chào')}, Thùy Dương
            </Typography>
          </Grid>
          <Grid container className={Style.childrenWrapper}>
            {children}
          </Grid>
        </Container>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Layout
