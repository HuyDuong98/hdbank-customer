import { FC } from 'react'
import { Grid } from '@material-ui/core'
import Header from '@components/shared/Header'
import FAQList from '@components/FAQ/FAQList'

const FAQ: FC = () => {
  return (
    <Grid container>
      <Header />
      <Grid container>
        <FAQList />
      </Grid>
    </Grid>
  )
}

export default FAQ
