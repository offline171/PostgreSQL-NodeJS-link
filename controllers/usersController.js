// controllers/usersController.js
const usersStorage = require("../storages/usersStorage");
const db = require("../db/queries");

// This just shows the new stuff we're adding to the existing contents
const { body, validationResult } = require("express-validator");

// We can pass an entire array of middleware validations to our controller.
exports.getUsernames = async function (req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
};

exports.createUsernameGet = (req, res) => {
  res.render("form", {
    title: "Create User",
  });
};

exports.createUsernamePost = async function (req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}