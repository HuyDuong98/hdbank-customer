import { FC, useEffect, useState } from 'react'
import Style from '../../styles/faq/ListFAQ.module.scss'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import { IFAQListModal, IFAQDetail } from '../../models/IFAQ'
import clsx from 'clsx'

//component
import FAQItem from './FAQItem'
import PageHeading from '../shared/PageHeading'
import CustomTextField from '../shared/CustomTextField'
import DialogSendQuestion from './DialogSendQuestion'
import PageTitle from '@components/shared/PageTitle'

//utils
import { convertValueSearch } from '../../utils/helpers/commonHelpers'

//apis
import { getListFaq } from '../../apis/faq'

//stores
import { isMobileState } from '../../stores/sharedStores'

//icons
import SearchIcon from '@material-ui/icons/Search'

//images
const SendQuestionIcon = '/assets/icons/ic_send_question.svg'

const FAQList: FC = () => {
  const { t, i18n } = useTranslation()
  const isMobile = useRecoilValue(isMobileState)
  const [search, setSearch] = useState('')
  const [topic, setTopic] = useState('')
  const [showFAQDetail, setShowFAQDetail] = useState<boolean>(false)
  const [listQuestion, setListQuestion] = useState<IFAQDetail[]>()
  const [lstFAQ, setListFAQ] = useState<IFAQListModal[]>()
  const [isOpen, setIsOpen] = useState(false)
  const [activeTopic, setActiveTopic] = useState(null)
  const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language

  const { data } = useQuery<IFAQListModal[]>(['lstFAQQuery', langCode], () => getListFaq(langCode))

  useEffect(() => {
    if (data && data.length > 0) {
      setListFAQ(data)
      handleSelectTopic(data[0].title, data[0].faqDetails, data[0].id)
    }
  }, [data])

  const handleDialog = () => setIsOpen(!isOpen)
  const handleSelectTopic = (topicName, questions, id) => {
    setActiveTopic(id)
    setListQuestion(questions)
    setTopic(topicName)
    if (isMobile) setShowFAQDetail(!showFAQDetail)
  }

  const handleSearch = (value) => {
    setSearch(value)
  }

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitSearch()
    }
  }

  const handleSubmitSearch = () => {
    const newData = data?.filter((item) => {
      const newValueSearch = convertValueSearch(search)
      //search content detail
      const isSearchContent = item?.faqDetails?.find(
        (detail) =>
          convertValueSearch(detail.question_title)?.search(newValueSearch) != -1 ||
          convertValueSearch(detail.description)?.search(newValueSearch) != -1,
      )
      return convertValueSearch(item.title)?.search(newValueSearch) != -1 || isSearchContent
    })
    setListFAQ(newData)
  }

  const renderListTopic = () => {
    return (
      <div className={Style.contentWrapper}>
        <CustomTextField
          placeholder={t('search')}
          outlined={true}
          value={search}
          onChange={(value) => {
            handleSearch(value)
          }}
          onKeyPress={(event) => handleSearchKeyPress(event)}
          isIconClick={true}
          onIconClick={handleSubmitSearch}
          icon={<SearchIcon />}
        />

        {renderTopicItem()}
      </div>
    )
  }

  const renderTopicItem = () => {
    return (
      <div className={Style.topicGroup}>
        {lstFAQ?.map((item) => {
          return (
            <div
              key={item.id}
              className={clsx(Style.topicItem, {
                [Style.active]: activeTopic === item.id,
              })}
              onClick={() => handleSelectTopic(item.title, item.faqDetails, item.id)}
            >
              <div className={Style.name}>
                <span>{item.title}</span>
              </div>
              <div className={Style.qNumber}>
                <span>{item.question_Count}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderListQuestion = () => {
    return (
      <div className={Style.contentWrapper}>
        {topic && showFAQDetail ? (
          <Grid className={Style.pageTitle}>
            <Typography variant="h2">{topic}</Typography>
          </Grid>
        ) : (
          <div className={Style.topicHeading}>
            <Typography>{topic}</Typography>
          </div>
        )}
        <FAQItem questions={listQuestion} />
        {/* {listQuestion &&
          listQuestion.map((item, index) => (
            <FAQItem key={item.id} question={item.question_title} content={item.description} index={index} />
          ))} */}
      </div>
    )
  }

  const renderDialog = () => {
    const dProps = {
      isOpen,
      handleClose: () => handleDialog(),
    }
    return <DialogSendQuestion {...dProps} />
  }

  const lstBreadCrumb = [{ label: t('frequentlyAskedQuestions') }]

  return (
    <>
      <Container className={Style.faqWrapper}>
        {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}
      </Container>
      {!showFAQDetail && (
        <Box className={Style.header}>
          <Container className={Style.faqWrapper}>
            <Box>
              <PageTitle title={t('howCanWeHelpYou')} />

              <Button
                variant="contained"
                color="primary"
                startIcon={<img src={SendQuestionIcon} />}
                onClick={handleDialog}
              >
                {t('submitAQuestion')}
              </Button>
            </Box>
          </Container>
        </Box>
      )}
      <Container className={Style.faqWrapper}>
        <Grid container className={Style.container} spacing={6}>
          {isMobile ? (
            <>
              <Grid item xs={12}>
                {!showFAQDetail ? (
                  renderListTopic()
                ) : (
                  <>
                    <Box mt={3} className={Style.return} onClick={() => setShowFAQDetail(!showFAQDetail)}>
                      <KeyboardArrowLeftIcon />
                      <Typography>{t('comeBack')}</Typography>
                    </Box>
                    {renderListQuestion()}
                  </>
                )}
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={4}>
                {renderListTopic()}
              </Grid>
              <Grid item xs={12} md={8}>
                {renderListQuestion()}
              </Grid>
            </>
          )}
        </Grid>
        {renderDialog()}
      </Container>
    </>
  )
}

export default FAQList
