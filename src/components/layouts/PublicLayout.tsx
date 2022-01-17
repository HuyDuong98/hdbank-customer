import { FC } from 'react'
import './../styles/layouts/PublicLayout.scss'
import Footer from '../shared/Footer'

const PublicLayout: FC = ({ children }) => {
  return (
    <div className="main-container">
      {children}
      <Footer />
    </div>
  )
}

export default PublicLayout
