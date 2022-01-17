import { FC } from 'react'

const ArrowRight: FC = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none" {...props}>
      <path
        d="M16 7L16.7071 6.29289L17.4142 7L16.7071 7.70711L16 7ZM1 8C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6V8ZM10.7071 0.292893L16.7071 6.29289L15.2929 7.70711L9.29289 1.70711L10.7071 0.292893ZM16.7071 7.70711L10.7071 13.7071L9.29289 12.2929L15.2929 6.29289L16.7071 7.70711ZM16 8H1V6H16V8Z"
        fill="#CCD2E3"
      />
    </svg>
  )
}
export default ArrowRight
