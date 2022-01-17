import { DOMAIN } from '../config/domain'
import { getAsync } from '../utils/helpers/transportRequestor'

export const getFooterInfo = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/footer-info?langcode=${langCode}`
  return getAsync(apiUrl)
}
