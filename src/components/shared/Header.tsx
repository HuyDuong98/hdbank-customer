import { FC, useState, useRef, useEffect } from "react";
import Style from "@styles/components/Shared/Header.module.scss";
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
} from "@material-ui/core";
import { pagePath } from "../../utils/constants/pagePath";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import useOnClickOutside from "../../hooks/useOnClickOutSide";
import clsx from "clsx";
import { getSuggestion } from "../../apis/landing-page/search";
import { useQuery } from "react-query";
import Link from "next/link";
import { useRouter } from "next/router";

//component
import CustomTextField from "./CustomTextField";
import DialogContact from "../Header/DialogContact";
import { isMobileState, homeContactRef } from "../../stores/sharedStores";

//icons
import SearchIcon from "@material-ui/icons/Search";
import AccessTime from "@material-ui/icons/AccessTime";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import CloseIcon from "@material-ui/icons/Close";
import { TrendingUpOutlined } from "@material-ui/icons";

const MenuIcon = "/assets/icons/menu.svg";
const FaqIcon = "/assets/icons/faq-outline.svg";
const SearchMenuIcon = "/assets/icons/search.svg";
const HomeIcon = "/assets/icons/home_outline.svg";
const CardIcon = "/assets/icons/card-outline.svg";
const GiftIcon = "/assets/icons/gift-outline.svg";
const NewsIcon = "/assets/icons/news-outline.svg";
const CardForYouIcon = "/assets/icons/card-for-you.svg";
const ContactIcon = "/assets/icons/email-outline.svg";

//img
const LogoMobile = "/assets/Logo-2.png";
const Logo = "/assets/Logo.png";

import { getCookie, setCookie } from "../../utils/helpers/cookieHelpers";

const menus = [
  {
    label: "home",
    icon: <img src={HomeIcon} alt="" />,
    path: pagePath.landingPage,
  },
  {
    label: "product",
    icon: <img src={CardIcon} alt="" />,
    path: pagePath.productPage,
  },
  {
    label: "promotion",
    icon: <img src={GiftIcon} alt="" />,
    path: pagePath.promotion,
  },
  {
    label: "news",
    icon: <img src={NewsIcon} alt="" />,
    path: pagePath.news,
  },
  {
    label: "cardForYou",
    icon: <img src={CardForYouIcon} alt="" />,
    path: pagePath.customerJourney,
  },
  {
    label: "contact",
    icon: <img src={ContactIcon} alt="" />,
    path: "contact",
    isContact: true,
  },
  {
    label: "FAQ",
    icon: <img src={FaqIcon} alt="" />,
    path: pagePath.faq,
  },
];

const Header: FC = () => {
  const cookieName = "searchValue";
  const offsetTop = useRecoilValue(homeContactRef);
  const inputSearchRef = useRef<HTMLDivElement>(null);
  const [isLogin] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>();
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  const [isOpenSuggest, setIsOpenSuggest] = useState<boolean>(false);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [searchBox, setSearchBox] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogRegister, setIsDialogRegister] = useState(false);

  const { data, isFetching } = useQuery("suggestionQuery", getSuggestion);

  const getNumb = (str) => {
    const newString = str.slice(0, 15);
    const numbStr = newString
      .split(cookieName)
      .join("")
      .split("=")
      .join("")
      .split("{")
      .join("");
    const parseNumb = parseInt(numbStr);
    const numb = parseNumb > 9 ? 3 : parseNumb > 99 ? 4 : 2;
    return numb;
  };
  const router = useRouter();

  const handleGetValue = (d) => {
    setIsOpenSuggest(false);
    setValueSearch(d);
    router.push(pagePath.search + "?keyword=" + d);
  };

  useEffect(() => {
    const activePage = menus.find((f) => f.path === router.pathname);
    if (activePage) setActiveMenu(activePage.path);
  }, [router.pathname]);

  const handleDialog = () => setIsOpen(!isOpen);
  const handleDialogRegister = () => setIsDialogRegister(!isDialogRegister);

  const openMenu = Boolean(anchorElMenu);
  const id = openMenu ? "simple-popper" : undefined;
  useOnClickOutside(inputSearchRef, () => setIsOpenSuggest(false));
  const { t, i18n } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "vn" ? "en" : "vn");
    setCookie("UserLanguage", i18n.language === "vn" ? "vi" : "en", 330);
  };

  const handleShowMenu = (event) => {
    const anchorEl = event?.currentTarget?.closest("#headerMobile");
    setAnchorElMenu(anchorElMenu ? null : anchorEl);
  };

  const hadleSearchBox = (event) => {
    setSearchBox(!searchBox);
    if (isMobile) handleShowMenu(event);
  };

  const handleSubmitSearch = () => {
    if (valueSearch && valueSearch.trim() !== "") {
      setIsOpenSuggest(false);
      router.push(
        pagePath.search + "?keyword=" + valueSearch?.trim().normalize("NFC")
      );
      if (isMobile) {
        setAnchorElMenu(null);
        setSearchBox(!searchBox);
      }
    }
  };

  const handleSubmitSearchEnter = (event) => {
    if (event.key === "Enter") {
      handleSubmitSearch();
    }
  };

  const onContactClick = () => {
    if (router.pathname === "/home") {
      offsetTop?.current.scrollIntoView({ behavior: "smooth", block: "start" });
      offsetTop?.current.scrollIntoView(true);
      window.scrollBy({ top: -90, behavior: "smooth" });
    } else {
      handleDialog();
    }
  };

  const mobileMenuClick = (item) => {
    if (item.isContact) {
      onContactClick();
    } else {
      router.push(item.path);
    }

    handleShowMenu({});
  };

  const handleOpenSuggest = () => {
    const temp: any[] = [];
    for (let i = 0; i < 5; i++) {
      const cookieData = getCookie(`${cookieName}${i}`);
      if (cookieData) {
        temp.push(JSON.parse(cookieData));
      }
    }

    setSearchHistory(
      temp.sort((a, b) => {
        const timeA = new Date(a.time).getTime();
        const timeB = new Date(b.time).getTime();
        return timeB > timeA ? 1 : -1;
      })
    );
    setIsOpenSuggest(true);
  };

  const renderMobileHeader = () => {
    return (
      <>
        <Container className={Style.headerMobile} id="headerMobile">
          <Grid
            container
            className={Style.wrapper}
            justifyContent="space-between"
            alignItems="center"
          >
            {!searchBox ? (
              <>
                <Box onClick={handleShowMenu} aria-describedby="simple-popper">
                  {openMenu ? (
                    <CloseIcon color="primary" />
                  ) : (
                    <img alt="" src={MenuIcon} />
                  )}
                </Box>
                <img src={LogoMobile} alt="" />
                <Box onClick={hadleSearchBox}>
                  {!openMenu && <img src={SearchMenuIcon} alt="" />}
                </Box>
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
                    placeholder={t("search")}
                    value={valueSearch}
                    icon={<SearchIcon />}
                    onChange={(v) => setValueSearch(v)}
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
          <Popper
            id={id}
            open={openMenu}
            anchorEl={anchorElMenu}
            transition
            className={Style.popperMenu}
            popperOptions={{
              modifiers: {
                preventOverflow: {
                  padding: 0,
                  enabled: TrendingUpOutlined,
                  boundariesElement: "scrollParent",
                },
                flip: {
                  enabled: false,
                },
                arrow: {
                  enabled: true,
                },
              },
            }}
          >
            {!searchBox ? renderMenu() : renderSuggestSearch()}
          </Popper>
        </Container>
      </>
    );
  };

  if (isFetching) return <></>;

  const renderDialog = () => {
    const dProps = {
      isOpen,
      handleClose: () => handleDialog(),
    };
    return <DialogContact {...dProps} />;
  };

  const renderMenu = () => {
    return (
      <Box className={Style.menuWrapper}>
        <Grid
          container
          className={Style.login}
          justifyContent="center"
          spacing={1}
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => router.push(pagePath.login)}
            >
              {t("loginNow")}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              className={Style.rightItem}
              onClick={() => router.push(pagePath.register)}
            >
              {t("register")}
            </Button>
          </Grid>
        </Grid>
        <Box>
          <List component="nav" className={Style.listMenu}>
            <ListItem button divider className={Style.listItem}>
              <Grid container justifyContent="space-between">
                <Typography>{t("language")}</Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  onClick={changeLanguage}
                >
                  <Typography>{t("curentLanguage")}</Typography>
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
              );
            })}

            <ListItem className={Style.listItem}>
              <Typography variant="body1">
                Hotline: <Typography color="primary">1900 6060</Typography>
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };

  const renderSuggestSearch = () => {
    return (
      <Box className={Style.menuWrapper}>
        <SuggestSearch
          onClick={handleGetValue}
          suggestionList={data.suggestions}
          historySearch={searchHistory}
        />
      </Box>
    );
  };

  const renderPcHeader = () => {
    return (
      <Grid container className={Style.container}>
        <div className={`${isOpenSuggest && Style.overlay}`}></div>
        <Grid item sm={6} md={7}>
          <Grid container alignItems="center" className={Style.menuWrapper}>
            <Link href={pagePath.landingPage} passHref>
              <img src={Logo} className={Style.logo} alt="" />
            </Link>
            <Link href={pagePath.productPage}>{t("product")}</Link>
            <Link href={pagePath.promotion}>{t("promotion")}</Link>
            <Link href={pagePath.news}>{t("news")}</Link>
            <Link href={pagePath.customerJourney}>{t("cardForYou")}</Link>
            <Link href="#">
              <a onClick={onContactClick}>{t("contact")}</a>
            </Link>
            <Link href={pagePath.faq}>{t("FAQ")}</Link>
          </Grid>
        </Grid>
        <Grid item md={5}>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            className={Style.profileWrapper}
          >
            <Grid item md={5}>
              {searchBox ? (
                <div ref={inputSearchRef}>
                  <CustomTextField
                    placeholder={t("search")}
                    value={valueSearch}
                    icon={<SearchIcon />}
                    onChange={(v) => setValueSearch(v)}
                    onFocus={handleOpenSuggest}
                    styleName={Style.searchBox}
                    isIconClick={true}
                    onIconClick={() => handleSubmitSearch()}
                    onKeyPress={(event) => handleSubmitSearchEnter(event)}
                  />
                  {isOpenSuggest && (
                    <SuggestSearch
                      onClick={handleGetValue}
                      suggestionList={data.suggestions}
                      historySearch={searchHistory}
                    />
                  )}
                </div>
              ) : (
                <Grid container justifyContent="flex-end">
                  <IconButton
                    onClick={hadleSearchBox}
                    className={Style.borderRound}
                  >
                    <SearchIcon />
                  </IconButton>
                </Grid>
              )}
            </Grid>
            <Box className={Style.groButton}>{isLogin || <Link href={pagePath.login} passHref >{t("login")}</Link>}</Box>

            <Button
              variant="contained"
              color="primary"
              className={Style.rightItem}
            >
              <Link href={pagePath.register}>
                <a>
                  <span>{t("register")}</span>
                </a>
              </Link>
            </Button>
            {isLogin && (
              <Avatar
                className={Style.avatar}
                alt="Remy Sharp"
                src="https://mui.com/static/imgs/avatar/1.jpg"
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      {isMobile ? renderMobileHeader() : renderPcHeader()}
      {renderDialog()}
    </>
  );
};

export default Header;
const SuggestSearch = ({ onClick, suggestionList, historySearch }) => {
  const { t } = useTranslation();
  return (
    <Box className={Style.boxSuggest}>
      {historySearch && (
        <Box mb={2}>
          {historySearch.map((d, i) => (
            <Button
              key={i}
              variant="text"
              startIcon={<AccessTime />}
              onClick={() => onClick(d.value)}
            >
              {d.value}
            </Button>
          ))}
        </Box>
      )}

      <Box>
        <Typography component="p" color="primary">
          {t("keywordSuggestions")}
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
  );
};
