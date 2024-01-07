# Anotaciones Videojuego 


### clase 1 

```html
    <canvas id= "game"></canvas>
```
Dentro del elemento canvas se va a anidar todo el codigo.

Es importante señalar que el orden de los botones es importante
    -Arriba
    -Izquierda
    -Derecha
    -Abajo
para evitar sobre todo hacer el movimiento del index en css y js

```html
<div clas="menssages">
<p> Parece que este es solo para hacer movimientos en el DOM </p></div>```

```html
    <script src="./maps.js">
    <script src="./game.js">
```
debe llevar ese orden para que quede más limpio. El curso pide que css no se vea en profundidad. entonces los elementos index.html y el css no se van a modificar
<!-- se importan las clases, contenedores y clases del html asi como los estilos de css de momento sin cambios -->
commit clase 1

### clase 2
### clase 2
> en game.js
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
recibe parametros argumentos,(1:"",2:x,3:y) es importante donde se asignan los valores x & y de fillText ya que los demas metodos del contexto lo toman como referencia
.font .fillStyle .textAling 
reciben valores como atributos y no como parametros 