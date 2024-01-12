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
    
    const elementSize = Math.floor(canvasSize /10) 
    const spacing = Math.floor(elementSize*.1) 
    for (let i = 1;  i< 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = j*elementSize -spacing
            let y = i* elementSize+ i*spacing
            cxt.font = elementSize+'px Arial'
            cxt.fillText(emojis['X'],x,y)
        }
    }
    console.log({ canvasSize, elementSize }) 
}