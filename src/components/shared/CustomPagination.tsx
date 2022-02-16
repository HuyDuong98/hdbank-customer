import { Box, Grid, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CustomSelect from './CustomSelect'
import Style from '../../styles/components/shared/CustomPagination.module.scss'

interface IOptions {
  name: string | number
  value: string | number
}

interface ICustomPagination {
  totalRecord: number
  countPage: number
  page: number
  hanleChangePage: (e, value: number) => void
  hanleChangePageSize: (value: string | number) => void
  options: IOptions[]
}
const CustomPagination: FC<ICustomPagination> = ({
  totalRecord,
  countPage,
  page,
  hanleChangePage,
  hanleChangePageSize,
  options,
}) => {
  const { t } = useTranslation()
  return (
    <>
      <Grid container alignItems="center">
        <Grid item md={7} xs={12}>
          <Pagination
            count={Math.ceil(totalRecord / countPage)}
            className={Style.pagination}
            page={page}
            onChange={hanleChangePage}
            itemType="ellipsis"
          />
        </Grid>
        <Grid item md={5} xs={12}>
          <Box className={Style.pageSize}>
            <Typography>{t('show')}</Typography>
            <Box>
              <CustomSelect
                outlined={true}
                value={countPage}
                onChange={(value) => hanleChangePageSize(value)}
                options={options}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
export default CustomPagination
