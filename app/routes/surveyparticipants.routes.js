module.exports = app => {
    const surveyparticipants = require("../controllers/surveyparticipants.controller.js");
    var router = require("express").Router();
    // Create a new Track
    /*router.post("/add", track.create);
    // Retrieve all Track
    router.get("/", track.findAll);
    // Retrieve a single Track with id
    router.get("/:id", track.findOne);
    // Update a Track with id
    router.put("/:id", track.update);
    // Delete a Track with id
    router.delete("/:id", track.delete);
    // Delete all Track
    // Retrieve Artist with Name
    router.get("/search/:trackName", track.findAllTrack);
    router.get("/searchalbum/:albumName", track.findAllTrackForAlbums);
    router.get("/searchartist/:artistName", track.findAllTrackForArtist);
    router.delete("/", track.deleteAll);*/
    app.use('/api/surveyparticipants', router);
  };