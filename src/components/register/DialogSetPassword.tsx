import { FC, useState } from 'react'
import { Button, Grid, Box, Typography, Dialog } from '@material-ui/core'
import Style from '../../styles/components/DialogRegister.module.scss'
import { useTranslation } from 'react-i18next'

import CustomTextField from '../shared/CustomTextField'
import Joi from 'joi'
import { useValidateForm } from '../../hooks/useValidateForm'

//icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import CloseIcon from '@material-ui/icons/Close'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'

const lstNote = [
  'Phải có độ dài tối thiểu 06 ký tự, bao gồm các ký tự chữ và số, có chứa chữ hoa và chữ thường hoặc các ký tự đặc biệt bao gồm: !@#$%^&*_=+-/',
  'Không thể dùng lại 04 mật khẩu gần nhất',
  'Mật khẩu không được chứa các từ: password, matkhau',
  'Có thời gian hiệu lực tối đa 12 tháng',
  'Tài khoản của khách hàng sẽ bị khóa sau 05 lần đăng nhập thành không thành công',
  'Mật khẩu không được sử dụng toàn bộ ký tự trùng nhau, hoặc liên tục theo thứ tự trong bảng chữ cái, chữ số. ',
]

interface DialogSetPassword {
  isOpen: boolean
  handleClose: () => void
}

const schema = Joi.object({
  password: Joi.string().empty(null).required().min(6).max(20).messages({
    'any.required': 'Mật khẩu không được để trống',
    'string.max': 'Mật khẩu không được nhiều hơn {#limit} ký tự',
    'string.min': 'Số thẻ không được ít hơn {#limit} ký tự',
  }),
  confirm: Joi.string().empty(null).required().min(6).max(20).messages({
    'any.required': 'Mật khẩu không được để trống',
    'string.max': 'Mật khẩu không được nhiều hơn {#limit} ký tự',
    'string.min': 'Số thẻ không được ít hơn {#limit} ký tự',
  }),
})

const DialogRegister: FC<DialogSetPassword> = (props) => {
  const { t } = useTranslation()
  const { isOpen, handleClose } = props
  const [validatedKey, setValidatedKey] = useState<string>()
  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true)
  const [isNote, setIsNote] = useState<boolean>(false)
  const [show, setShow] = useState({
    password: false,
    confirm: false,
  })

  const [form, setForm] = useState<any>({
    password: null,
    confirm: null,
  })

  const handleShow = (key) => setShow({ ...show, [key]: !show[key] })
  const handleNote = () => setIsNote(!isNote)

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

  const onCloseDialog = () => {
    handleClose()
  }

  const checkSubmitEnable = () => {
    if (form.confirm && form.password && validateAll()) {
      setDisabledSubmit(false)
    } else {
      setDisabledSubmit(true)
    }
  }

  const renderForm = () => {
    return (
      <Grid className={Style.passwordForm}>
        {renderNoneLogin()}
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={true}
          onClick={onCloseDialog}
          disabled={disabledSubmit}
        >
          {t('Hoàn tất')}
        </Button>
      </Grid>
    )
  }

  const renderNoneLogin = () => {
    return (
      <>
        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t('Mật khẩu')} *`}
            value={form.password}
            error={hasErrors('password')}
            helperText={getErrorMessage('password')}
            onChange={(value) => {
              handleForm(value || null, 'password')
            }}
            onKeyUp={checkSubmitEnable}
            type={!show['password'] ? 'password' : 'text'}
            icon={show['password'] ? <VisibilityIcon /> : <VisibilityOffIcon />}
            isIconClick
            onIconClick={() => handleShow('password')}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t('Nhập lại mật khẩu')} *`}
            value={form.confirm}
            error={hasErrors('confirm')}
            helperText={getErrorMessage('confirm')}
            onChange={(value) => {
              handleForm(value || null, 'confirm')
            }}
            onKeyUp={checkSubmitEnable}
            type={!show['confirm'] ? 'password' : 'text'}
            icon={show['confirm'] ? <VisibilityIcon /> : <VisibilityOffIcon />}
            isIconClick
            onIconClick={() => handleShow('confirm')}
          />
        </div>

        <Grid className={Style.alert}>
          <ul>
            <li>Mật khẩu có độ dài 6-20 ký tự.</li>
            <li>Bao gồm chữ hoa, chữ thường và số.</li>
          </ul>

          <ErrorOutlineIcon onClick={handleNote} />
        </Grid>
      </>
    )
  }

  const renderNote = () => {
    return (
      <Grid className={Style.noteWrap}>
        <Grid className={Style.text}>
          <ul>
            {lstNote.map((note, idx) => {
              return <li key={idx}>{note}</li>
            })}
          </ul>
        </Grid>

        <Grid className={Style.btn}>
          <Button variant="contained" color="primary" size="large" onClick={handleNote}>
            {t('Đóng')}
          </Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="md" scroll="paper" classes={{ paper: Style.dialogWrapper }}>
      {!isNote ? (
        <>
          <Grid className={Style.dialogHeader}>
            <Typography component="h2">{t('đặt mật khẩu')}</Typography>

            <CloseIcon className={Style.icon} onClick={handleClose} />
          </Grid>

          <Box className={Style.dialogWrapper}>
            <Grid container className={Style.dialogBody}>
              {renderForm()}
            </Grid>
          </Box>
        </>
      ) : (
        renderNote()
      )}
    </Dialog>
  )
}

export default DialogRegister
