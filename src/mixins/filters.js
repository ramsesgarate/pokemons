const formatCapitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

export default {
  filters: {
    capitalize(string) {
      if (string) {
        if (typeof string === 'object') {
          return string.map(data => formatCapitalize(data))
        }
        return formatCapitalize(string)
      }
    },
    join(array) {
      return array.join(', ')
    }
  }
}
