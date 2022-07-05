module.exports = app => {
  const user = require("../controllers/user.controller.js");
  var router = require("express").Router();
  // Create a new Artist
  router.post("/add", user.create);
  // Retrieve all Artist
  /*router.get("/", artist.findAll);
  // Retrieve a single Artist with id
  router.get("/:id", artist.findOne);
  // Retrieve Artist with Name
  router.get("/search/:artistName", artist.findAllArtist);
  // Update a Artist with id
  router.put("/:id", artist.update);
  // Delete a Artist with id
  router.delete("/:id", artist.delete);
  // Delete all Artist
  router.delete("/", artist.deleteAll);*/
  app.use('/api/user', router);
};