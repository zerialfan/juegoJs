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

## Clase 6
Aqui utiliza .addEventListener para todos los eventos "click" y cada uno de ellos ejecuta una función luego utiliza una especie de manejador desde el "window"
```javascript 
    window.addEventListener('keydown' manejador)
```
esta funcion manejadora puede recibir un parametro al que llamó "event" luego cuando imprime en la consola lo que esta propiedad ejecuta se puede ver que la propiedad "key" identifica la letra que se esta seleccionando y luego mediante un condicional ya se a switch o if hace que el `event.key =='ArrowUp'` por ejemplo lo que evita que otras teclas ejecuten cualquier funcion. Para la practica usaré el switch y luego en la repractica usare el condicional con operadores ternarios

## clase 9 

primero se ha creado una funcion para detectar la posicion del jugador la llamó __playerPositon__ la cual es un objeto con 2 valores x & y, pero de momento los deja en estado de undefined,
    x:undefined,
    y:undefined,
porque lo que queremos es que hasta el renderizado del mapa es cuando este cambia.

!importante en la funcion startGame hace un if preguntando si col== 'O' es decir si en el parametro col del `.forEach(col,colIndex)` existe. luego mediante un log manda a llamar a la posX y posY (en mi caso es x & y por lo que hay que cambiarle los nombres a las variables) -> estos se deben anidar en un objeto
Luego para asignarle valores a `playerPosition` dentro del `if(col =='o'){playerPosition.x = x ...}`
lo que ocurre es que con el punto se llama a la llave del objeto y luego se le reasigna el valor de la variable X.

si quisiera visualizar lo que ocurre basta con `console.log({playerPosition})` para que muestre los valores de esto
para renderizar la calaverita vuelve a usar el .fillText y manda a llamar a la llave del objeto emojis luego le asigna las posiciones x y y.
que ya se encuentran definidas en la parte de arriba `playerposition.x,playerPositionX` como parte de los argumentos de __fillText(emojis['key'],px,py)__

## clase 10
Luego de que fuenciona el movimiento debe hacerse una logica para borrar el elemento anterior cada que se haga un movimiento en la posicion.

Tipo que la logica que se puede escribir es que borre la posicion en la que se encontró por ultima vez y tome esa posicion como la nueva POSICION INICIAL.
No entendi un carajo pero lo que hizo fue crear un doble condicional para pregutnar si existe la 'O' y luego si playerPosition.x && playerPosition.y NO estan definidos se ejecute el nuevo renderizado.