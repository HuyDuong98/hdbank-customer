/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment'

export const convertUtcToLocal = (dateInput?: Date): Date | undefined => {
  if (dateInput) {
    const utcDate = new Date(dateInput)
    const localDate = new Date(
      Date.UTC(utcDate.getFullYear(), utcDate.getMonth(), utcDate.getDate(), utcDate.getHours(), utcDate.getMinutes()),
    )
    return localDate
  }
  return undefined
}

export const dateToString = (format: string, dateInput?: Date): string => {
  if (dateInput) {
    const localDate = convertUtcToLocal(dateInput)
    return moment(localDate).format(format)
  }
  return ''
}

export const getLocalTimezone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

export const isNumeric = (str = ''): boolean => {
  return /^[0-9]+$/.test(String(str))
}

export const replaceStringAt = (str: string, index: number, replaceStr: string) => {
  if (index > str.length - 1) return str
  return str.substring(0, index) + replaceStr + str.substring(index + replaceStr.length)
}

export const formatCurrency = (number: number) => {
  return Intl.NumberFormat('it-IT').format(number) + ' VNĐ'
}

export const convertUrltoSlug = (str: string) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase()
  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a')
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e')
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i')
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o')
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u')
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y')
  str = str.replace(/(đ)/g, 'd')

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '')

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-')

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '')

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '')

  // return
  return str
}

//Chuyển chuỗi sang in hoa và xóa dấu tiếng Việt
export const convertValueSearch = (data) => {
  return data
    ?.toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/Đ/g, 'D')
}

const formatDate = (date) => {
  const d = new Date(date),
    year = d.getFullYear()
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [day, month, year].join('/')
}
