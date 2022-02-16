import { FC, useState, useRef, useEffect } from 'react'
import Style from '@styles/components/shared/Header.module.scss'
import {
  Button,
  Grid,
  Avatar,
  Box,
  Typography,
  Container,
  Popper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core'
import { pagePath } from '../../utils/constants/pagePath'
import { useTranslation } from 'react-i18next'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import useOnClickOutside from '../../hooks/useOnClickOutSide'
import clsx from 'clsx'
import { getSuggestion } from '../../apis/landing-page/search'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'

//component
import CustomTextField from './CustomTextField'
import { isMobileState, homeContactRef, isOpenMenu } from '../../stores/sharedStores'

//icons
import SearchIcon from '@material-ui/icons/Search'
import AccessTime from '@material-ui/icons/AccessTime'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import CloseIcon from '@material-ui/icons/Close'
import { TrendingUpOutlined } from '@material-ui/icons'

const MenuIcon = '/assets/icons/menu.svg'
const FaqIcon = '/assets/icons/faq-outline.svg'
const SearchMenuIcon = '/assets/icons/search.svg'
const ContactIcon = '/assets/icons/email-outline.svg'

//img
const LogoMobile = '/assets/Logo-3.png'
const Logo = '/assets/Logo.png'

import { eraseCookie, getCookie, setCookie } from '../../utils/helpers/cookieHelpers'
import { HomeIcon, CardIcon, GiftIcon, PaperIcon, KeyIcon, ChatIcon, LetterIcon } from './icons'
import DialogContact from '@components/header/DialogContact'

const menus = [
  {
    label: 'home',
    icon: <HomeIcon />,
    path: pagePath.landingPage,
  },
  {
    label: 'product',
    icon: <CardIcon />,
    path: pagePath.productPage,
  },
  {
    label: 'promotion',
    icon: <GiftIcon />,
    path: pagePath.promotion,
  },
  {
    label: 'news',
    icon: <PaperIcon />,
    path: pagePath.news,
  },
  {
    label: 'cardForYou',
    icon: <KeyIcon />,
    path: pagePath.customerJourney,
  },
  {
    label: 'contact',
    icon: <LetterIcon />,
    path: 'contact',
    isContact: true,
  },
  {
    label: 'FAQ',
    icon: <ChatIcon />,
    path: pagePath.faq,
  },
]

const Header: FC = () => {
  const cookieName = 'searchValue'
  const offsetTop = useRecoilValue(homeContactRef)
  const inputSearchRef = useRef<HTMLDivElement>(null)
  const [isLogin] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string>()
  const [valueSearch, setValueSearch] = useState<string | null>(null)
  const [isOpenSuggest, setIsOpenSuggest] = useState<boolean>(false)
  const [anchorElMenu, setAnchorElMenu] = useState(null)
  const [searchBox, setSearchBox] = useState<boolean>(false)
  const [searchHistory, setSearchHistory] = useState<any>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isDialogRegister, setIsDialogRegister] = useState(false)
  const [isFixedHeader, setIsFixedHeader] = useState<boolean>(false)
  const openMenuState = useRecoilValue(isOpenMenu)
  const setOpenMenu = useSetRecoilState(isOpenMenu)
  const { data, isFetching } = useQuery('suggestionQuery', getSuggestion)

  const getNumb = (str) => {
    const newString = str.slice(0, 15)
    const numbStr = newString.split(cookieName).join('').split('=').join('').split('{').join('')
    const parseNumb = parseInt(numbStr)
    const numb = parseNumb > 9 ? 3 : parseNumb > 99 ? 4 : 2
    return numb
  }
  const router = useRouter()

  const onChangeSeach = (value) => {
    var regex = new RegExp(
      /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
    )
    if (value === '') {
      setValueSearch(value)
    }
    if (!regex.test(value) || value.length > 100) {
      return false
    }
    setValueSearch(value)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollPage, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScrollPage)
    }
  }, [])

  const onScrollPage = () => {
    const position = window.pageYOffset
    if (position > 145) {
      setIsFixedHeader(true)
    } else {
      setIsFixedHeader(false)
    }
  }

  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }
  function preventDefault(e) {
    e.preventDefault()
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e)
      return false
    }
  }
  useEffect(() => {
    const activePage = menus.find((f) => f.path === router.pathname)
    if (activePage) setActiveMenu(activePage.path)
  }, [router.pathname])

  const handleDialog = () => setIsOpen(!isOpen)
  const handleDialogRegister = () => setIsDialogRegister(!isDialogRegister)

  const openMenu = Boolean(anchorElMenu)
  const id = openMenu ? 'simple-popper' : undefined
  useOnClickOutside(inputSearchRef, () => setIsOpenSuggest(false))
  const { t, i18n } = useTranslation()
  const isMobile = useRecoilValue(isMobileState)
  const cookieLanguage = getCookie('UserLanguage')

  const changeLanguage = (value) => {
    i18n.changeLanguage(value)
    eraseCookie('UserLanguage')
    setCookie('UserLanguage', value, 330)
    router.reload()
  }

  const handleShowMenu = (event) => {
    const anchorEl = event?.currentTarget?.closest('#headerMobile')
    setAnchorElMenu(anchorElMenu ? null : anchorEl)
    setOpenMenu(!openMenuState)
  }

  const hadleSearchBox = (event) => {
    setSearchBox(!searchBox)
    if (isMobile) handleShowMenu(event)
  }

  const handleSubmitSearch = () => {
    if (valueSearch && valueSearch.trim() !== '') {
      setIsOpenSuggest(false)
      router.push(pagePath.search + '?keyword=' + valueSearch?.trim().normalize('NFC'))
      if (isMobile) {
        setAnchorElMenu(null)
        setSearchBox(!searchBox)
      }
    }
  }

  const handleSubmitSearchEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmitSearch()
    }
  }

  const onContactClick = () => {
    if (router.pathname === '/home' || router.pathname === '/') {
      offsetTop?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      offsetTop?.current.scrollIntoView(true)
      window.scrollBy({ top: -90, behavior: 'smooth' })
    } else {
      handleDialog()
    }
  }

  const mobileMenuClick = (item) => {
    if (item.isContact) {
      onContactClick()
    } else {
      router.push(item.path)
    }

    handleShowMenu({})
  }

  const handleOpenSuggest = () => {
    const temp: any[] = []
    for (let i = 0; i < 5; i++) {
      const cookieData = getCookie(`${cookieName}${i}`)
      if (cookieData) {
        temp.push(JSON.parse(cookieData))
      }
    }

    setSearchHistory(
      temp.sort((a, b) => {
        const timeA = new Date(a.time).getTime()
        const timeB = new Date(b.time).getTime()
        return timeB > timeA ? 1 : -1
      }),
    )
    setIsOpenSuggest(true)
  }

  const handleClickSuggest = (value) => {
    setValueSearch(value)
    setIsOpenSuggest(false)
    router.push(pagePath.search + '?keyword=' + value?.trim().normalize('NFC'))
    if (isMobile) {
      setAnchorElMenu(null)
      setSearchBox(!searchBox)
    }
  }

  const renderMobileHeader = () => {
    return (
      <>
        <Container className={Style.headerMobile} id="headerMobile">
          <Grid container className={Style.wrapper} justifyContent="space-between" alignItems="center">
            {!searchBox ? (
              <>
                <Box onClick={handleShowMenu} aria-describedby="simple-popper">
                  {openMenu ? <CloseIcon color="primary" /> : <img alt="" src={MenuIcon} />}
                </Box>
                <Link href={pagePath.landingPage}>
                  <img src={LogoMobile} alt="Logo" />
                </Link>
                <Box onClick={hadleSearchBox}>{!openMenu && <img src={SearchMenuIcon} alt="" />}</Box>
              </>
            ) : (
              <>
                <Grid item>
                  <Box onClick={hadleSearchBox}>
                    <CloseIcon color="primary" />
                  </Box>
                </Grid>
                <Grid item xs={11}>
                  <CustomTextField
                    placeholder={t('search')}
                    value={valueSearch}
                    icon={<SearchIcon />}
                    onChange={(v) => onChangeSeach(v)}
                    onFocus={handleOpenSuggest}
                    styleName={Style.searchBox}
                    isIconClick={true}
                    onIconClick={() => handleSubmitSearch()}
                    onKeyPress={(event) => handleSubmitSearchEnter(event)}
                  />
                </Grid>
              </>
            )}
          </Grid>

          {openMenu && (
            <Box className={Style.wrapperContentMobile} onScroll={preventDefaultForScrollKeys}>
              {!searchBox ? renderMenu() : renderSuggestSearch()}
            </Box>
          )}
        </Container>
      </>
    )
  }

  if (isFetching) return <></>

  const renderDialog = () => {
    const dProps = {
      isOpen,
      handleClose: () => handleDialog(),
    }
    return <DialogContact {...dProps} />
  }

  const renderMenu = () => {
    return (
      <Box className={Style.menuWrapper}>
        <Grid container className={Style.login} justifyContent="center" spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              //onClick={() => router.push(pagePath.login)}
            >
              {t('loginNow')}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              className={Style.rightItem}
              //onClick={() => router.push(pagePath.register)}
            >
              {t('register')}
            </Button>
          </Grid>
        </Grid>
        <Box>
          <List component="nav" className={Style.listMenu}>
            <ListItem button divider className={Style.listItem}>
              <Grid container justifyContent="space-between">
                <Typography>{t('language')}</Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  onClick={() => changeLanguage(i18n.language === 'vn' ? 'en' : 'vn')}
                >
                  <Typography>{t('curentLanguage')}</Typography>
                  <KeyboardArrowRightIcon />
                </Box>
              </Grid>
            </ListItem>
            {menus.map((menu, idx) => {
              return (
                <ListItem
                  key={idx}
                  button
                  divider
                  className={clsx(Style.listItem, {
                    [Style.selected]: activeMenu === menu.path,
                  })}
                  onClick={() => mobileMenuClick(menu)}
                >
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={t(menu.label)} />
                </ListItem>
              )
            })}

            <ListItem className={Style.listItem}>
              <Typography variant="body1">
                Hotline: <Typography color="primary">1900 6060</Typography>
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    )
  }

  const renderSuggestSearch = () => {
    return (
      <Box className={Style.menuWrapper}>
        <SuggestSearch
          onClick={(value) => handleClickSuggest(value)}
          suggestionList={data.suggestions}
          historySearch={searchHistory}
        />
      </Box>
    )
  }

  const renderPcHeader = () => {
    return (
      <>
        <div className={`${isOpenSuggest && Style.overlay}`}></div>
        <Grid
          container
          className={clsx(Style.container, {
            [Style.fixed]: isFixedHeader,
          })}
        >
          <Grid item sm={12} md={12} lg={7}>
            <Grid container alignItems="center" className={Style.menuWrapper}>
              <Link href={pagePath.landingPage} passHref>
                <img src={Logo} className={Style.logo} alt="" />
              </Link>
              <Box className={Style.listMenu}>
                <Link href={pagePath.productPage}>{t('product')}</Link>
                <Link href={pagePath.promotion}>{t('promotion')}</Link>
                <Link href={pagePath.news}>{t('news')}</Link>
                <Link href={pagePath.customerJourney}>{t('cardForYou')}</Link>
                <Link href="#">
                  <a onClick={onContactClick}>{t('contact')}</a>
                </Link>
                <Link href={pagePath.faq}>{t('FAQ')}</Link>
              </Box>
            </Grid>
          </Grid>
          <Grid item sm={12} md={12} lg={5}>
            <Grid container justifyContent="flex-end" alignItems="center" className={Style.profileWrapper}>
              <Grid item md={5}>
                {searchBox ? (
                  <div ref={inputSearchRef}>
                    <CustomTextField
                      placeholder={t('search')}
                      value={valueSearch}
                      icon={<SearchIcon />}
                      onChange={(v) => onChangeSeach(v)}
                      onFocus={handleOpenSuggest}
                      styleName={Style.searchBox}
                      isIconClick={true}
                      onIconClick={() => handleSubmitSearch()}
                      onKeyPress={(event) => handleSubmitSearchEnter(event)}
                    />
                    {isOpenSuggest && (
                      <SuggestSearch
                        onClick={(value) => handleClickSuggest(value)}
                        suggestionList={data.suggestions}
                        historySearch={searchHistory}
                      />
                    )}
                  </div>
                ) : (
                  <Grid container justifyContent="flex-end">
                    <IconButton onClick={hadleSearchBox} className={Style.borderRound}>
                      <SearchIcon />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
              <Box className={Style.groButton}>
                {isLogin || (
                  <Link href={'#'} passHref>
                    {t('login')}
                  </Link>
                )}
              </Box>

              <Button variant="contained" color="primary" className={Style.rightItem}>
                <Link href={'#'}>
                  <a>
                    <span>{t('register')}</span>
                  </a>
                </Link>
              </Button>
              {isLogin && (
                <Avatar className={Style.avatar} alt="Remy Sharp" src="https://mui.com/static/imgs/avatar/1.jpg" />
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <>
      {isMobile ? renderMobileHeader() : renderPcHeader()}
      {renderDialog()}
    </>
  )
}

export default Header
const SuggestSearch = ({ onClick, suggestionList, historySearch }) => {
  const { t } = useTranslation()
  return (
    <Box className={Style.boxSuggest}>
      {historySearch && (
        <Box mb={2}>
          {historySearch.map((d, i) => (
            <div>
              <Button key={i} variant="text" startIcon={<AccessTime />} onClick={() => onClick(d.value)}>
                {d.value}
              </Button>
            </div>
          ))}
        </Box>
      )}

      <Box>
        <Typography component="p" color="primary">
          {t('keywordSuggestions')}
        </Typography>
        <Box mt={2}>
          <Grid container spacing={1}>
            {suggestionList.map((d, i) => (
              <Grid key={i} item>
                <Box onClick={() => onClick(d)} className={Style.suggetItem}>
                  {d}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
