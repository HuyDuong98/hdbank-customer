import { FC } from 'react'
import Style from '../../styles/account/Register.module.scss'
import { Grid } from '@material-ui/core'
import Header from '../../components/shared/Header'
import Banner from '../../components/shared/Banner'
import RegisterForm from '@components/register/RegisterForm'

const Register: FC = () => {
  return (
    <Grid container>
      <Header />
      <Grid container>
        <Banner />
        <Grid container className={Style.container}>
          <RegisterForm />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Register
