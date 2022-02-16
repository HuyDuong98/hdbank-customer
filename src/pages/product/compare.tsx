import { Container, Box, Grid, Typography, Button } from "@material-ui/core";
import { FC, useState, useEffect } from "react";
import Style from "../../styles/product/CompareProduct.module.scss";
import { useTranslation } from "react-i18next";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import { pagePath } from "../../utils/constants/pagePath";
import {
  getListCompare,
  getListOtherProduct,
} from "../../apis/landing-page/product";
import { useQuery } from "react-query";
import { Markup } from "interweave";
import Link from "next/link";

//components
import CompareMobile from "../../components/product/CompareMobile";
import DialogListCard from "../../components/product/DialogListCard";
import PageHeading from "../../components/shared/PageHeading";
import PageTitle from "@components/shared/PageTitle";

//utils
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";

//icons
import AddIcon from "@material-ui/icons/Add";

//image
const ControlBar = "/assets/mobile/landing/control-bar.svg";
const CardImg = "/assets/mobile/landing/card-2.png";
const emptyCard = "/assets/mobile/landing/empty-card.png";

const lstBreadCrumb = [
  { label: "productList", path: pagePath.productPage },
  { label: "compareCards" },
];

const CompareProducts: FC = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);
  const langCode =
    i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : "en";
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [cardIndex, setCardIndex] = useState<any>();
  const [cardId, setCardId] = useState<string | null>();

  const [otherList, setOtherList] = useState([]);
  const [checked, setChecked] = useState({});
  const [listQuery, setListQuery] = useState([1, 2, 3]);
  const [content, setContent] = useState({
    products: [],
    criterias: [],
  });

  useEffect(() => {
    const sessionStorageeData = sessionStorage.getItem("cardCompare");
    const cardCompare = sessionStorageeData && JSON.parse(sessionStorageeData);
    if (cardCompare && cardCompare.list.length > 0) {
      const temp = cardCompare.list.map((card) => card.id);
      setListQuery(temp);
      setChecked(cardCompare.checked);
    }
  }, []);

  const { data, isFetching } = useQuery(
    ["compareQuery", langCode, listQuery],
    () => getListCompare(langCode, listQuery)
  );
  const { data: lstOther } = useQuery(["otherQuery", langCode, listQuery], () =>
    getListOtherProduct(langCode, listQuery)
  );

  useEffect(() => {
    if (!data) return;
    setContent(data);

    if (cardIndex >= 0) {
      let tempChecked = { ...checked, [data.products[cardIndex].id]: true };

      if (cardId) {
        tempChecked = { ...tempChecked, [cardId]: false };
      }

      const cardCompare = {
        checked: tempChecked,
        list: data.products,
      };

      sessionStorage.setItem("cardCompare", JSON.stringify(cardCompare));
    }
  }, [data]);

  useEffect(() => {
    if (!lstOther) return;
    setOtherList(lstOther);
  }, [lstOther]);

  const handleShowDialog = () => setIsShowDialog(!isShowDialog);

  const onChooseCard = (cardIndex, cardId) => {
    handleShowDialog();
    setCardIndex(cardIndex);
    setCardId(cardId);
  };

  const handleChoosen = (cardID) => {
    listQuery[cardIndex] = cardID;
    handleShowDialog();
  };

  const renderMobileMode = () => {
    const mProps = {
      ...content,
      onChooseCard: (cardIndex, cardId) => onChooseCard(cardIndex, cardId),
    };
    return <CompareMobile {...mProps} />;
  };

  const renderEmptyBox = () => {
    return (
      <Box className={Style.colDetail}>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={Style.itemProduct}
        >
          <Box className={Style.emptyCard}>
            <img src={emptyCard} alt="" />
          </Box>

          <Grid className={Style.addCard} onClick={() => onChooseCard(2, null)}>
            <AddIcon />
            <span className={Style.link}>{t("selectCards")}</span>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderBodyPage = () => {
    return (
      <Container>
        <Grid className={Style.pageWrap}>
          <PageHeading breadCrumbs={lstBreadCrumb} iconHome />

          <PageTitle title={t("compareCards")} />
        </Grid>

        <Box mt={1}>
          {/* product item  row  */}
          <Box>
            <Box className={Style.rowDetail}>
              {content.products.map((card, i) => {
                const { title, pc_mode, mobile_mode, id, hyperlink } = card;
                const image = !isMobile ? pc_mode : mobile_mode;
                return (
                  <Box key={i} className={`${Style.colDetail} ${Style.first}`}>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      className={Style.itemProduct}
                    >
                      <Link
                        href={`${pagePath.productPage}/${convertUrltoSlug(
                          title
                        )}.${id}`}
                      >
                        <Typography variant="h6">{t(title)}</Typography>
                      </Link>
                      <Link
                        href={`${pagePath.productPage}/${convertUrltoSlug(
                          title
                        )}.${id}`}
                      >
                        <Box className={Style.itemProductImg}>
                          <img src={image || CardImg} alt="" />
                        </Box>
                      </Link>

                      <Grid>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          disableElevation
                          onClick={() => {
                            window.location.href = hyperlink;
                          }}
                        >
                          {t("register")}
                        </Button>
                      </Grid>

                      <Link
                        href={`${pagePath.productPage}/${convertUrltoSlug(
                          title
                        )}.${id}`}
                      >
                        <Typography className={Style.linkPC}>
                          {t("seeDetail")}
                        </Typography>
                      </Link>

                      <Grid>
                        <Button
                          startIcon={
                            <img
                              src={ControlBar}
                              className={Style.chooseIcon}
                            />
                          }
                          onClick={() => onChooseCard(i, id)}
                        >
                          {t("chooseAnotherCards")}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}

              {content.products.length === 2 && renderEmptyBox()}
            </Box>
          </Box>
          {/* product item  row  */}

          {content.criterias.map((cri, idx) => {
            const { name, items } = cri;
            const contentCri: any[] = items;
            return (
              <Box key={idx}>
                <Box className={Style.headDetail}>
                  <Typography>{name}</Typography>
                </Box>

                <Box className={Style.rowDetail}>
                  {contentCri.map((item, idx) => {
                    const { value } = item;
                    return (
                      <Box key={idx} className={Style.colDetail}>
                        <Markup content={value} />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    );
  };

  const renderDialog = () => {
    const dProps = {
      isOpen: isShowDialog,
      handleClose: () => handleShowDialog(),
      handleSubmit: (cardID) => handleChoosen(cardID),
      listCard: otherList,
      position: cardIndex,
    };
    return <DialogListCard {...dProps} />;
  };

  if (isFetching) return <></>;

  return (
    <>
      {!isMobile ? renderBodyPage() : renderMobileMode()}
      {isShowDialog && renderDialog()}
    </>
  );
};
export default CompareProducts;
