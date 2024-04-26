const socket = new Websocket('ws://localhost:3000')

function sendMassage(e) {
  e.preventDefault()
  const input = document.querySelector('input')
  if (input.value) {
    socket.send(input.value)
    input.value = ""

  }
  input.focus()


}

document.querySelector('form')

.addEventListener('submit', sentMassage)

//massge listerning
socket.addEventListener("massge",({ data }) => {
  const li = document.creatElement('li')
  li.textContent = data 
  document.querySelector('ul').appendChild(li)

})
