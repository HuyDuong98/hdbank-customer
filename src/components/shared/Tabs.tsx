import Style from '../../styles/components/shared/Tabs.module.scss'
import { Typography } from '@material-ui/core'
import { FC, useMemo, useState } from 'react'
import clsx from 'clsx'
interface ITabItem {
  label: string
  value: string | null
}
interface ITabsProps {
  tabs: ITabItem[]
  onChange: (value) => void
  value?: string | null
}
const Tabs: FC<ITabsProps> = ({ tabs, onChange, value }) => {
  const handleChange = (event, value) => {
    onChange(value)
  }

  return (
    <nav className={Style.tabs}>
      <ul>
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              className={clsx('', {
                [Style.active]: value === tab.value,
              })}
              onClick={(e) => handleChange(e, tab.value)}
            >
              <Typography component="span">{tab.label}</Typography>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Tabs
