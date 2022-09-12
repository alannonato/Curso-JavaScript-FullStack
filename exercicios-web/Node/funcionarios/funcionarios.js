const url = 'https://totvssuporte.zendesk.com/api/v2/tickets/"tickets'
const axios = require('axios')

axios.get(url).then((response) => {
  const tickets = response.data
  console.log(JSON.parse(tickets))
})
