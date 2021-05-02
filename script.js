var main = document.getElementById('main')
var cards = 150;
var colors = {
    water : '#DEF3FD',
    fighting: '#E6E0D4',
    fire: '#FDDFDF',
    poison: '#98D7A5',
    flying: '#F5F5F5',
    ground: "#F4E7DA",
    bug: '#F8D5A3',
    grass: '#DEFDE0',
    fairy: '#D7D7B1',
    normal: '#F5F5F5',
    psychic: "#EAEDA1",
    electric: "#DEF3FD",   
    dragon: "#97B3E6",
    rock: 'd5d5d4'
}

async function getUrls(cards) {
    var data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cards}&offset=0`);
    var res = await data.json();
    for(var i = 0; i < cards; i++) {
        getPokemon(res.results[i].url)
    }
    
}
getUrls(cards)

async function getPokemon(url) {
    var res = await fetch(url);
    var data = await res.json();
    console.log(data.types[0].type.name)
    var card = document.createElement('div');
    var id = data.id.toString().padStart(3, '0');
    card.innerHTML = 
    `<div class='img-container'>
        <img src='${data.sprites.other['official-artwork'].front_default}'>
    </div>

    <p class='id'">#${id}</p>
    <h2 >${data.name}</h2>
    <div class='type'>${data.types[0].type.name}</div>`
    card.classList.add('card');
    card.style.backgroundColor = colors[`${data.types[0].type.name}`]
    main.appendChild(card);
}
