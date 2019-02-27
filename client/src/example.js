// The magic of JSON.stringify for object comparison

// Original recipe:
addToSavedList = movie => {
  const savedList = this.state.savedList;
  // This conditional came back false even if the clicked movie was already in savedList:
  if (savedList.includes(movie)) {
    alert(
      `No matter how much you like ${movie.title}, you can only save it once!`
    );
    return;
    // Likewise, this conditional came back true, allowing a movie to be added twice:
  } else if (!savedList.includes(movie)) {
    savedList.push(movie);
    this.setState({ savedList });
  }
};

// JSON.stringify recipe:
addToSavedList = movie => {
  const savedList = this.state.savedList;
  // JSON.stringify savedList and movie for an accurate comparison:
  const stringList = savedList.map(item => JSON.stringify(item));
  const stringMovie = JSON.stringify(movie);
  // Using the JSON.stringified variable, this conditional works as intended:
  if (stringList.includes(stringMovie)) {
    alert(
      `No matter how much you like ${movie.title}, you can only save it once!`
    );
    return;
    // ...as does this one:
  } else if (!stringList.includes(stringMovie)) {
    savedList.push(movie);
    this.setState({ savedList });
  }
};

// Hooray.
