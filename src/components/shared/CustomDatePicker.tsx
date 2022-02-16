import { FC, useState } from 'react'
import Style from '../../styles/components/shared/CustomDatePicker.module.scss'
import { TextField, Typography } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import EventIcon from '@material-ui/icons/Event'

interface CustomDatePickerProps {
  value: string | number | null
  label?: string
  formatType?: string
  placeholder: string
  onChange: (value: any) => void
}

const CustomDatePicker: FC<CustomDatePickerProps> = (props) => {
  const { value, label, formatType, placeholder, onChange } = props

  const [isOpen, setIsOpen] = useState(false)

  const handleOnChange = (date: MaterialUiPickersDate, value?: string | null | undefined) => {
    onChange(date || value)
  }

  const TextFieldComponent = (props) => (
    <TextField
      {...props}
      variant="standard"
      size="small"
      fullWidth={true}
      placeholder={value || placeholder}
      InputProps={{
        endAdornment: (
          <div className={Style.icon} onClick={() => setIsOpen(!isOpen)}>
            <EventIcon />
          </div>
        ),
      }}
    />
  )

  return (
    <div className={Style.container}>
      {label && <Typography variant="body1">{label}</Typography>}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          format={formatType || 'dd/MM/yyyy'}
          value={value}
          onChange={handleOnChange}
          TextFieldComponent={TextFieldComponent}
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default CustomDatePicker
