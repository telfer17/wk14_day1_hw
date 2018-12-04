import React, {Component} from 'react';

class Movie extends Component {

  render(){
    return (
      <div className = "movie">
        <a href = {this.props.movie.url}> {this.props.movie.name}</a>
      </div>
    )
  }
}

export default Movie;
