const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d")
const handUp = document.getElementById('up')
const handRight = document.getElementById('right')
const handDown = document.getElementById('down')
const handLeft = document.getElementById('left')

let elementSize
let canvasSize

const setPosition ={
    x: undefined,
    y: undefined,
}

handUp.addEventListener('click',moveUp)
handRight.addEventListener('click',moveRight)
handDown.addEventListener('click',moveDown)
handLeft.addEventListener('click',moveLeft)
// los botones ejecutalbles 'keydowns'
const up = document.getElementById('up')
const down = document.getElementById('down')
const right = document.getElementById('right')
const left = document.getElementById('left')


// Le agrego un eventlistner a window load
window.addEventListener('resize',handleResize)
window.addEventListener('load',handleResize)

function handleResize() {
    reSize()
    startGame()
}

function reSize() {
    const isVertical =window.innerHeight > window.innerWidth  
    let newSize= isVertical ? window.Math.ceil(innerWidth * 0.9) : Math.floor(window.innerHeight*0.7)
    canvasSize = canvas.width = canvas.height = newSize
    return canvasSize
}

function startGame() {
    const canvasSize = reSize()
    ctx.clearRect(0,0,canvasSize,canvasSize)
    elementSize = Math.floor((canvasSize /10)) 
    
    const diseñoMapa = maps[0]
    const position = diseñoMapa.trim().split('\n').map(row=> row.trim().split(''))
    ctx.font = elementSize + 'px Arial'
    ctx.textAlign = 'right'
    
// Aqui se refactoriza el ciclo for para implementar un forEach que sea más sencillo de leer
position.forEach((row , rowIndex) => {
    row.forEach((col,colIndex) => {
        let y = elementSize * (rowIndex+1)
        let x = elementSize * (colIndex+1) 
        const render = emojis[col]
        if (col == 'O') {
            if (!setPosition.x && !setPosition.y) {
                setPosition.x = x
                setPosition.y = y
                console.log({setPosition});
            }
        }
        ctx.fillText(render,x,y)
    });
});
movePlayer()
}
function movePlayer() {
    ctx.fillText(emojis['PLAYER'],setPosition.x,setPosition.y)
}

function moveUp() {
    setPosition.y -= elementSize
    startGame()
}
function moveDown() {
    setPosition.y += elementSize
    startGame()
}
function moveLeft() {
    setPosition.x -= elementSize
    startGame()
}
function moveRight() {
    setPosition.x += elementSize
    startGame()
}