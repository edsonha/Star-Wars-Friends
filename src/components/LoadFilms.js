import React, { Component } from "react";
import FilmCovers from "./FilmCovers/FilmCovers";

class LoadFilms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episode1: false,
      episode2: false,
      episode3: false,
      episode4: false,
      episode5: false,
      episode6: false
    };
  }
  
  componentDidMount() {
    this.props.films.map(film => {
      switch (film) {
        case "https://swapi.co/api/films/1/":
          this.setState({episode4: true});
          break;
        case "https://swapi.co/api/films/2/":
          this.setState({episode5: true});
          break;
        case "https://swapi.co/api/films/3/":
          this.setState({episode6: true});
          break;
        case "https://swapi.co/api/films/4/":
          this.setState({episode1: true});
          break;
        case "https://swapi.co/api/films/5/":
          this.setState({episode2: true});
          break;
        case "https://swapi.co/api/films/6/":
          this.setState({episode3: true});
          break;
        default: return "?";
      }
      return film
    });
  }

  render() {
    let boolean = Object.values(this.state); 
    let cover = Object.keys(this.state);

    return (
      <FilmCovers boolean={boolean} cover={cover} />
    )
  }
}

export default LoadFilms;