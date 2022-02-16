import { FC, useState } from 'react'
import Style from '../../styles/account/Login.module.scss'
import { Grid } from '@material-ui/core'
import Slideshow from '../../components/account/Slideshow'
import LoginForm from '../../components/account/LoginForm'
import DialogLogin from '../../components/account/DialogLogin'

const Login: FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleDialog = () => setIsOpen(false)

  const renderBodyPage = () => {
    return (
      <Grid container className={Style.container}>
        <Grid item xs={12} md={6} className={Style.wrapper}>
          <Slideshow />
        </Grid>
        <Grid item xs={12} md={6} className={Style.wrapper}>
          <LoginForm />
        </Grid>
      </Grid>
    )
  }

  const renderDialog = () => {
    const dProps = {
      isOpen,
      handleClose: () => handleDialog(),
    }
    return <DialogLogin {...dProps} />
  }

  return (
    <>
      {renderBodyPage()}
      {renderDialog()}
    </>
  )
}

export default Login
