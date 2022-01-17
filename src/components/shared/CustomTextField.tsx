import React from 'react'
import Style from '../../styles/components/shared/CustomTextField.module.scss'
import { makeStyles, TextField, Typography } from '@material-ui/core'
import clsx from 'clsx'

const useFormTextHelperStyles = makeStyles({
  error: {
    marginRight: 0,
    marginLeft: 0,
  },
})

interface TextFieldProps {
  value: string | number | null
  label?: string
  placeholder: string
  disabled?: boolean
  onChange: (value: string) => void
  icon?: JSX.Element
  error?: boolean
  helperText?: React.ReactNode
  type?: 'text' | 'password'
  validation?: boolean
  rows?: number
  isIconClick?: boolean
  isMobile?: boolean
  onIconClick?: () => void
  isAlert?: boolean
  onFocus?: () => void
  onBlur?: () => void
  styleName?: string
  onKeyPress?: (event: any) => void
  outlined?: boolean
  onKeyUp?: (event: any) => void
}
const CustomTextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    value,
    label,
    placeholder,
    disabled,
    onChange,
    icon,
    rows,
    error,
    helperText,
    type,
    validation,
    isIconClick,
    onIconClick,
    isAlert,
    onFocus,
    onBlur,
    styleName,
    onKeyPress,
    outlined,
    onKeyUp,
  } = props

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleOnIconClick = () => {
    if (onIconClick) onIconClick()
  }

  const formHelperStyles = useFormTextHelperStyles()

  return (
    <div className={`${Style.container} ${styleName}`}>
      {label && <Typography variant="body1">{label}</Typography>}
      {isAlert && (
        <Typography variant="body1" className={Style.alert}>
          &nbsp;*
        </Typography>
      )}
      <TextField
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        variant={outlined ? 'outlined' : 'standard'}
        size="small"
        fullWidth={true}
        placeholder={placeholder}
        value={value ?? ''}
        disabled={disabled}
        onChange={handleOnChange}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        error={error}
        helperText={helperText}
        type={type ?? 'text'}
        InputProps={{
          endAdornment: (
            <div
              className={clsx(Style.icon, {
                [Style.cursor]: isIconClick,
              })}
              onClick={() => isIconClick && handleOnIconClick()}
            >
              {icon}
            </div>
          ),
        }}
        multiline={rows ? true : false}
        rows={rows}
        FormHelperTextProps={{
          classes: {
            error: formHelperStyles.error,
          },
        }}
        className={clsx({
          [Style.success]: !!validation && value && !error,
          [Style.error]: !!validation && !!error,
        })}
      />
    </div>
  )
})

export default CustomTextField
