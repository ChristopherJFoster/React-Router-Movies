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
    const savedList = this.state.savedList;
    const stringList = savedList.map(item => JSON.stringify(item));
    const stringMovie = JSON.stringify(movie);
    // Added logic so the user cannot save a movie twice:
    if (stringList.includes(stringMovie)) {
      alert(
        `No matter how much you like ${movie.title}, you can only save it once!`
      );
    } else {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <Route
          render={routeProps => (
            <SavedList {...routeProps} list={this.state.savedList} />
          )}
        />
        {/* I might not have done this according to best practices, but I figured out how to redirect "/" to "/movielist" automatically: */}
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
