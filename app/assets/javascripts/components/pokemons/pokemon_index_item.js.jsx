window.PokemonsIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  showDetail: function () {
    this.history.pushState(null, "/pokemon/" + this.props.pokemon.id);
  },


  render: function () {
    return (
      <div>
        <li className="poke-list-item" onClick={this.showDetail}>Name: {this.props.pokemon.name} <br/> Type: {this.props.pokemon.poke_type}</li>
      </div>

    );
  }


});
