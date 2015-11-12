var ToyIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  showDetail: function(){
    this.history.pushState(null, "/pokemon/" + this.props.params.pokemonId + "/toys/" +  this.props.toy.id );
  },

  render: function(){
    return (
      <li onClick={this.showDetail} className="toy-list-item">{this.props.toy.name}</li>
    );
  }



});
