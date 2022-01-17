import { DOMAIN } from '../../config/domain'
import { getAsync } from '../../utils/helpers/transportRequestor'

export const getBanner = async (langCode: string, screenId: number | string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/get-banner?langcode=${langCode}&screenid=${screenId}`
  return getAsync<any>(apiUrl)
}
