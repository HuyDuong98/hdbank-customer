import { FC } from 'react'

const ClockIcon: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <circle cx="12" cy="14.5" r="8" stroke="#DA2128" style={{ strokeWidth: 2 }} />
      <path d="M12 14.5L12 11.5" stroke="#DA2128" style={{ strokeWidth: 2 }} />
      <path d="M17.5 8L19 6.5" stroke="#DA2128" style={{ strokeWidth: 2 }} />
      <path
        d="M10.0681 2.87059C10.1821 2.76427 10.4332 2.67033 10.7825 2.60332C11.1318 2.53632 11.5597 2.5 12 2.5C12.4403 2.5 12.8682 2.53632 13.2175 2.60332C13.5668 2.67033 13.8179 2.76427 13.9319 2.87059"
        stroke="#DA2128"
        style={{ strokeWidth: 2 }}
      />
    </svg>
  )
}
export default ClockIcon
