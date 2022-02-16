import {
  Popper,
  Grid,
  Tooltip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core'
import { FC, useState } from 'react'
import clsx from 'clsx'
import Style from '../../styles/components/shared/DialogTips.module.scss'
import { useTranslation } from 'react-i18next'

const DialogTips: FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [boxChat, setBoxChat] = useState(true)

  const handleDialog = (event) => {
    setAnchorEl(event.currentTarget)
    setIsOpen(!isOpen)
  }

  const handleMessage = () => {
    const messenger = document.getElementById('fb-root')
    if (messenger) {
      messenger.style.display = 'block'
      setBoxChat(false)
    }
  }

  const handleZalo = () => {
    const zalo = document.getElementById('zaloChat')
    if (zalo) {
      zalo.style.display = 'block'
      setBoxChat(false)
    }
  }
  const renderDialogTip = () => {
    return (
      <Popper open={isOpen} anchorEl={anchorEl} placement="top-end" className={Style.tipsWrapper}>
        <Grid className={Style.tipsHeader}>
          <span>{t('supportVia')}</span>
          {/* <Close className={Style.icon} onClick={handleDialog} /> */}
        </Grid>
        <List>
          <ListItem alignItems="center" onClick={handleMessage}>
            <ListItemAvatar>
              <img src='/assets/icons/icon fb mess.png' alt="" />
            </ListItemAvatar>
            <ListItemText>
              <Typography>{t('Facebook')}</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem alignItems="center" onClick={handleZalo}>
            <ListItemAvatar>
              <img src='/assets/icons/ic zalo.png' alt="" />
            </ListItemAvatar>
            <ListItemText>
              <Typography>{t('Zalo')}</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Popper>
    )
  }

  return (
    <>
      {boxChat && (
        <>
          <div className={clsx('', { [Style.overlay]: isOpen })} onClick={() => setIsOpen(!isOpen)}></div>

          <Tooltip title="Chat" placement="left">
            <img
              src='../../assets/icons/chatbox.svg'
              className={clsx(Style.tipIcon, {
                [Style.active]: isOpen,
              })}
              onClick={handleDialog}
            />
          </Tooltip>
          {renderDialogTip()}
        </>
      )}
    </>
  )
}

export default DialogTips
