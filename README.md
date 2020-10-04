# pokemon

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Frameworks utilizados:

---

### TailwindCss

El único framework que use fue tailwindcss, considero que es muy práctico porque permite adaptarse a cada situación, realmente llevo poco usándolo, pero para lo que he hecho me ha agradado mucho.

### Request

En un principio había pensado en integrar axios para manejar los request, sin embargo, como eran pocos, prefería hacer un wrapper con fetch que me permitiera simplificar las peticiones a la API. El wrapper que hice lo deje en `src/services/api.js` y los endpoint los defini en `src/services/pokemons.api.js`.

### Simulando un infinity Scroll

Para solucionar el problema de tener una gran cantidad de data, realice una función de infinity scroll para la lista de pokemons, cuando se llega al final del screen, esta va a agregar 20 pokemones mas a la lista, y así sucesivamente hasta agregarlos todos, no hago un request cada vez que se agregan a la lista, desde el principio me traigo todos los datos, en una variable almacenar los pokemones y en el otro voy agregando de a 20.

### Iconos

Para manipular los iconos cree un archivo svg donde se almacenan todos los que iba a usar en la aplicación y luego cree un componente donde se le pasaba el props name para cargar el icono.

### Rutas

Trabaje con 3 rutas nada más, la vista principal que es cuando ingresan a la página, la vista con la lista de pokemones y la vista detallada de un pokemon, esta última la implemente como un children de la ruta de pokemones al cual se le pasa el nombre (id) para que se asemeje a una api rest, quedando algo así `pokemons/pikachu`, gracias a esto se puede cargar directamente la información del pokémon por url.

---

**_Me divertí mucho con el proyecto de verdad, fue muy entretenido, agradable y dinámico, debido a su nivel de simplicidad, preferí no depender de muchas librerías y valerme de una lógica propia para no agregar un peso innecesario al proyecto._**
