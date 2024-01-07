const canvas = document.getElementById('game')
const cxt = canvas.getContext("2d")

// Le agrego un eventlistner a window load

window.addEventListener('load',startGame)

function startGame() {
    // cxt.fillRect(0,0,100,100)
    // cxt.clearRect()
    cxt.font='50px arial'
    // cxt.fillStyle = 'lime'
    // cxt.textAling = 'right'
    cxt.fillText('Zerialfan',50,50)
}