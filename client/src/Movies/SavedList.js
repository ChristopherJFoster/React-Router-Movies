import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            to={`/movielist/${movie.id}`}
            key={movie.id}
            className="saved-movie"
            activeClassName="saved-active"
          >
            {movie.title}
          </NavLink>
        ))}
        <Link to="/movielist" className="home-button">
          Home
        </Link>
      </div>
    );
  }
}
