const canvas = document.getElementById('game')
const cxt = canvas.getContext("2d")

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
    let canvasSize = canvas.width = canvas.height = newSize
    return canvasSize
}
function startGame() {
    const canvasSize = reSize()
    
    const elementSize = Math.floor((canvasSize /10)) 
    
    const diseñoMapa = maps[0]
    const position = diseñoMapa.trim().split('\n').map(row=> row.trim().split(''))

    for (let row = 1;  row<= 10; row++) {
        for (let col = 0; col < 10; col++) {
            let x = col*elementSize 
            let y = row* elementSize
            cxt.font = elementSize + 'px Arial'
            cxt.fillText(emojis[position[row-1][col]],x,y)
        }
    }
}
