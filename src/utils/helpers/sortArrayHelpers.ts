type SortType = 'asc' | 'desc'

export const sortArray = (array: any[], sortField: string, sortType: SortType): any[] => {
  if (sortField && sortType) {
    array.sort(compareValues(sortField, sortType))
  }
  return array
}

const compareValues = (key: string, order: SortType): ((a: any, b: any) => number) | undefined => {
  return (a, b): number => {
    // eslint-disable-next-line no-prototype-builtins
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (!varA) comparison = -1
    else if (!varB) comparison = 1
    else if (varA > varB) comparison = 1
    else if (varA < varB) comparison = -1
    return order === 'desc' ? comparison * -1 : comparison
  }
}
