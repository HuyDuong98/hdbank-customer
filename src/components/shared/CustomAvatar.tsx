import { FC } from 'react'
import Style from '../../styles/components/shared/CustomAvatar.module.scss'
import { Avatar } from '@material-ui/core'
import clsx from 'clsx'

interface IAvatarProps {
  src: string
  alt?: string
  cssClass?: string
  /** The size of avatar.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
}

const CustomAvatar: FC<IAvatarProps> = (props) => {
  const { src, alt, cssClass, size } = props
  return (
    <div
      className={clsx(Style.container, cssClass ? cssClass : '', {
        [Style.small]: size === 'small',
        [Style.medium]: size === 'medium' || !size,
        [Style.large]: size === 'large',
      })}
    >
      <Avatar alt={alt} src={src} className={Style.avatar}>
        B
      </Avatar>
    </div>
  )
}

export default CustomAvatar
