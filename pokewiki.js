document.getElementById("buscar").addEventListener("click", function () {
  const numero = document.getElementById("numero").value;
  const pokemonCard = document.getElementById("pokemon-card");

  fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      return response.json();
    })
    .then((data) => {
      pokemonCard.innerHTML = `
                <h2>${
                  data.name.charAt(0).toUpperCase() + data.name.slice(1)
                }</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
                <p>Tipos: ${data.types
                  .map((type) => type.type.name)
                  .join(", ")}</p>
            `;
      pokemonCard.style.display = "block";
    })
    .catch((error) => {
      pokemonCard.innerHTML = `<p>${error.message}</p>`;
      pokemonCard.style.display = "block";
    });
});
