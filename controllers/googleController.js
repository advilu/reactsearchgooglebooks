const axios = require("axios");
const db = require("../models");
// searching the Google Books API and returning the entries we don't already have in our DB

// and checking if the books returned contain a title, author, link, summary, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
    //accessing the api to pull data
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        //filtering for each piece of data we want
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
