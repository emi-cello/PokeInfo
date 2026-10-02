let shinyTrue = '0';


let pokemonName = '1';
function pokeRefresh() {
  console.log("Refreshing Pokemon to:", pokemonName)
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      document.getElementById("pokemon-name").textContent =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);

      document.getElementById("pokemon-front").src =
        data.sprites.versions["generation-v"]["black-white"].animated.front_default;

      document.getElementById("pokemon-back").src =
        data.sprites.versions["generation-v"]["black-white"].animated.back_default;
      
      document.getElementById("pokemon-Dex").innerHTML = data.id
      document.getElementById("stats-hp").innerHTML = data.stats["0"].base_stat
      document.getElementById("stats-atk").innerHTML = data.stats["1"].base_stat
      document.getElementById("stats-def").innerHTML = data.stats["2"].base_stat
      document.getElementById("stats-spa").innerHTML = data.stats["3"].base_stat
      document.getElementById("stats-spd").innerHTML = data.stats["4"].base_stat
      document.getElementById("stats-spe").innerHTML = data.stats["5"].base_stat
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
    if (shinyTrue == 1) {
      shinyTrue -= 1;
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("shiny").innerHTML = "Normal";
        document.getElementById("pokemon-front").src = data.sprites.versions["generation-v"]["black-white"].animated.front_shiny;
        document.getElementById("pokemon-back").src = data.sprites.versions["generation-v"]["black-white"].animated.back_shiny;
      });
    } else { if (shinyTrue == 0);
      shinyTrue += 1;

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("shiny").innerHTML = "Shiny";
        document.getElementById("pokemon-front").src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        document.getElementById("pokemon-back").src = data.sprites.versions["generation-v"]["black-white"].animated.back_default;
      });
  }
}

function pokeSearch() {
  const search = document.getElementById("search")
  pokemonName = search.value;
  console.log("Searching for: ", pokemonName);
  pokeRefresh();
}