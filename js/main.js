const lamp = document.getElementById('lampada')
const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')

function estaQuebrada() {
    return lamp.src.indexOf('quebrada.svg') > 1 
}

ligar.addEventListener('click', () => {
    if (!estaQuebrada()) {
        lamp.src = '../assets/ligada.svg'
    }
})

desligar.addEventListener('click', () => {
    if (!estaQuebrada()) {
        lamp.src = '../assets/desligada.svg'
    }
})

lamp.addEventListener('click', () => {
    lamp.src = '../assets/quebrada.svg'
})