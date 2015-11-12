(function() {

  var _pokemons = [];
  var POKEMONS_INDEX_CHANGE_EVENT = "changed";
  var POKEMON_DETAIL_CHANGE_EVENT = "changed";
  var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype);

  PokemonStore.all = function(){
    return _pokemons.slice();
  };

  var resetPokemons = function(pokemons){
    _pokemons = pokemons;
  };

  var resetPokemon = function(pokemon){
    var index = _pokemons.indexOf(pokemon);
    _pokemons.splice(index, 1);
    _pokemons.push(pokemon);
  };

  PokemonStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons(payload.pokemons);
        PokemonStore.changed();
        break;
      case PokemonConstants.POKEMON_RECEIVED:
        resetPokemon(payload.pokemon);
        PokemonStore.detailChanged();
        break;
    }
  });

  PokemonStore.changed = function () {
    this.emit(POKEMONS_INDEX_CHANGE_EVENT);
  };

  PokemonStore.detailChanged = function() {
    this.emit(POKEMON_DETAIL_CHANGE_EVENT);
  };

  PokemonStore.addChangeListener = function (callback) {
    this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
  };

  PokemonStore.addDetailChangeListener = function(callback){
    this.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
  };

  PokemonStore.removeChangeListener = function (callback) {
    this.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
  };

  PokemonStore.removeDetailChangeListener = function (callback) {
    this.removeListener(POKEMON_DETAIL_CHANGE_EVENT, callback);
  };

  PokemonStore.find = function (id) {
    var pokemons = PokemonStore.all();
    for(var i = 0; i < pokemons.length; i++){
      if(pokemons[i].id === id){
        return pokemons[i];
      }
    }
  };


})();
