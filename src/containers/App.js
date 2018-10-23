import React, { Component } from 'react';
import './App.css';
import logo from '../img/logo.png';
import CardList from '../components/CardList';
import LoadingBar from '../components/LoadingBar/LoadingBar';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import Scroll from '../components//Scroll/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: '',
      sortSwitch: true, 
      filter: 'none' 
    };
  }

  componentDidMount() {
    let URLs = [];
    for (var i = 1; i <= 88; i++) { 
        if (i !== 17) { 
          URLs.push(`https://swapi.co/api/people/${i}`);
        }
    }

    let characterArray = [];
    URLs.map(url => {
      return (
        fetch(url)
          .then(response => response.json())
          .then(result => characterArray.push(result))
          .then(people => this.setState({ characters: characterArray }))
      );
    });
  }

  onClickChange = () => { 
    function compare(a,b) { 
      if (a.name < b.name) 
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }
    let sortedCharacters = this.state.characters.sort(compare);
    if (this.state.sortSwitch) {
      return this.setState({characters: sortedCharacters, sortSwitch: false})
    } else {
      return this.setState({characters: sortedCharacters.reverse(), sortSwitch: true})
    }
  }

  onFilterChange = (event) => { 
    this.setState({ filter: event.target.value })
  }

  onSearchChange = (event) => { 
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { characters, searchfield, filter } = this.state;
    const filteredPeople = characters.filter(person => { 
      if (filter !== 'none') { 
        return (filter === person.homeworld || person.films.includes(filter)) && 
          person.name.toLowerCase().includes(searchfield.toLowerCase()) 
      } else {
          return person.name.toLowerCase().includes(searchfield.toLowerCase()) 
      }
    })
    if (characters.length < 60) { 
      return (
        <LoadingBar />
      )
    } else {
      return (
        <div className='displayContent'> 
          <header className="App-header">
            <div className="App-logoContainer">
              <img className="App-logo" style={{width: '400px'}} alt='Star Wars Logo' src={logo} />
            </div>
            <SearchPanel 
              searchChange={this.onSearchChange} 
              clickChange={this.onClickChange}
              filterChange={this.onFilterChange}
            />
          </header>
          <Scroll>
              <CardList people={filteredPeople}/>
          </Scroll>
        </div>
      );
    } 
  }
}

export default App;