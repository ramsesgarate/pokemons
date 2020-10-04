function api(endpoint) {
  const config = {
    method: 'GET'
  }

  return window
    .fetch(`https://pokeapi.co/api/v2/${endpoint}`, config)
    .then(async response => {
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}

export { api }
