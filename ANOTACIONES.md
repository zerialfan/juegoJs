# Anotaciones Videojuego 
### clase 2
primero traer el canvas con document.getelement
luego crearle el ctx "Context"

a la variable game o ctx se le pueden pasar varios metodos del canvas.

luego se crea una funcion para el inicio del juego "startGame" donde *`window`*.addEventListener('load' startGame);
este de load es para que lo cargue y podamos esperar a que comience hasta que se haya cargado el HTML.

`.fillRect(x,y,width,height)`
el metodo fillRect puede recibir 4 argumentos o 7 o 9 

`.clearRect()`
borra las posiciones del canva .clearRect(x:number, y:number, w:number, h:number) habra que revisar más argumentos

`.fillText()`
recibe parametros argumentos,(1:"",2:x,3:y)
ctx.font y .fillStyle reciben valores como atributos y no como parametros 
