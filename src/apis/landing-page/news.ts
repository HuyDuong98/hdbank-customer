import { getAsync } from '../../utils/helpers/transportRequestor'
import { INewsDto, INewsDetailDto } from '../dtos/landing-page/INewsDto'
import { DOMAIN } from '../../config/domain'

export const getAllNews = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/getnews?langcode=${langCode}`
  return getAsync<INewsDto>(apiUrl)
}

export const getNewsByCate = async (
  langCode: string,
  type: string | number,
  page: number,
  pageSize: number,
): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/getnews-by-category?categoryid=${type}&langcode=${langCode}&page=${page}&pagesize=${pageSize}`
  return getAsync<any>(apiUrl)
}

export const getFilterNews = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/getnews/filter-news?langcode=${langCode}`
  return getAsync<any>(apiUrl)
}

export const getNewsDetailPage = async (langCode: string, id: number): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/getnews/detail?id=${id}&langcode=${langCode}`
  return getAsync<INewsDetailDto>(apiUrl)
}
