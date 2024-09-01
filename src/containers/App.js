import React, { Component } from "react";
import Cardlist from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) });
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return !robots.length ?
      <h1>Loading</h1> :  
    (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
            <Cardlist robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }

    // if (!robots.length) {
    //   return <h1>Loading</h1>;
    // } else {
    //   return (
    //     <div className="tc">
    //       <h1>RoboFriends</h1>
    //       <SearchBox searchChange={this.onSearchChange} />
    //       <Scroll>
    //         <Cardlist robots={filteredRobots} />
    //       </Scroll>
    //     </div>
    //   ); this was the original code before the ternary operator was used for refactoring
    // } this is the same as the return statement above using the ternary operator

export default App;
