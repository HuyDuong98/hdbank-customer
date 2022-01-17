import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/components/shared/CustomSelect.module.scss'
import { Typography, Select, MenuItem, FormControl, TextField, FormHelperText } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import clsx from 'clsx'

interface IOption {
  item?: string | number | null
  name: string | number | null
  value: string | number
  shorthand?: string | null
  renderItem?: JSX.Element | string | number | null
}

interface ISelectProps {
  value: string | number | null
  label?: string
  options?: IOption[]
  onChange: (value: string) => void
  placeholder?: string
  isCustomDisplayValue?: boolean
  error?: boolean
  helperText?: string
  isSearch?: boolean
  outlined?: boolean
  onKeyUp?: (event: any) => void
}

const CustomSelect: FC<ISelectProps> = (props) => {
  const { t } = useTranslation()
  const {
    label,
    options,
    onChange,
    value,
    placeholder,
    isCustomDisplayValue,
    error,
    helperText,
    isSearch,
    outlined,
    onKeyUp,
  } = props
  const [display, setDiplay] = useState(options?.filter((e) => e.value === value).shift()?.renderItem)

  const handleOnChange = (event) => {
    onChange(event.target.value)
    if (isCustomDisplayValue) {
      setDiplay(options?.filter((e) => e.value === event.target.value).shift()?.renderItem)
    }
  }

  const [search, setSearch] = useState('')

  const renderSearchBox = () => {
    return (
      <div
        onClickCapture={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
        onKeyDown={(e) => e.stopPropagation()}
        className={Style.searchOption}
      >
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder={t('tìm kiếm')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: <SearchIcon className={Style.icon} />,
          }}
        />
      </div>
    )
  }

  const renderSelectItem = () => {
    return options?.map((option) => {
      return (
        <MenuItem value={option.value} onMouseUp={onKeyUp} key={option.value} className={Style.optionItem}>
          {option.renderItem ? (
            option.renderItem
          ) : !option.shorthand ? (
            <span>{option.name || option.item}</span>
          ) : (
            <>
              <span className={Style.shorthand}>{option.shorthand}</span>
              <span>{option.name || option.item}</span>
            </>
          )}
        </MenuItem>
      )
    })
  }

  const renderPlaceholder = () => {
    return <span className={Style.placeholder}>{placeholder || t('--chọn--')}</span>
  }

  return (
    <div className={Style.container}>
      {label && (
        <Typography variant="body1" className={Style.title}>
          {label}
        </Typography>
      )}
      <FormControl variant={outlined ? 'outlined' : 'standard'} size="small" fullWidth={true}>
        <Select
          className={clsx('', {
            [Style.selectError]: error,
          })}
          color="primary"
          value={value || ''}
          onChange={handleOnChange}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
          displayEmpty
          renderValue={display ? () => display : value ? () => <span>{value}</span> : () => renderPlaceholder()}
        >
          {isSearch && renderSearchBox()}
          {options && renderSelectItem()}
        </Select>
        {error && <FormHelperText error> {helperText}</FormHelperText>}
      </FormControl>
    </div>
  )
}

export default CustomSelect
