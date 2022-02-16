import { Grid, Typography, Button } from "@material-ui/core";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import Style from "../../styles/product/ListProductPage.module.scss";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";

//components
import PageTitle from "@components/shared/PageTitle";

//images
const FilterFull = "/assets/icons/filter-full.svg";
const FilterSolid = "/assets/icons/filter-solid.svg";

interface IFilter {
  id: string | number;
  title: string;
  filter_child: {
    id: string;
    title: string;
    isActive;
  }[];
}

interface IFilterItem {
  id: string;
  title: string;
  isActive: boolean;
}
interface IFilterProps {
  lstFilter: IFilter[];
  getFilter: (filter: IFilterItem[]) => void;
}

const Filter: FC<IFilterProps> = (props) => {
  const { lstFilter, getFilter } = props;
  const { t } = useTranslation();

  //global states
  const isMobile = useRecoilValue(isMobileState);

  const [openFilter, setOpenFilter] = useState(false);

  const [listFilter, setListFilter] = useState<IFilterItem[]>([]);

  const handleActive = (item) => {
    const arrayDuplication = listFilter.filter(
      (itemFilter) => itemFilter.id === item.id
    );
    if (arrayDuplication.length > 0) {
      return Style.active;
    }
  };

  const handleFilter = (item) => {
    //filter item duplicate item
    const arrayDuplication = listFilter.filter(
      (itemFilter) => itemFilter.id === item.id
    );
    if (arrayDuplication.length > 0) {
      const filterDupItem = listFilter.filter(
        (itemFilter) => itemFilter.id !== item.id
      );
      setListFilter(filterDupItem);
      return;
    }
    setListFilter([...listFilter, item]);
  };

  const handleApply = () => {
    setOpenFilter(!openFilter);
    getFilter(listFilter);
  };

  const handleClear = () => {
    setListFilter([]);
  };

  return (
    <Grid container className={Style.filterWrap}>
      <Grid container justifyContent="flex-end" className={Style.filterHeading}>
        {!isMobile && (
          <Typography component="span" className={Style.active}>
            {t("product")}
          </Typography>
        )}

        <Grid className={Style.iconGroup}>
          {!isMobile ? (
            <Typography variant="body2">{t("filter")}</Typography>
          ) : (
            <PageTitle title={t("productList")} />
          )}
          <img
            src={openFilter ? FilterFull : FilterSolid}
            className={Style.icon}
            onClick={() => setOpenFilter(!openFilter)}
          />
        </Grid>
      </Grid>

      {openFilter && (
        <>
          <Grid className={Style.listWrap}>
            {lstFilter?.map((group, idx) => {
              const { title, filter_child } = group;
              return (
                <Grid key={idx} className={Style.group}>
                  <Typography variant="body1">{t(title)}</Typography>

                  <Grid className={Style.tags}>
                    {filter_child?.map((item, idx) => {
                      const { title, isActive } = item;
                      return (
                        <Grid key={idx}>
                          <span
                            className={handleActive(item)}
                            onClick={() => handleFilter(item)}
                          >
                            {t(title)}
                          </span>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>

          <Grid className={Style.btnGroup}>
            <Button variant="contained" onClick={handleClear}>
              {t("clearFilter")}
            </Button>
            <Button variant="contained" color="primary" onClick={handleApply}>
              {t("apply")}
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default Filter;
