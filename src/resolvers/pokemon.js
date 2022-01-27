const axios = require("axios");

const pokemon = async (parent, args, context, info) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${args.name}/`;

  const { data } = await axios.get(url);
  return {
    name: data.name,
    id: data.id,
    normalSprite: data.sprites.front_default,
    shinySprite: data.sprites.front_shiny,
    types: data.types,
    weight: data.weight,
    height: data.height,
  };
};

module.exports = pokemon;
