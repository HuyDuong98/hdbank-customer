import { FC, useState } from 'react'
import { Button, Grid, Box, IconButton, FormHelperText, Typography, Dialog } from '@material-ui/core'
import Style from '../../styles/components/DialogRegister.module.scss'
import { useTranslation } from 'react-i18next'

import CustomDatePicker from '../shared/CustomDatePicker'
import CustomTextField from '../shared/CustomTextField'
import CachedIcon from '@material-ui/icons/Cached'
import Joi from 'joi'
import { useValidateForm } from '../../hooks/useValidateForm'
import { getCapchaImage } from '../../apis/faq'
import { useQuery } from 'react-query'

//icons

import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import CloseIcon from '@material-ui/icons/Close'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'

const lstFAQs = [
  {
    title: 'Thay đổi hạn mức để làm gì ?',
    sub: 'Thay đổi hạn mức sẽ số tiền tối đa có thể sử dụng trên thẻ tín dụng của bạn.',
  },
  {
    title: 'Số CVV là gì ?',
    sub:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry stand',
  },
  {
    title: 'Tại sao giới hạn số lần giao dịch 1 ngày ?',
    sub: 'Để nâng hạn mức hiện tại của thẻ, bạn hãy đến chi nhánh ngân hàng gần nhất để bổ sung hồ sơ.',
  },
]

interface IDialogRegisterProps {
  isOpen: boolean
  handleClose: () => void
  handleSuccess: () => void
}

const schema = Joi.object({
  cardNumber: Joi.string()
    .empty(null)
    .required()
    .pattern(new RegExp(/^[0-9]+$/))
    .max(16)
    .messages({
      'any.required': 'Số thẻ không được để trống',
      'string.max': 'Số thẻ không được quá {#limit} ký tự',
      'string.pattern.base': 'Vui lòng chỉ nhập số',
    }),
  name: Joi.string()
    .empty(null)
    .required()
    .pattern(
      new RegExp(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s|_]+$/,
      ),
    )

    .max(50)
    .messages({
      'any.required': 'Họ và tên không được để trống',
      'string.max': 'Họ và tên không được quá {#limit} ký tự',
      'string.pattern.base': 'Sai định dạng',
    }),
  pin: Joi.string()
    .empty(null)
    .required()
    .pattern(new RegExp(/^[0-9]+$/))
    .max(6)
    .messages({
      'any.required': 'CVV/PIN không được để trống',
      'string.max': 'CVV/PIN không được quá {#limit} ký tự',
      'string.pattern.base': 'Vui lòng chỉ nhập số',
    }),
  identity: Joi.string()
    .empty(null)
    .required()
    .pattern(new RegExp(/^[^#@,.?/{}!^*()$]+$/))
    .messages({
      'any.required': 'CMND/CCCD/Hộ chiếu không được để trống',
      'string.pattern.base': 'Sai định dạng',
    }),
  capcha: Joi.string()
    .empty(null)
    .pattern(new RegExp(/^[0-9]+$/))
    .required()
    .messages({
      'any.required': 'Mã xác thực không được để trống',
      'string.pattern.base': 'Vui lòng chỉ nhập số',
    }),
})

const DialogRegister: FC<IDialogRegisterProps> = (props) => {
  const { isOpen, handleClose, handleSuccess } = props
  const { t } = useTranslation()
  const [validatedKey, setValidatedKey] = useState<string>()
  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true)
  const [show, setShow] = useState({
    cardNumber: false,
    pin: false,
  })
  const [month, setMonth] = useState(null)

  const [form, setForm] = useState<any>({
    cardNumber: null,
    name: null,
    pin: null,
    identity: null,
    capcha: null,
  })

  const [capchaMessage, setCapchaMessage] = useState<string | null>(null)

  const { data: capchaData, refetch } = useQuery('capchaQuery', getCapchaImage)
  const refetchCapcha = () => {
    refetch()
  }

  const handleShow = (key) => setShow({ ...show, [key]: !show[key] })

  const { errors, validateAll, eraseErrors } = useValidateForm(form, schema, validatedKey)

  const handleForm = (value, key) => {
    setValidatedKey(key)
    setForm({ ...form, [key]: value })
  }

  const getErrorMessage = (field: string) => {
    const error = errors?.find((f) => f.field === field)
    return error ? error.message : ''
  }

  const hasErrors = (field: string) => {
    const error = getErrorMessage(field)
    return !!error
  }

  const handleContinue = () => {
    handleSuccess()
  }

  const checkSubmitEnable = () => {
    if (form.cardNumber && form.name && form.pin && form.identity && form.capcha && validateAll() && month) {
      setDisabledSubmit(false)
    } else {
      setDisabledSubmit(true)
    }
  }

  const renderForm = () => {
    return (
      <Grid className={Style.group}>
        {renderNoneLogin()}
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={true}
          onClick={handleContinue}
          disabled={disabledSubmit}
        >
          {t('Tiếp tục')}
        </Button>
      </Grid>
    )
  }

  const renderNoneLogin = () => {
    return (
      <>
        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t('Số thẻ')} *`}
            value={form.cardNumber}
            error={hasErrors('cardNumber')}
            helperText={getErrorMessage('cardNumber')}
            onChange={(value) => {
              handleForm(value || null, 'cardNumber')
            }}
            onKeyUp={checkSubmitEnable}
            type={!show['cardNumber'] ? 'password' : 'text'}
            icon={show['cardNumber'] ? <VisibilityIcon /> : <VisibilityOffIcon />}
            isIconClick
            onIconClick={() => handleShow('cardNumber')}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t('Tên in trên thẻ')} *`}
            value={form.name}
            error={hasErrors('name')}
            helperText={getErrorMessage('name')}
            onChange={(value) => {
              handleForm(value || null, 'name')
            }}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <Grid container spacing={2}>
          <Grid item xs={7}>
            <div className={Style.textFieldWrapper}>
              <CustomDatePicker
                value={month}
                placeholder={t('Ngày hết hạn (tháng/năm) *')}
                formatType="MM/yyyy"
                onChange={(value) => {
                  setMonth(value)
                }}
              />
            </div>
          </Grid>

          <Grid item xs={5}>
            <div className={Style.textFieldWrapper}>
              <CustomTextField
                placeholder={t('CVV/PIN * ')}
                value={form.pin}
                error={hasErrors('pin')}
                helperText={getErrorMessage('pin')}
                onChange={(value) => {
                  handleForm(value || null, 'pin')
                }}
                onKeyUp={checkSubmitEnable}
                type={!show['pin'] ? 'password' : 'text'}
                icon={show['pin'] ? <VisibilityIcon /> : <VisibilityOffIcon />}
                isIconClick
                onIconClick={() => handleShow('pin')}
              />
            </div>
          </Grid>
        </Grid>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder="Số CMND/CCCD/Hộ chiếu *"
            value={form.identity}
            error={hasErrors('identity')}
            helperText={getErrorMessage('identity')}
            onChange={(value) => {
              handleForm(value || null, 'identity')
            }}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <Grid container>
            <Grid item xs={6}>
              <CustomTextField
                placeholder={`${t('Mã xác thực')} *`}
                value={form.capcha}
                error={hasErrors('capcha')}
                helperText={getErrorMessage('capcha')}
                onChange={(value) => {
                  handleForm(value || null, 'capcha')
                }}
                onFocus={() => setCapchaMessage(null)}
                onKeyUp={checkSubmitEnable}
              />
              <FormHelperText error>{capchaMessage}</FormHelperText>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={10} className={Style.imgCapcha}>
                  <img src={capchaData?.captchBase64Data} alt="" />
                </Grid>

                <Grid item xs={2}>
                  <IconButton onClick={refetchCapcha}>
                    <CachedIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <Grid className={Style.alert}>
          <ul>
            <li>Vui lòng nhập thông tin thẻ để đăng ký tài khoản.</li>
          </ul>
        </Grid>
      </>
    )
  }

  const renderFAQs = () => {
    return (
      <Grid className={Style.fqaWrap}>
        {lstFAQs.map((item, idx) => {
          return (
            <Grid key={idx} className={Style.fqaItem}>
              <ArrowRightIcon />

              <Grid container direction="column" className={Style.text}>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2">{item.sub}</Typography>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    )
  }

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="md" scroll="paper" classes={{ paper: Style.dialogWrapper }}>
      <Grid className={Style.dialogHeader}>
        <Typography component="h2">{t('Đăng kí tài khoản')}</Typography>

        <CloseIcon className={Style.icon} onClick={handleClose} />
      </Grid>

      <Box className={Style.dialogWrapper}>
        <Grid container className={Style.dialogBody}>
          <Grid item sm={7}>
            {renderForm()}
          </Grid>
          <Grid item sm={5}>
            {renderFAQs()}
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  )
}

export default DialogRegister
