const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d")
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
    let canvasSize = canvas.width = canvas.height = newSize
    return canvasSize
}
function startGame() {
    const canvasSize = reSize()
    
    const elementSize = Math.floor((canvasSize /10)) 
    
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
        ctx.fillText(render,x,y)
    });
    
});
    // for (let row = 1;  row<= 10; row++) {
    //     for (let col = 0; col < 10; col++) {
    //         let x = col*elementSize 
    //         let y = row* elementSize
    //         ctx.fillText(emojis[position[row-1][col]],x,y)
    //     }
    // }
}
