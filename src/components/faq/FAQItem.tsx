import { FC, useState, useRef } from 'react'
import Style from '../../styles/faq/ListFAQ.module.scss'
import { Collapse } from '@material-ui/core'
import { ChevronRight, KeyboardArrowDown } from '@material-ui/icons'

//icons
import useOnClickOutside from '../../hooks/useOnClickOutSide'
import { Markup } from 'interweave'
import { IFAQDetail } from '@models/IFAQ'
import clsx from 'clsx'
interface FaqItemProps {
  questions?: IFAQDetail[]
}
const FAQItem: FC<FaqItemProps> = ({ questions }) => {
  const [state, setState] = useState<number | null>(null)
  const ref = useRef(null)

  const handleCollapse = (index) => {
    if (state !== index) {
      setState(index)
    } else {
      setState(null)
    }
  }
  return (
    <>
      {questions &&
        questions?.map((item, index) => {
          return (
            <div key={item.id} ref={ref} className={Style.questionWrapper}>
              <div
                className={clsx(Style.heading, {
                  [Style.active]: state === index,
                })}
                onClick={() => handleCollapse(index)}
              >
                {state === index ? (
                  <KeyboardArrowDown className={Style.icon} />
                ) : (
                  <ChevronRight className={Style.icon} />
                )}
                <span>{item.question_title}</span>
              </div>
              <Collapse in={state === index ? true : false} timeout="auto" unmountOnExit={true}>
                <div className={Style.body}>
                  <Markup content={item.description} />
                </div>
              </Collapse>
            </div>
          )
        })}
    </>
  )
}
export default FAQItem
