window.ApiUtil = {

fetchAllPokemons : function() {
  $.ajax({
    url: "api/pokemon",
    dataType: "json",
    success: function(pokemons){
      ApiActions.receiveAllPokemons(pokemons);
    }
  });
},

fetchAPokemon: function (id) {
  $.ajax({
    url: "api/pokemon/" + id,
    dataType: "json",
    success: function(pokemon){
      ApiActions.receiveAPokemon(pokemon);
    }
  });
},

};
