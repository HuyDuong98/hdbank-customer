import { Box, Container, Grid } from "@material-ui/core";
import { FC, useState, useEffect } from "react";
import Style from "../../styles/promotion/Promotion.module.scss";

import { useTranslation } from "react-i18next";
import {
  getPromotionFilter,
  getPromotions,
} from "../../apis/landing-page/promotion";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import { IPromotionsModel } from "../../models/IPromotionModel";
import { activeTabState } from "../../stores/promotionStore";

//components
import PageTitle from "@components/shared/PageTitle";
import CustomPagination from "../../components/shared/CustomPagination";
import CardPromotion from "../../components/promotion/CardPromotion";
import PageHeading from "../../components/shared/PageHeading";
import Tabs from "../../components/shared/Tabs";
import PromotionItem from "../../components/promotion/PromotionItem";

const lstOption = [
  {
    name: 10,
    value: 10,
  },
  {
    name: 15,
    value: 15,
  },
  {
    name: 20,
    value: 20,
  },
  {
    name: 25,
    value: 25,
  },
];

const Promotion: FC = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);
  const [tabs, setTabs] = useState([]);
  const activeTab = useRecoilValue(activeTabState);
  const [type, setType] = useState<string | null>(activeTab || "0");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalRecord, setTotalRecord] = useState<number>(0);
  const lstBreadCrumb = [{ label: t("promotion") }];
  const langCode =
    i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : i18n.language;

  const { data: lstFilter } = useQuery(["lstFilterQuery", langCode], () =>
    getPromotionFilter(langCode)
  );
  useEffect(() => {
    if (!lstFilter) return;
    const newFilter = lstFilter.map((data) => {
      return {
        label: data.item,
        value: data.value,
      };
    });
    setTabs(newFilter);
  }, [lstFilter]);

  const { data: lstPromotions } = useQuery<IPromotionsModel>(
    ["promotionsQuery", langCode, type, pageNumber, pageSize],
    () => getPromotions(langCode, type, pageNumber, pageSize)
  );

  useEffect(() => {
    try {
      setTotalRecord(lstPromotions?.total_record || 0);
    } catch {
      return;
    }
  }, [lstPromotions]);

  const handleChangePageSize = (_, page) => {
    setPageNumber(page);
  };

  const handleTab = (value) => {
    setType(value);
    setPageNumber(1);
  };

  const handleCountPage = (value) => {
    setPageSize(value);
    setPageNumber(1);
  };
  return (
    <Container className={Style.promotionWrapper}>
      {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}

      <PageTitle title={t("promotion")} />

      <Tabs tabs={tabs} value={type} onChange={(value) => handleTab(value)} />
      <Box component="section">
        {lstPromotions && lstPromotions.highlight && (
          <CardPromotion
            noti={lstPromotions?.highlight.label_text}
            image={
              isMobile
                ? lstPromotions?.highlight.mobile_mode
                : lstPromotions?.highlight.pc_mode
            }
            {...lstPromotions?.highlight}
          />
        )}
      </Box>
      <Box component="section">
        <Grid container spacing={4}>
          {lstPromotions &&
            lstPromotions.listPromotions &&
            lstPromotions.listPromotions.map((e, i) => (
              <Grid key={i} item lg={4} md={6} xs={12}>
                <PromotionItem
                  image={isMobile ? e.mobile_mode : e.pc_mode}
                  name={e.title}
                  applicable={e.content}
                  productId={e.id}
                  startDate={e.start}
                  endDate={e.finish}
                  btnDetail="text"
                  typeThumb="full"
                  noti={e.label_text}
                />
              </Grid>
            ))}
        </Grid>
        {lstPromotions &&
          lstPromotions.listPromotions &&
          lstPromotions.listPromotions.length > 0 && (
            <Box mt={3}>
              <CustomPagination
                page={pageNumber}
                totalRecord={totalRecord}
                countPage={pageSize}
                hanleChangePage={(e, value) => handleChangePageSize(e, value)}
                hanleChangePageSize={(value) => handleCountPage(value)}
                options={lstOption}
              />
            </Box>
          )}
      </Box>
    </Container>
  );
};
export default Promotion;
