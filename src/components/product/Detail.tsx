import {
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
  FormControlLabel,
  Checkbox,
  Badge,
} from "@material-ui/core";
import { FC, useState, useEffect } from "react";
import Style from "../../styles/product/ProductDetail.module.scss";
import { useTranslation } from "react-i18next";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import copy from "copy-to-clipboard";
import { pagePath } from "../../utils/constants/pagePath";
import clsx from "clsx";
import Link from "next/link";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Markup } from "interweave";

//icons
import SocialShare from "../../components/shared/SocialShare";
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";

//image
const CompareIcon = "/assets/mobile/landing/compare-icon.svg";
const CompareIconBlack = "/assets/mobile/landing/compare-icon-black.svg";
const PromoteImage = "/assets/mobile/landing/news-page.png";

const Card2 = "/assets/mobile/landing/card-2.png";

interface IPromoteItem {
  id: string | number;
  title: string;
  content: string;
  finish_date: string;
  start_date: string;
  pc_mode: string;
  mobile_mode: string;
}

interface IDetailProp {
  id: number | string;
  title?: string;
  prod_code?: string;
  short_description?: string;
  prod_description?: string;
  pc_mode?: string;
  mobile_mode?: string;
  hyperlink: string;
  lstPromote: IPromoteItem[];
}

const Detail: FC<IDetailProp> = (props) => {
  const {
    title,
    id,
    short_description,
    prod_description,
    pc_mode,
    mobile_mode,
    lstPromote,
    hyperlink,
  } = props;
  const { t } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);

  const [lstCompare, setLstCompare] = useState<any>([]);
  const [checked, setChecked] = useState({});

  const image = !isMobile ? pc_mode : mobile_mode;
  const isLength = lstCompare.length > 1;

  useEffect(() => {
    const sessionStorageeData = sessionStorage.getItem("cardCompare");
    const cardCompare = sessionStorageeData && JSON.parse(sessionStorageeData);
    if (cardCompare) {
      setLstCompare(cardCompare.list);
      setChecked(cardCompare.checked);
    }
    // const script = document.createElement('script')
    // script.src = 'https://sp.zalo.me/plugins/sdk.js'
    // script.async = true

    // document.body.appendChild(script)

    // return () => {
    //   document.body.removeChild(script)
    // }
  }, []);

  const handleCopyLink = () => {
    copy(window.location.href, {
      debug: true,
      message: "Press #{key} to copy",
    });
  };

  const remove = (card) => {
    const temp = lstCompare;

    temp.map((item, idx) => {
      if (item.id === card.id) {
        temp.splice(idx, 1); //remove card
        const newChecked = { ...checked, [card.id]: false };
        setLstCompare(temp);
        setChecked(newChecked);

        const cardCompare = {
          checked: newChecked,
          list: temp,
        };

        sessionStorage.setItem("cardCompare", JSON.stringify(cardCompare));
      }
    });
  };

  const onChooseCard = (e, card) => {
    const isChecked = e.target.checked;
    const temp = lstCompare;

    if (isChecked) {
      // add card into compare list
      const newChecked = { ...checked, [card.id]: isChecked };

      setLstCompare([...lstCompare, card]);
      temp.push(card);

      setChecked(newChecked);
      const cardCompare = {
        checked: newChecked,
        list: temp,
      };

      sessionStorage.setItem("cardCompare", JSON.stringify(cardCompare));
    } else {
      remove(card);
    }

    // if (temp.length === 3) history.push(pagePath.compareProductsPage)
  };

  const renderCopyLink = () => {
    return (
      <Grid item sm={5} xs={12}>
        <Grid
          container
          alignItems="flex-end"
          justifyContent="space-between"
          className={Style.copyLink}
        >
          <Grid item>
            <SocialShare />
          </Grid>

          <Grid item>
            <Grid container alignItems="center" className={Style.linkWrap}>
              <Grid item>
                <span>{t("copyLink")}</span>
              </Grid>
              <Grid item>
                <IconButton onClick={() => handleCopyLink()}>
                  <FileCopyOutlined />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderBody = () => {
    return (
      <Grid className={Style.detailWrap}>
        <Typography variant="h1">{t(`${title}`)}</Typography>

        <Grid container className={Style.mainDetailWrap}>
          <Grid item sm={5} xs={12}>
            <Grid container>
              <Grid item xs={12} justifyContent="center" container>
                <img src={image || Card2} />
              </Grid>
              <Grid item xs={12}>
                <Grid className={Style.bottomImage}>
                  <Grid>
                    <Grid
                      container
                      direction="column"
                      className={Style.groupInfo}
                    >
                      <span className={Style.desc}>{short_description}</span>
                    </Grid>
                  </Grid>

                  <Grid className={Style.actionWrap}>
                    <Grid className={Style.btnDiv}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => (window.location.href = hyperlink)}
                      >
                        {t("openCard")}
                      </Button>
                    </Grid>

                    <FormControlLabel
                      className={Style.checkBox}
                      control={
                        <Checkbox
                          checked={checked[id] || false}
                          onChange={(e) => onChooseCard(e, { ...props })}
                          color="primary"
                          disabled={lstCompare.length === 3 || false}
                        />
                      }
                      label={t("compareCards")}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={7} xs={12}>
            <Grid container className={Style.mainInfo}>
              <Grid item xs={12}>
                <Markup content={prod_description} />
              </Grid>

              <Grid item xs={12}>
                <Grid container className={Style.listPromotion}>
                  <Typography variant="h6" className={Style.promoteTitle}>
                    {t("cardIncentiveProgram")}
                  </Typography>
                  {lstPromote.map((promote, idx) => {
                    const {
                      id,
                      title,
                      content,
                      pc_mode,
                      mobile_mode,
                      finish_date,
                      start_date,
                    } = promote;
                    const promoteImage = !isMobile ? pc_mode : mobile_mode;
                    return (
                      <Grid
                        key={idx}
                        container
                        direction="column"
                        className={Style.promotionWrap}
                      >
                        <Link
                          href={`${pagePath.promotion}/${convertUrltoSlug(
                            title
                          )}.${id}`}
                        >
                          <Typography className={Style.titleMobile}>
                            {t(title)}
                          </Typography>
                        </Link>
                        <Grid container justifyContent="space-between">
                          <Grid item md={4} sm={5} className={Style.promoteImg}>
                            <Link
                              href={`${pagePath.promotion}/${convertUrltoSlug(
                                title
                              )}.${id}`}
                            >
                              <div>
                                <img src={promoteImage || PromoteImage} />
                                <Box className={Style.noti}>
                                  <span>{t("new")}</span>
                                </Box>
                              </div>
                            </Link>
                          </Grid>

                          <Grid item md={8} sm={7} className={Style.info}>
                            <Grid container direction="column">
                              <Link
                                href={`${pagePath.promotion}/${convertUrltoSlug(
                                  title
                                )}.${id}`}
                              >
                                <Typography className={Style.titlePC}>
                                  {t(title)}
                                </Typography>
                              </Link>
                              <Grid className={Style.time}>
                                <AccessTimeIcon />
                                <Typography>
                                  {start_date} - {finish_date}
                                </Typography>
                              </Grid>

                              <span className={Style.textContent}>
                                {t(content)}
                              </span>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {renderCopyLink()}
      </Grid>
    );
  };

  const renderBadge = () => {
    return (
      <Grid className={Style.badgeWrap}>
        <Grid className={Style.relative}>
          <Grid
            //className={Style.badgeIcon}
            className={clsx(Style.badgeIcon, {
              [Style.blackColor]: !isLength,
            })}
            onClick={() => {
              // if (isLength) history.push(pagePath.compareProductsPage)
            }}
          >
            <Badge badgeContent={`${lstCompare.length}/3`} color="primary">
              <img src={isLength ? CompareIcon : CompareIconBlack} />
            </Badge>
          </Grid>

          <Grid className={Style.listCardWrap}>
            {lstCompare.map((card, idx) => {
              return (
                <Grid
                  key={idx}
                  className={clsx(Style.cardItem, {
                    [Style.shadow]: !isLength,
                  })}
                >
                  <Grid className={Style.flex}>
                    <img src={card.image || Card2} className={Style.cardImg} />

                    <span className={Style.cardName}>{card.title}</span>
                  </Grid>
                  <ClearIcon
                    className={Style.closeIcon}
                    onClick={() => remove(card)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      {renderBody()}
      {lstCompare.length > 0 && renderBadge()}
    </>
  );
};
export default Detail;
