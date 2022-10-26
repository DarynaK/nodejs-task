const form = document.querySelector('form')
const input = document.querySelector('input')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch('https://swapi.dev/api/' + input.value).then((response) => {
    response.json().then(data => {
        // console.log(data)
    }).catch(error => console.log(error))
}).catch(error => console.log(error))
})