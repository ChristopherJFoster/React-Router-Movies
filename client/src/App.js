import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    console.log("test");
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/* I might not have done this according to best practices, but I figured out how to change "/" to "/movielist" automatically: */}
        <Route exact path="/" component={() => <Redirect to="/movielist" />} />
        <Route exact path="/movielist" component={MovieList} />
        <Route
          path="/movielist/:id"
          render={routeProps => (
            <Movie {...routeProps} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
