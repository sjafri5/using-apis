

main()

function main(){
  fetchUsers()
  createClickListener()
}

function fetchUsers(){
  fetch('http://localhost:3000/users?_embed=cryptos')
  .then(resp => resp.json())
  .then(users => {
    users.forEach(function(user){
      renderUser(user)
    })
  })
}


function createClickListener(){
  const userDiv = document.querySelector('#users-container')
  userDiv.addEventListener('click', function(e){
    if (e.target.className === 'stats'){
      fetchTickerData(e.target.dataset.ticker)
    }
  })
}

function fetchTickerData(cryptoName){

  const reqObj = {
    method: 'GET',
    headers: {
      "x-rapidapi-key": "zOHLK7im7emshfHCmXoAV8GPylXqp1nGtfwjsnHsJbEaLcwRyS",
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "useQueryString": true
    },
  }

  fetch(`https://coingecko.p.rapidapi.com/coins/${cryptoName.toLowerCase()}/tickers`, reqObj)
  .then(resp => resp.json())
  .then(data => {
    const tickerDiv = document.querySelector('#ticker-container')
    const header = document.createElement('h4')
    header.innerText = data.name

    const toUsd = data.tickers[0]

    const p = document.createElement('p')
    p.innerText = `price: ${toUsd.last}`
    tickerDiv.append(header, p)

  })


}

function renderUser(user){
  const userDiv = document.querySelector('#users-container')

  const card = document.createElement('div')
  card.className = 'card'
  card.setAttribute('data-id', user.id)

  const pTag = document.createElement('p')
  pTag.innerText = user.username
  
  const ul= document.createElement('ul')

  user.cryptos.forEach(function(crypto){
    const li= document.createElement('li')
    li.innerText = crypto.name

    const button= document.createElement('button')
    button.dataset.ticker= crypto.name
    button.className= 'stats'
    button.innerText = 'Show Stats'

    li.append(button)
    ul.append(li)

  })

  card.append(pTag, ul)
  userDiv.append(card)
}
