import { FC, useState, useRef } from 'react'
import Style from '../../styles/faq/ListFAQ.module.scss'
import { Collapse } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'

//icons
import useOnClickOutside from '../../hooks/useOnClickOutSide'
import { Markup } from 'interweave'
interface FaqItemProps {
  question: string | null
  content: string | null
}
const FAQItem: FC<FaqItemProps> = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))
  return (
    <div ref={ref} className={Style.questionWrapper}>
      <div className={`${Style.heading} ${isOpen && Style.active}`} onClick={() => setIsOpen(!isOpen)}>
        <ChevronRight
          className={Style.icon}
          style={{
            transform: `rotate(${isOpen ? '90' : '0'}deg)`,
            transition: 'all 200ms linear',
          }}
        />
        <span>{question}</span>
      </div>
      <Collapse in={isOpen} timeout="auto">
        <div className={Style.body}>
          <Markup content={content} />
        </div>
      </Collapse>
    </div>
  )
}
export default FAQItem
