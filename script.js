/* const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')


console.log(input.value)
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerHTML = 'holaaa <br> feo' // cambia y hasta crea etiquetas
h1.innerText = 'holaaa <br> feo' // modifica solo texto
console.log(h1.getAttribute('class'))
h1.setAttribute('class', 'rojo')

h1.classList.add('rojo')
h1.classList.remove('verde')
h1.classList.toogle('verde')
h1.classList.contains('verde')

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/9e/81/50/9e81504951ec1656c57267b13adea764.png');

console.log(img)
pid.innerHTML = '';
pid.append(img); */

const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btn-calcular')
const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputValue)

function sumarInputValue (event){
    event.preventDefault(); // No recargue la pagina
    const sumaImput = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText = 'Resultado: '+ sumaImput;
}

