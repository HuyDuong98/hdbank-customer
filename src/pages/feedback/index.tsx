import { Box, Container, Grid, Typography } from "@material-ui/core";
import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import PageHeading from "../../components/Shared/PageHeading";
import { isMobileState } from "../../stores/sharedStores";
import Style from "../../styles/feedback/Feedback.module.scss";
import Img02 from "@assets/images/feedback02.png";
// import FormFeedback from '../../components/LandingPage/Feedback/FormFeedback'
// import FeedbackItem from '../../components/LandingPage/Feedback/FeedbackItem'
import { useQuery } from "react-query";
import {
  getBannerFeedback,
  getFeedbacks,
} from "../../apis/landing-page/feedback";
import CustomPagination from "../../components/Shared/CustomPagination";
import FormFeedback from "../../components/feedback/FormFeedback";
import FeedbackItem from "../../components/feedback/FeedbackItem";
const lstOption = [
  { value: 10, name: 10 },
  { value: 15, name: 15 },
  { value: 20, name: 20 },
  { value: 25, name: 25 },
];
const Feedback: FC = () => {
  const { t } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);
  const lstBreadCrumb = [{ label: t("consumerOpinion") }];
  const [pageNumber, setPageNumber] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [countPage, setCountPage] = useState(10);

  const handleChangePageSize = (_, page) => setPageNumber(page);

  const handleCountPage = (value) => {
    setPageNumber(1);
    setCountPage(value);
  };

  const { data } = useQuery(["getFeedbacksQuery", pageNumber, countPage], () =>
    getFeedbacks(pageNumber, countPage)
  );

  const { data: banner } = useQuery("bannerFeedbackQuery", getBannerFeedback);

  useEffect(() => {
    if (data) {
      setTotalRecord(data.total_record);
    }
  }, [data]);
  return (
    <>
      <Container className={Style.feedbackWrapper}>
        {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}
        <Box mt={2} mb={2}>
          <Typography variant="h1">
            {t("whatCustomersSayAboutHDBank")}
          </Typography>
        </Box>
        <Grid container className={Style.introWrapper}>
          <Grid item md={6} xs={12}>
            {banner && <img src={banner} alt="" />}
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={Style.content}>
              <Box>
                <Typography variant="h3" className={Style.textGradiant}>
                  <Typography>+</Typography>
                  12.000
                </Typography>
                <Box mt={2}>
                  <Typography variant="h4">
                    {t("positiveCustomerReviews")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={6} className={Style.formWrapper}>
          <Grid item md={7} xs={12}>
            <Box display="flex" alignItems="center" height="100%">
              <Typography variant="h3">{t("HDBankAlwaysListens")}</Typography>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <FormFeedback />
          </Grid>
        </Grid>
      </Container>
      <Box className={Style.listWrapper}>
        <Container>
          <Grid container>
            <Grid item md={4}>
              <img src={Img02} alt="" />
            </Grid>
            <Grid item md={8}>
              <Box className={Style.slogan}>
                <Typography>
                  <Typography color="primary">HD</Typography>Bank{" "}
                  {t("appreciatesEveryFeedback")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {data &&
              data.feedbacks.map((item) => (
                <Grid key={item.id} item md={4} sm={6} xs={12}>
                  <FeedbackItem
                    valueRating={item.rate}
                    content={item.content}
                    avatar={item.avatar_img}
                    name={item.customer_name}
                    subInfo={item.position}
                  />
                </Grid>
              ))}
          </Grid>
          <Box my={3}>
            <CustomPagination
              page={pageNumber}
              totalRecord={totalRecord}
              countPage={countPage}
              hanleChangePage={() => handleChangePageSize}
              hanleChangePageSize={(value) => handleCountPage(value)}
              options={lstOption}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Feedback;
