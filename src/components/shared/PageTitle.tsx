import { FC } from "react";
import { Typography, Grid } from "@material-ui/core";
import Style from "@styles/components/Shared/PageTitle.module.scss";

interface IPageTitleProps {
  title: string;
  color?: any;
}

const PageTitle: FC<IPageTitleProps> = (props) => {
  const { title, color } = props;
  return (
    <Grid className={Style.pageTitleWrap}>
      <Typography variant="h1" color={color || undefined}>
        {title}
      </Typography>
    </Grid>
  );
};

export default PageTitle;
