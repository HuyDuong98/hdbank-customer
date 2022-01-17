import { requestAccessToken } from './accessTokenHandler'
// import { createHashHistory } from 'history'
import { pagePath } from '../constants/pagePath'
import { IOperationResult } from '../IOperationResult'

const handleResponse = async (response: Response, method: string) => {
  if (!response.ok) return handleErrorResponse(response, method)
  return handleSuccessResponse(response, method)
}

const handleSuccessResponse = async (response: Response, method: string) => {
  if (method === 'GET') return response.json()

  const data = await response.json()
  return {
    isSuccessful: true,
    responseCode: null,
    responseMessage: null,
    status: response.status,
    successData: data,
  }
}

const handleErrorResponse = async (response: Response, method: string) => {
  // const hashHistory = createHashHistory({ basename: '' })
  // const isUnauthorizedRequest = response.status === 401 || response.status === 403
  // if (isUnauthorizedRequest) hashHistory.push(pagePath.error401)

  // if (method !== 'GET') {
    const error = await response.json()
    return {
      isSuccessful: false,
      responseCode: error.responseCode,
      responseMessage: error.responseMessage,
      status: response.status,
      successData: null,
    }
  // }

  // switch (response.status) {
  //   case 500:
  //     hashHistory.push(pagePath.error500)
  //     break
  //   case 404:
  //     hashHistory.push(pagePath.error404)
  //     break
  //   case 400:
  //     hashHistory.push(pagePath.error400)
  //     break
  //   default:
  //     hashHistory.push(pagePath.error500)
  // }
}

const headersWithToken = (token: string | undefined): HeadersInit => {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
}

const getAsync = async <TResponse>(apiUrl: string): Promise<TResponse> => {
  const token = await requestAccessToken()
  const response = await fetch(apiUrl, {
    headers: headersWithToken(token),
  })

  return handleResponse(response, 'GET')
}

const postAsync = async <TRequest, TResponse>(apiUrl: string, data: TRequest): Promise<IOperationResult<TResponse>> => {
  return handleRequestAsync(apiUrl, data, 'POST')
}

const putAsync = async <TRequest, TResponse>(apiUrl: string, data: TRequest): Promise<IOperationResult<TResponse>> => {
  return handleRequestAsync(apiUrl, data, 'PUT')
}

const deleteAsync = async <TRequest, TResponse>(
  apiUrl: string,
  data: TRequest,
): Promise<IOperationResult<TResponse>> => {
  return handleRequestAsync(apiUrl, data, 'DELETE')
}

const handleRequestAsync = async <TRequest, TResponse>(
  apiUrl: string,
  data: TRequest,
  method: string,
): Promise<TResponse> => {
  const token = await requestAccessToken()
  const response = await fetch(apiUrl, {
    headers: headersWithToken(token),
    method: method,
    body: JSON.stringify(data),
  })

  return handleResponse(response, method)
}

export { getAsync, postAsync, putAsync, deleteAsync }
