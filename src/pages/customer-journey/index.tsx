import {
  Box,
  Button,
  Container,
  Grid,
  Slider,
  Typography,
  withStyles,
} from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Style from "@styles/customer-journey/CustomerJourney.module.scss";
import { useQuery } from "react-query";
import { ICustomNeed } from "@models/ICustomerJourney";

//components
import CustomPagination from "@components/shared/CustomPagination";
import ProductItem from "@components/product/ProductItem";
import PageHeading from "@components/shared/PageHeading";
import PageTitle from "@components/shared/PageTitle";

//apis
import {
  getProductForCustomerJourney,
  getSelectItemCustomerJourney,
} from "@apis/landing-page/product";

//images
const IconSliderMoney = "/assets/icons/slider-money.svg";

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

const CustomSlider = withStyles({
  root: {
    padding: "5rem 0 3rem",
  },
  markLabel: {
    top: 100,
    "@media (max-width: 768px)": {
      fontSize: "0.625rem",
      fontWeight: 400,
    },
  },
  mark: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    top: 77,
    "@media (max-width: 768px)": {
      top: 79,
      width: 6,
      height: 6,
    },
  },
  markActive: {
    opacity: 1,
    backgroundColor: "#da2128",
  },
  track: {
    height: 6,
    "@media (max-width: 768px)": {
      height: 3,
    },
  },
  rail: {
    height: 6,
    backgroundColor: "#e0e0e0",
    "@media (max-width: 768px)": {
      height: 3,
    },
  },
  thumb: {
    width: 24,
    height: 24,
    top: 77,
    "@media (max-width: 768px)": {
      top: 80,
      width: 12,
      height: 12,
    },
  },
  valueLabel: {
    color: "transparent",
    left: -5,
  },
})(Slider);

const CustomerJourney: FC = () => {
  const { t, i18n } = useTranslation();
  const langCode =
    i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : i18n.language;
  const lstBreadCrumb = [{ label: t("chooseCards") }];
  const [contentPage, setContentPage] = useState({
    total_record: 0,
    products: [],
  });
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const [filter, setFilter] = useState({
    monthlyincome: "0",
    monthlyspent: "0",
    demand: "0",
  });

  const [marks, setMarks] = useState<ICustomNeed>({
    monthlyincome: [],
    monthlyspent: [],
    demand: [],
  });
  const [monthlyIncomeValue, setMonthlyIncomeValue] = useState(1);
  const [monthlyspentValue, setMonthlySpentValue] = useState(1);

  const { data: filters } = useQuery(["filtersQuery", langCode], () =>
    getSelectItemCustomerJourney(langCode)
  );

  const { data } = useQuery(
    [
      "lstProductQuery",
      langCode,
      filter.monthlyincome,
      filter.monthlyspent,
      filter.demand,
      pagination.page,
      pagination.pageSize,
    ],
    () =>
      getProductForCustomerJourney(
        langCode,
        filter.monthlyincome,
        filter.monthlyspent,
        filter.demand,
        pagination.page,
        pagination.pageSize
      )
  );

  useEffect(() => {
    if (!data) return;
    setContentPage({ ...data, pageSize: 10 });
  }, [data]);

  const handleChangePageSize = (_, page) => {
    setPagination({
      ...pagination,
      page: page,
    });
  };

  const handleCountPage = (value) => {
    setPagination({
      pageSize: value,
      page: 1,
    });
  };

  useEffect(() => {
    if (filters) {
      setMarks({
        ...marks,
        monthlyincome: filters?.monthlyincome?.map((e, i) => {
          return { value: i + 1, label: e.label, id: e.id };
        }),
        monthlyspent: filters?.monthlyspent?.map((e, i) => {
          return { value: i + 1, label: e.label, id: e.id };
        }),
        demand: filters?.demand,
      });
      setFilter({
        ...filter,
        monthlyincome: filters?.monthlyincome[0].id,
        monthlyspent: filters?.monthlyspent[0].id,
        demand: filters?.demand[0].id,
      });
    }
  }, [filters]);

  const handleChangeMonthlyIncome = (_, value) => {
    setMonthlyIncomeValue(value);
    setFilter({
      ...filter,
      monthlyincome: marks?.monthlyincome[value - 1].id,
    });
  };
  const handleChangeMonthlySpent = (_, value) => {
    setMonthlySpentValue(value);
    setFilter({
      ...filter,
      monthlyspent: marks?.monthlyspent[value - 1].id,
    });
  };

  const formatSliderMoney = () => {
    return <img src={IconSliderMoney} />;
  };

  const renderFilter = () => {
    return (
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={12} xs={12}>
          <Box className={Style.stepJourney}>
            <Box>
              <Typography variant="h2"> {t("monthlyIncome")}</Typography>
              <CustomSlider
                min={0}
                max={marks?.monthlyincome?.length}
                step={1}
                marks={marks?.monthlyincome}
                value={monthlyIncomeValue}
                onChange={(e, value) => handleChangeMonthlyIncome(e, value)}
                valueLabelFormat={formatSliderMoney}
                valueLabelDisplay="on"
              />
              <Typography variant="h2"> {t("monthlySpending")}</Typography>
              <CustomSlider
                min={0}
                max={marks?.monthlyspent?.length}
                step={1}
                marks={marks?.monthlyspent}
                value={monthlyspentValue}
                onChange={(e, value) => handleChangeMonthlySpent(e, value)}
                defaultValue={1}
                valueLabelFormat={formatSliderMoney}
                valueLabelDisplay="on"
              />
            </Box>
            <Box mt={3}>
              <Typography variant="h2"> {t("yourNeeds")}</Typography>
              <Box mt={3}>
                <Grid container spacing={2}>
                  {marks?.demand?.map((data, i) => (
                    <Grid key={data.id} item>
                      <div className={Style.needItem}>
                        <input
                          type="radio"
                          name="need"
                          id={`need${data.id}`}
                          defaultChecked={
                            filter.demand === data.id ? true : false
                          }
                        />
                        <label
                          htmlFor={`need${data.id}`}
                          onClick={() =>
                            setFilter({ ...filter, demand: data.id })
                          }
                        >
                          {data.label}
                        </label>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
            <Box textAlign="center" mt={3}>
              <Button variant="contained" color="primary">
                {t("matchingCard")}
              </Button>
              <Box mt={2}>
                <Typography variant="body2">
                  {t("matchingCardFound", { card: contentPage.total_record })}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  };

  return (
    <Container className={Style.customerJourney}>
      <PageHeading breadCrumbs={lstBreadCrumb} iconHome />
      <PageTitle title={t("chooseACreditCardChooseAStyle")} color="primary" />

      <Box mt={3}>{renderFilter()}</Box>
      <Box mb={3}>
        <ProductItem lstProduct={contentPage.products} />
        {contentPage?.products.length > 0 && (
          <Box my={3}>
            <CustomPagination
              page={pagination.page}
              totalRecord={contentPage.total_record}
              countPage={pagination.pageSize}
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
export default CustomerJourney;
