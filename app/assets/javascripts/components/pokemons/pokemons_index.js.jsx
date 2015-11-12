window.PokemonsIndex = React.createClass({

  getInitialState: function () {
    return {pokemons: PokemonStore.all()};
  },

  addPokemonsIndexChangeListener: function (callback) {
    this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
  },

  _onChange: function () {
    this.setState({pokemons: PokemonStore.all()});
  },

  componentDidMount: function () {
    ApiUtil.fetchAllPokemons();
    PokemonStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    PokemonStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return (
      <div>
      <ul>
        {this.state.pokemons.map(function (pokemon){
          return <PokemonsIndexItem key={pokemon.id} pokemon={pokemon}/>;
        })};
      </ul>
      </div>
    );
  }

});
