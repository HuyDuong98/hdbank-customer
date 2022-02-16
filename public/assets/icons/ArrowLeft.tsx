import { FC } from 'react'

const ArrowLeft: FC = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none" {...props}>
      <path
        d="M2 7L1.29289 6.29289L0.585786 7L1.29289 7.70711L2 7ZM17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6V8ZM7.29289 0.292893L1.29289 6.29289L2.70711 7.70711L8.70711 1.70711L7.29289 0.292893ZM1.29289 7.70711L7.29289 13.7071L8.70711 12.2929L2.70711 6.29289L1.29289 7.70711ZM2 8H17V6H2V8Z"
        fill="#CCD2E3"
      />
    </svg>
  )
}
export default ArrowLeft
