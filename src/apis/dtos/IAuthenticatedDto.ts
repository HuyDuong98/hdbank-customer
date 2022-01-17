export interface IAuthenticatedDto {
  isFirstSignIn: boolean | null
  accessToken: string | null
  refreshToken: string | null
}
