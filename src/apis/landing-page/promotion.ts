import { DOMAIN } from '../../config/domain'
import { getAsync } from '../../utils/helpers/transportRequestor'
import { IPromotionsDto, IPromotionsDetailDto, IPromoterFilterDto } from '../dtos/landing-page/IPromotionsDto'

export const getPromotions = async (
  langCode: string,
  type: string | number | null,
  page: number,
  pageSize: number,
): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/promotes-list?langcode=${langCode}&categorypromote=${type}&page=${page}&pagesize=${pageSize}`
  return getAsync<IPromotionsDto>(apiUrl)
}

export const getPromotionsDetail = async (langCode: string, promotionsId: number | string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/landingpage-promotion-detail?promotionId=${promotionsId}&langcode=${langCode}`
  return getAsync<IPromotionsDetailDto>(apiUrl)
}

export const getPromotionFilter = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/landingpage-promote-filter?langcode=${langCode}`
  return getAsync<IPromoterFilterDto>(apiUrl)
}
