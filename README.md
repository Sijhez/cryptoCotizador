# Proyecto: Cotizador de monedas en React:
- Instalar vite:
```bash
npm init vite@latest
```
- Nombrar el proyecto
- Seleccionar framework react
- Instalar dependencias npm:

```bash
npm install
```
- Instaladas las dependencias corremos server
```bash
npm run dev
```

# Comenzando:
 ## Usando Style components
 En JSX podemos usar HTML con expresiones en Javascript, pero también es posible crear un elemento HTML con la sintáxis de un componente y añadir propiedades CSS.
 Así en lugar de una hoja de estilos o librería externa, se escribe el CSS en cada componente (css en JS)

 * Ventajas:
  - Al dejar de usar un componente, se puede eliminar su codigo CSS también, a diferencia de una hoja de estilos global.
  - Ventajas de reutilizar el codigo CSS

Para usar Style components debemos instalar emotion React y emotion Style:

```bash
npm install @emotion/react @emotion/styled
```
### Sintáxis:

```javascript
const Heading = styled.h1 //generación de etiqueta h1 en HTML
`font-size:2em;
 text-transform:uppercase;
`//incluímos todos los estilos entre commillas inversas
<Heading>Nuestro Producto</Heading>
```

# Creando mis hooks
Una de las ventajas de crear Hooks propios es la de poder reutilizar una función. Así mismo se permiten incorporar State y mantener el valor de una misma función de forma persistente.

- Permite el uso de state, effects y otros hooks
- Re-utilizacion de funciones a lo largo del sitio

En este proyecto estamos utilizando un hook personalizado llamado useSelectMonedas en el archivo `useSelectMonedas.jsx`:

```javascript
const myHookPersonalizado = (variable) =>{
    
    const TransformaVariable = () => (
      console.log('la variable es:',variable)
    )
    return [transformaVariable]

}
export default myHookPersonalizado
```
Para usar el hook lo importamos y usamos como normalmente se hace:

```javascript
import myHookPersonalizado from '../hooks/myHookPersonalizado'
//usar dentro de un component
const [TransformaVariable] = myHookPersonalizado('hola mundo')
//imprime 'hola mundo'
```

# Usando API's
## Qué es una api?
API = Application programming interface.

Son funciones o metodos que ofrece una librería para ser usada por otro software como una capa de abstraccion.
Pone a disposición recursos alojados en otro server o base de datos externa.
Se debe enviar una petición estructurada para recibir respuesta.

La API puede ser creada en cualquier lenguaje o framework:
Python, Java, Net Core, Express, Node.js, Laravel o PHP.
Para ello deberá entregar una respuesta tipo JSON.

### Usando API externa:
- Extraer url para generar fetch.
- Ejecutar async y await para recibir y procesar respuesta
- Procesamos respuesta mediante el uso de json

```javascript
const consultarApi= async ()=>{
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
  const respuesta = await fetch(url) //await: espera a consultar la url
  const resultado = await respuesta.json() //await: espera a recibir una respuesta y transformarla en JSON
}     
consultarApi()
```


