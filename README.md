# Pokemon Api

This is an API-Like-Thingy of pokemon because I need to do one on my own 

## What can I do with this?

* Get pokemon name
* Get pokemon basic info
* Get the level of all attack can pokemon learn
* Get the localization or where you can capture the pokemon
* Get all the evolutions and if need some Stone or something special 

## Endpoints

```` /api/v1/pokemon/:pokemonName ````

Example of usage

```` /api/v1/pokemon/pikachu ```` returns this:

````json
{
  "name": "Pikachu",
  "image": "https://vignette.wikia.nocookie.net/es.pokemon/images/7/72/Pikachu_XY.gif/revision/latest?cb=20140805142147",
  "info": "Su nombre proviene de la unión de las palabras en japonés pika, que es el nombre de un lagomorfo (el orden al que pertenecen conejos y liebres) de origen en Norteamérica y Asia, los ochotónidos o de pikapika, la onomatopeya japonesa que describe las chispas eléctricas, y chuchu, onomatopeya japonesa del sonido producido por un un ratón, para darle un sonido tierno. ",
  "evolutions": [
    {
      "evoImg": "https://vignette.wikia.nocookie.net/es.pokemon/images/9/9d/Pichu.png/revision/latest/scale-to-width-down/65?cb=20150620210539",
      "evoName": "Pichu"
    },
    {
      "evoImg": "https://vignette.wikia.nocookie.net/es.pokemon/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/90?cb=20150621181250",
      "evoName": "Pikachu"
    },
    {
      "evoImg": "https://vignette.wikia.nocookie.net/es.pokemon/images/4/4e/Piedra_trueno.png/revision/latest?cb=20090519182131",
      "evoName": "Piedra trueno"
    },
    {
      "evoImg": "https://vignette.wikia.nocookie.net/es.pokemon/images/3/34/Raichu.png/revision/latest/scale-to-width-down/130?cb=20160815220038",
      "evoName": "Raichu"
    },
    {
      "evoImg": "https://vignette.wikia.nocookie.net/es.pokemon/images/4/4e/Piedra_trueno.png/revision/latest?cb=20090519182131",
      "evoName": "Piedra trueno"
    },
    {
      "evoImg": "https://vignette.wikia.nocookie.net/es.pokemon/images/6/66/Raichu_de_Alola.png/revision/latest/scale-to-width-down/120?cb=20160816232213",
      "evoName": "Raichu de Alola"
    }
  ],
  "localization": [
    {
      "places": " Salvaje: Bosque Verde y Central Energía.",
      "edition": " Azul"
    },
    {
      "places": " Salvaje: Ruta 2.",
      "edition": " Oro"
    },
    {
      "places": " Salvaje: Ruta 2.",
      "edition": " Plata"
    },
    {
      "places": " Salvaje, mañana y día: Ruta 2.Especial: Casino de Ciudad Azulona por 2222 fichas.",
      "edition": " Cristal"
    },
    {
      "places": " Salvaje: Zona Safari (entrada y zona oeste). Evento: es uno de los 10 Pokémon que se repartió en Moviplaya 2006, a nivel 70.",
      "edition": " Rubí"
    },
    {
      "places": " Salvaje: Zona Safari (entrada y zona oeste). Evento: es uno de los 10 Pokémon que se repartió en Moviplaya 2006, a nivel 70.",
      "edition": " Zafiro"
    },
    {
      "places": " Salvaje: Zona Safari (entrada y zona oeste). Evento: es uno de los 10 Pokémon que se repartió en Moviplaya 2006, a nivel 70.",
      "edition": " Esmeralda"
    },
    {
      "places": " Salvaje: Bosque Verde y Central Energía. Evento: es uno de los 10 Pokémon que se repartieron en Moviplaya 2006, a nivel 70.",
      "edition": " Rojo Fuego"
    },
    {
      "places": " Salvaje: Bosque Verde y Central Energía. Evento: es uno de los 10 Pokémon que se repartieron en Moviplaya 2006, a nivel 70.",
      "edition": " Verde Hoja"
    },
    {
      "places": " Salvaje: Jardín Trofeo.Evolucionar: a Pichu (amistad + nivel).Parque Compi: Zona boscosa.",
      "edition": " Diamante"
    },
    {
      "places": " Salvaje: Jardín Trofeo.Evolucionar: a Pichu (amistad + nivel).Parque Compi: Zona boscosa.",
      "edition": " Perla"
    },
    {
      "places": " Salvaje: Jardín Trofeo.Evolucionar: a Pichu (amistad + nivel).Parque Compi: Zona boscosa.",
      "edition": " Platino"
    },
    {
      "places": " Salvaje: Bosque Verde. Intercambiar: por otro Pikachu con el líder de gimnasio Lt. Surge en Ciudad Azafrán después de vencerlo en la revancha.Parque Compi: Zona boscosa.Pokéwalker: Zona Vacacional, Bosque Amarillo, De Turismo y Acontecimiento.",
      "edition": " Oro HeartGold"
    },
    {
      "places": " Salvaje: Bosque Verde. Intercambiar: por otro Pikachu con el líder de gimnasio Lt. Surge en Ciudad Azafrán después de vencerlo en la revancha.Parque Compi: Zona boscosa.Pokéwalker: Zona Vacacional, Bosque Amarillo, De Turismo y Acontecimiento.",
      "edition": " Plata SoulSilver"
    },
    {
      "places": " Pokétransfer: Transferir desde Pokémon Diamante, Perla, Platino, Oro HeartGold o Plata SoulSilver.",
      "edition": " Negro"
    },
    {
      "places": " Pokemon Global Link: Mediante evento.Pokétransfer: Transferir desde Pokémon Diamante, Perla, Platino, Oro HeartGold o Plata SoulSilver.",
      "edition": " Negro 2"
    },
    {
      "places": " > Lista",
      "edition": " Ranger"
    },
    {
      "places": " > Lista",
      "edition": " Ranger: Sombras de Almia"
    },
    {
      "places": " > Lista",
      "edition": " Ranger: Trazos de luz"
    }
  ],
  "attack": [
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "1",
      "Pokemon_ROZA": "1",
      "generacion_8": "1",
      "attack": "Látigo"
    },
    {
      "rojo_fuego": "1",
      "pokemon_amarillo": "1",
      "generacion_2": "1",
      "generacion_3": "1",
      "generacion_4": "1",
      "generacion_5": "1",
      "pokemon_XY": "1",
      "Pokemon_ROZA": "1",
      "generacion_8": "1",
      "attack": "Impactrueno"
    },
    {
      "rojo_fuego": "1",
      "pokemon_amarillo": "1",
      "generacion_2": "1",
      "generacion_3": "1",
      "generacion_4": "1",
      "generacion_5": "1",
      "pokemon_XY": "5",
      "Pokemon_ROZA": "5",
      "generacion_8": "5",
      "attack": "Gruñido"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "6",
      "generacion_2": "6",
      "generacion_3": "6",
      "generacion_4": "5",
      "generacion_5": "5",
      "pokemon_XY": "",
      "Pokemon_ROZA": "",
      "generacion_8": "",
      "attack": "Látigo"
    },
    {
      "rojo_fuego": "9",
      "pokemon_amarillo": "8",
      "generacion_2": "8",
      "generacion_3": "8",
      "generacion_4": "10",
      "generacion_5": "10",
      "pokemon_XY": "",
      "Pokemon_ROZA": "",
      "generacion_8": "",
      "attack": "Onda trueno"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "7",
      "Pokemon_ROZA": "7",
      "generacion_8": "7",
      "attack": "Camaradería"
    },
    {
      "rojo_fuego": "16",
      "pokemon_amarillo": "11",
      "generacion_2": "11",
      "generacion_3": "11",
      "generacion_4": "13",
      "generacion_5": "13",
      "pokemon_XY": "10",
      "Pokemon_ROZA": "10",
      "generacion_8": "10",
      "attack": "Ataque rápido"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "13",
      "Pokemon_ROZA": "",
      "generacion_8": "",
      "attack": "Onda trueno"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "18",
      "pokemon_XY": "18",
      "Pokemon_ROZA": "13",
      "generacion_8": "13",
      "attack": "Bola voltio"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "",
      "Pokemon_ROZA": "18",
      "generacion_8": "18",
      "attack": "Onda trueno"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "",
      "Pokemon_ROZA": "21",
      "generacion_8": "21",
      "attack": "Amago"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "15",
      "generacion_2": "15",
      "generacion_3": "15",
      "generacion_4": "18",
      "generacion_5": "21",
      "pokemon_XY": "21",
      "Pokemon_ROZA": "23",
      "generacion_8": "23",
      "attack": "Doble equipo"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "",
      "Pokemon_ROZA": "26",
      "generacion_8": "26",
      "attack": "Chispa"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "23",
      "Pokemon_ROZA": "29",
      "generacion_8": "29",
      "attack": "Moflete estático"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "",
      "Pokemon_ROZA": "34",
      "generacion_8": "34",
      "attack": "Chispazo"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "20",
      "generacion_2": "20",
      "generacion_3": "20",
      "generacion_4": "21",
      "generacion_5": "26",
      "pokemon_XY": "26",
      "Pokemon_ROZA": "37",
      "generacion_8": "37",
      "attack": "Atizar"
    },
    {
      "rojo_fuego": "26",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "",
      "Pokemon_ROZA": "",
      "generacion_8": "",
      "attack": "Rapidez"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "26",
      "generacion_2": "26",
      "generacion_3": "26",
      "generacion_4": "26",
      "generacion_5": "29",
      "pokemon_XY": "29",
      "Pokemon_ROZA": "42",
      "generacion_8": "42",
      "attack": "Rayo"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "29",
      "generacion_5": "34",
      "pokemon_XY": "34",
      "Pokemon_ROZA": "",
      "generacion_8": "",
      "attack": "Amago"
    },
    {
      "rojo_fuego": "33",
      "pokemon_amarillo": "33",
      "generacion_2": "33",
      "generacion_3": "33",
      "generacion_4": "34",
      "generacion_5": "37",
      "pokemon_XY": "37",
      "Pokemon_ROZA": "45",
      "generacion_8": "45",
      "attack": "Agilidad"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "37",
      "generacion_5": "42",
      "pokemon_XY": "42",
      "Pokemon_ROZA": "",
      "generacion_8": "",
      "attack": "Chispazo"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "",
      "Pokemon_ROZA": "50",
      "generacion_8": "50",
      "attack": "Voltio cruel"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "",
      "generacion_2": "",
      "generacion_3": "",
      "generacion_4": "42",
      "generacion_5": "45",
      "pokemon_XY": "45",
      "Pokemon_ROZA": "53",
      "generacion_8": "53",
      "attack": "Pantalla de luz"
    },
    {
      "rojo_fuego": "43",
      "pokemon_amarillo": "41",
      "generacion_2": "41",
      "generacion_3": "41",
      "generacion_4": "45",
      "generacion_5": "50",
      "pokemon_XY": "50",
      "Pokemon_ROZA": "58",
      "generacion_8": "58",
      "attack": "Trueno"
    },
    {
      "rojo_fuego": "",
      "pokemon_amarillo": "50",
      "generacion_2": "50",
      "generacion_3": "50",
      "generacion_4": "",
      "generacion_5": "",
      "pokemon_XY": "",
      "Pokemon_ROZA": "",
      "generacion_8": "",
      "attack": "Pantalla de luz"
    }
  ]
}
````

## Estructure

````
{
	name: String,
	image: String,
	info: String,
	evolutions: Array with nested Object,
	localization: Array with nested Object,
	attack: Array with nested Object
}

````

# Ok, but how can I use it?

Pretty simple, follow this steps:

1. Run the following command: ```` git clone https://github.com/0c0de/pokemon-api-v1 && cd pokemon-api-v1 ````

2. Now run ```` npm install ````

3. Profit!


# Notes

* API is in spanish because I'm from spain maybe in a future I'll make it for english people
* Only for NodeJS, I think 
