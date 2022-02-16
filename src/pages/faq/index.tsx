import { FC } from "react";
import { Grid } from "@material-ui/core";
import FAQList from "@components/faq/FAQList";

const FAQ: FC = () => {
  return (
    <Grid container>
      <FAQList />
    </Grid>
  );
};

export default FAQ;
