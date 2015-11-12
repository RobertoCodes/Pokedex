var ToysIndex = React.createClass({

  render: function(){
    if(this.props.toys){
    return (
      <div>
        {this.props.toys.map(function(toy){
          return <ToyIndexItem toy={toy}/>;
        })}
      </div>
    );
  }
  else{
    return <div></div>;
  }
  }


});
