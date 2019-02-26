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
    console.log("savedList:", this.state.savedList);
    console.log("movie:", movie);
    console.log("state check", this.state.savedList.includes(movie));
    const savedList = this.state.savedList;
    console.log("var check", savedList.includes(movie));
    // Added logic so the user cannot save a movie twice:
    if (savedList.includes(movie)) {
      alert(
        `No matter how much you like ${movie.title}, you can only save it once!`
      );
      return;
    } else if (!savedList.includes(movie)) {
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
