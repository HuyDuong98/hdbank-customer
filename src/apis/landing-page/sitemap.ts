import { getAsync } from '../../utils/helpers/transportRequestor'
import { ISitemapDto } from '../dtos/landing-page/ISitemapDto'
import { DOMAIN } from '../../config/domain'

export const getSitemap = async (): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/site-map?langcode=vi`
  return getAsync<ISitemapDto>(apiUrl)
}
