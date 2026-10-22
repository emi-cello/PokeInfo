let shinyTrue = '0';
const typeColors = {
    normal: "#a5acb0",
    grass: "#278027",
    fire: "#ff5722",
    water: "#2196f3",
    electric: "#ffc107",
    psychic: "#e91e63",
    bug: "#8bde37",
    flying: "#96c8dd",
    rock: "#9c9500",
    poison: "#994ba3",
    ground: "#a5a230",
    ice: "#5dc2eb",
    fighting: "#d46000",
    ghost: "#844aa7",
    dark: "#221e25",
    steel: "#9eb8b8",
    fairy: "#ffa5eb",
    dragon: "#eab155",
    none: "#ffffff"
};

const typeColorsBg = {
    normal: "#a5acb069",
    grass: "#1a581a69",
    fire: "#ff572269",
    water: "#2196f369",
    electric: "#ffc10769",
    psychic: "#e91e6369",
    bug: "#8bde3769",
    flying: "#96c8dd69",
    rock: "#9c950069",
    poison: "#994ba369",
    ground: "#a5a23069",
    ice: "#5dc2eb69",
    fighting: "#d4600069",
    ghost: "#844aa769",
    dark: "#221e2569",
    steel: "#9eb8b869",
    fairy: "#ffa5eb69",
    dragon: "#eab15569",
    none: "#ffffff69"
};

let pokemonName = '1';
function pokeRefresh() {
  console.log("Refreshing Pokemon to:", pokemonName)
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      document.getElementById("pokemon-name").textContent =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);

      document.getElementById("pokemon-type").innerHTML = data.types["0"].type.name;

      

      if (data.types.length > 1) {
        const type2 = data.types[1].type.name;

        document.getElementById("pokemon-type-secondary").innerHTML = type2;

        document.getElementById("pokemon-type-secondary").style.color =
          typeColors[type2] || "white";

        document.getElementById("pokemon-type-secondary").style.backgroundColor =
          typeColorsBg[type2] || "white";
      } else {
        document.getElementById("pokemon-type-secondary").innerHTML = "None";
        document.getElementById("pokemon-type-secondary").style.color = "#ffffff";
        document.getElementById("pokemon-type-secondary").style.backgroundColor = "#ffffff69";
}

      const type = data.types[0].type.name;

      document.getElementById("pokemon-type").style.color =
        typeColors[type] || "white";
      document.getElementById("pokemon-type").style.backgroundColor = 
        typeColorsBg[type] || "white";

      document.getElementById("pokemon-front").src =
        data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.sprites.front_default;

      document.getElementById("pokemon-back").src =
        data.sprites.versions["generation-v"]["black-white"].animated.back_default || data.sprites.back_default;
      
      document.getElementById("pokemon-Dex").innerHTML = data.id;
      document.getElementById("stats-hp").innerHTML = data.stats["0"].base_stat;
      document.getElementById("stats-atk").innerHTML = data.stats["1"].base_stat;
      document.getElementById("stats-def").innerHTML = data.stats["2"].base_stat;
      document.getElementById("stats-spa").innerHTML = data.stats["3"].base_stat;
      document.getElementById("stats-spd").innerHTML = data.stats["4"].base_stat;
      document.getElementById("stats-spe").innerHTML = data.stats["5"].base_stat;

      const hp = data.stats[0].base_stat;
      const atk = data.stats[1].base_stat;
      const def = data.stats[2].base_stat;
      const spa = data.stats[3].base_stat;
      const spd = data.stats[4].base_stat;
      const spe = data.stats[5].base_stat;

      document.getElementById("hp-bar").style.width = `${hp / 255 * 100}%`;
      document.getElementById("atk-bar").style.width = `${atk / 255 * 100}%`;
      document.getElementById("def-bar").style.width = `${def / 255 * 100}%`;
      document.getElementById("spa-bar").style.width = `${spa / 255 * 100}%`;
      document.getElementById("spd-bar").style.width = `${spd / 255 * 100}%`;
      document.getElementById("spe-bar").style.width = `${spe / 255 * 100}%`;

      if (pokemonName == "minior-red-meteor") {
        document.getElementById("pokemon-name").innerHTML = "Minior Meteor Form";
      }
      if (pokemonName == "minior-red") {
        document.getElementById("pokemon-name").innerHTML = "Minior Red Form";
      }
      if (pokemonName == "minior-orange") {
        document.getElementById("pokemon-name").innerHTML = "Minior Orange Form";
      }
      if (pokemonName == "minior-yellow") {
        document.getElementById("pokemon-name").innerHTML = "Minior Yellow Form";
      }
      if (pokemonName == "minior-green") {
        document.getElementById("pokemon-name").innerHTML = "Minior Green Form";
      }
      if (pokemonName == "minior-blue") {
        document.getElementById("pokemon-name").innerHTML = "Minior Blue Form";
      }
      if (pokemonName == "minior-indigo") {
        document.getElementById("pokemon-name").innerHTML = "Minior Indigo Form";
      }
      if (pokemonName == "minior-violet") {
        document.getElementById("pokemon-name").innerHTML = "Minior Violet Form";
      }
    })
    .catch(error => console.error("Error fetching data:", error));
}
pokeRefresh()

function toggleMenu() {
  const menu = document.getElementById("menu");
  const btn = document.getElementById("nav-menu");
  
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    btn.innerHTML = "+";
    btn.style.transform = "rotate(45deg)";
  } else {
    btn.innerHTML = "-";
    btn.style.transform = "rotate(0deg)";
  }
}

function toggleShiny() {
    if (shinyTrue == 0) {
      shinyTrue += 1;
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("shiny").innerHTML = "Normal";
        document.getElementById("pokemon-front").src = data.sprites.versions["generation-v"]["black-white"].animated.front_shiny || data.sprites.versions["generation-v"]["black-white"].front_shiny;
        document.getElementById("pokemon-back").src = data.sprites.versions["generation-v"]["black-white"].animated.back_shiny || data.sprites.versions["generation-v"]["black-white"].back_shiny;
      });
    } else { if (shinyTrue == 1);
      shinyTrue -= 1;

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("shiny").innerHTML = "Shiny";
        document.getElementById("pokemon-front").src = data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.sprites.versions["generation-v"]["black-white"].front_default;
        document.getElementById("pokemon-back").src = data.sprites.versions["generation-v"]["black-white"].animated.back_default || data.sprites.versions["generation-v"]["black-white"].back_default;
      });
  }
}

function pokeSearch() {
  const search = document.getElementById("search")
  pokemonName = search.value;
  if (pokemonName == 'minior') {
        pokemonName = 'minior-red-meteor'
        document.getElementById("form").style.display = "flex";
  } else {
    if (pokemonName == '774') {
      pokemonName = 'minior-red-meteor'
      document.getElementById("form").style.display = "flex";
    } else {
      if (pokemonName == 'deoxys') {
        pokemonName = 'deoxys-normal'
        document.getElementById("form").style.display = "flex";
      } else {
        document.getElementById("form").style.display = "none";
      }
    }
  }
  console.log("Searching for: ", pokemonName);
  pokeRefresh();
}

document.getElementById("search").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        pokeSearch();
    }
});

function changeForm() {

  if (pokemonName == 'minior-red-meteor') {
    pokemonName = "minior-red"
  } else {
    if (pokemonName == 'minior-red') {
      pokemonName = "minior-orange"
    } else {
      if (pokemonName == 'minior-orange') {
        pokemonName = "minior-yellow"
      } else {
        if (pokemonName == 'minior-yellow') {
          pokemonName = "minior-green"
        } else {
          if (pokemonName == 'minior-green') {
            pokemonName = "minior-blue"
          } else {
            if (pokemonName == 'minior-blue') {
              pokemonName = "minior-indigo"
            } else {
              if (pokemonName == 'minior-indigo') {
                pokemonName = "minior-violet"
              } else {
                if (pokemonName == 'minior-violet') {
                  pokemonName = "minior-red-meteor"
                } else {
                  if (pokemonName == 'deoxys-normal') {
                    pokemonName = "deoxys-attack"
                  } else {
                    if (pokemonName == 'deoxys-attack') {
                      pokemonName = "deoxys-defense"
                    } else {
                      if (pokemonName == 'deoxys-defense') {
                        pokemonName = "deoxys-speed"
                      } else {
                        if (pokemonName == 'deoxys-speed') {
                          pokemonName = "deoxys-normal"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  pokeRefresh()
}