const db = require("../models");

// methods for the bookController
module.exports = {
    // grabbing all books and sending them back in json
    // or serving an uprocessable entity error
  findAll: (req, res) => {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
    // grabbing a specific book and sending it back in json
    // or serving an uprocessable entity error
  findById: (req, res) => {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
    // creating a book and sending it back in json
    // or serving an uprocessable entity error
  create: (req, res) => {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
    // updating a book and sending it back in json
    // or serving an uprocessable entity error
  update: (req, res) => {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
    // removing a book
    // or serving an uprocessable entity error
  remove: (req, res) => {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};