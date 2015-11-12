window.ApiActions = {

 receiveAllPokemons: function (pokemons) {
  AppDispatcher.dispatch({
    actionType: PokemonConstants.POKEMONS_RECEIVED,
    pokemons: pokemons
  });
},

  receiveAPokemon: function (pokemon) {
   AppDispatcher.dispatch({
     actionType: PokemonConstants.POKEMON_RECEIVED,
     pokemon: pokemon
   });
  }

};
