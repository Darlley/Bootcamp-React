import './style.css'

const app = document.querySelector('[data-js="app"]')
const link = document.querySelector('[data-js="link"]')
const button = document.querySelector('[data-js="button"]')

link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('clicou', event.target)
  alert('link')
}, false)

button.addEventListener('click', (event) => {
  event.preventDefault()
  event.stopPropagation()
  alert('button')
})
