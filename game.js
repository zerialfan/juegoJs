// Primero hay que llamar al canva y al contexto 
const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

// Creamos los manejadores de las funciones load y resize
window.addEventListener('load', handlerChanges)
window.addEventListener('resize',handlerChanges)

function handlerChanges() {
    startGame()
    reSize()
}
function reSize() {
    let canvasSize = window.innerWidth > window.innerHeight ?
    window.innerHeight * 0.7 : window.innerWidth * 0.9

    canvas.width = canvasSize
    canvas.height = canvasSize
}

function startGame() {
    let elementSize = reSize()
    ctx.font = 'px'
    ctx.fillText(emojis['X'],50,50)    
}