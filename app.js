const body = document.body
const gridCon = document.querySelector(".grid-container")
const modal = document.querySelector(".modal")
const bodyAfter = window.getComputedStyle(body, ":after")
const pokemons = [
    {
        id: 1,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        name: "bulbasaur",
        ability: ["grass", "poision"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 2,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        name: "ivysaur",
        ability: ["grass", "poision"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 3,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        name: "charmander",
        ability: ["fire"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 4,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
        name: "charmeleon",
        ability: ["fire"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 5,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
        name: "charizard",
        ability: ["fire", "flying"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 6,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
        name: "wartortle",
        ability: ["water"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    }
]


for (let pokemon of pokemons) {
    const pokedon = document.createElement("div")
    gridCon.appendChild(pokedon)
    pokedon.classList.add("pokemon")
    const pokName = document.createElement("h2")
    pokName.innerText = pokemon.name
    const pokImg = document.createElement("img")
    pokImg.src = pokemon.img
    pokedon.append(pokName, pokImg)

    pokedon.addEventListener("click", ()=> {
        body.classList.add("bAfter")
        modal.classList.add("show")
        const modalDiv = document.createElement("div")
        modalDiv.classList.add("modalDiv")
        modal.appendChild(modalDiv)
        const modalName = document.createElement("h2")
        modalName.innerText = pokName.innerText
        const modalImg = document.createElement("img")
        modalImg.src = pokImg.src
        const stats = document.createElement("h3")
        stats.innerText = "Statistics :"
        const preText = document.createElement("pre")
        preText.innerText = "Press 'esc' to Exit"
        
        modal.appendChild(preText)
        modalDiv.appendChild(modalName)
        modalDiv.appendChild(modalImg)
        modalDiv.appendChild(stats)
        for(let character in pokemon.stats) {
            const statis = document.createElement("p")
            statis.innerText = `${character}: ${pokemon.stats[character]}`
            modalDiv.appendChild(statis)
        }
    })

    

    function close() {
        modal.classList.remove("show")
        body.classList.remove("bAfter")
        const removeModalDiv = document.querySelector(".modalDiv")
        modal.removeChild(removeModalDiv)
    }

    document.addEventListener("keydown", (event)=> {
        if(event.key = "Escape") close()
    })

    

}