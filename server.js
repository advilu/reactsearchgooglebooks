const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require("./routes");
const PORT = process.env.PORT || 3022;

// body parsing for AJAX
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes for API and view
app.use(routes);

// Mongo DB connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Starting API server
app.listen(PORT, () =>
  console.log(`🌎  ==> We hear you on port ${PORT}!`)
);
