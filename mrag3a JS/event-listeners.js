
const form = document.querySelector('form')
const username = document.querySelector('input[name=username]')
const email = document.querySelector('input[name=email]')
const password = document.querySelector('input[name=password]')

form.addEventListener('submit' , (e) => {
e.preventDefault()
let nameValue = username.value
let emailValue = email.value
let pwValue = password.value

alert("Username: " + nameValue + "\nEmail: " + emailValue + "\nPassword: " + pwValue)

})
