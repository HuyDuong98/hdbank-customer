import { FC, useState } from 'react'
import Style from '../../styles/account/RegisterForm.module.scss'
import { Grid, Button } from '@material-ui/core'
import PageContents from '../../components/shared/PageContents'
import { useTranslation } from 'react-i18next'

import CustomTextField from '../../components/shared/CustomTextField'

interface ICustomerInfoProps {
  handleNext: () => void
}

const CustomerInfo: FC<ICustomerInfoProps> = (props) => {
  const { handleNext } = props
  const { t } = useTranslation()

  const [info, setInfo] = useState({
    name: '',
    phone: '',
  })

  const handleInfo = (value, key) => setInfo({ ...info, [key]: value })

  return (
    <>
      <PageContents
        title={t('Thông tin khách hàng')}
        subTitle={t('Vui lòng nhập đầy đủ thông tin để xác nhận tài khoản nhanh nhất')}
        cssClass={Style.pageContents}
      ></PageContents>

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={6}>
          <div className={Style.textFieldWrapper}>
            <CustomTextField
              value={info.name}
              placeholder={t('Nhập họ và tên')}
              label={t('Tên khách hàng')}
              onChange={(value) => {
                handleInfo(value, 'name')
              }}
            ></CustomTextField>
          </div>
          <div className={Style.textFieldWrapper}>
            <CustomTextField
              value={info.phone}
              placeholder={t('Nhập số điện thoại')}
              label={t('Số điện thoại')}
              onChange={(value) => {
                handleInfo(value, 'phone')
              }}
              type="number"
            ></CustomTextField>
          </div>

          <Button variant="contained" color="primary" size="large" fullWidth={true} onClick={handleNext}>
            {t('Tiếp tục')}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default CustomerInfo
