var ToyDetail = React.createClass({

  getInitialState: function() {
    return {pokemon : this.getStateFromStore()};
  },

  getStateFromStore: function () {
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  _onChange: function () {
    this.setState({pokemon: this.getStateFromStore()});
  },

  componentWillReceiveProps: function () {

  },

  componentDidMount: function () {
    PokemonStore.addDetailChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    PokemonStore.removeDetailChangeListener(this._onChange);
  },

  render: function() {
    if (this.state.pokemon){
    return (
      <div>
        <div className="detail">
          <img src={this.state.pokemon.image_url}/>
          <br/> Attack: {this.state.pokemon.attack}
          <br/> Defense: {this.state.pokemon.defense}
          <br/>  Moves: {this.state.pokemon.moves.map( function (move) {
            return <li>{move}</li>;})}
        </div>
      </div>
    );
  } else {
    return (<div></div>);
  }
}




});
