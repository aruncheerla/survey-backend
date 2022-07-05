const db = require("../models");
const Survey = db.track;
const Op = db.Sequelize.Op;
// Create and Save a new Track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.surveyName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a survey
  const survey = {
    survey_name: req.body.surveyName,
    survey_description:req.body.surveyDescription,
    survey_introparagraph:req.body.surveyIntroparagraph,
    survey_startdate:req.body.surveyStartdate,
    survey_enddate:req.body.surveyEnddate,
    userId:req.body.userId


  };
  // Save Track in the database
  /*Track.findOne({where: {track_name:req.body.trackName}})
  .then(data => {
    if(data != undefined){
      res.status(409).send({
        message: "Track already exists. Please enter valid track details"
      });
    }else{
      Track.create(track)
    .then(data => {
      res.send(data);
    })
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Track."
    });
  });
};
 
// Retrieve all Tracks from the database.
exports.findAll = (req, res) => {
  Track.findAll({ include: ["album"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tracks."
      });
    });
};
// Find a single Track with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Track.findByPk(id,{ include: ["album"] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Track with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Track with id=" + id
      });
    });
};
// Update a Track by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Track.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Track was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Track with id=${id}. Maybe Track was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Track with id=" + id
      });
    });
};
// Delete a Track with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Track.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Track was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Track with id=${id}. Maybe Track was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Track with id=" + id
      });
    });
};
// Find Artist with artist name
exports.findAllTrack = (req, res) => {
  const track_name = req.params.trackName;
  var condition = track_name ? {
    track_name: {
      [Op.like]: `%${track_name}%`
    }
  } : null;

  Track.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving artist."
      });
    });
};
// Find Artist with artist name
exports.findAllTrackForAlbums = (req, res) => {
  const track_album = req.params.albumName;
  var condition = track_album ? {
    track_album: {
      [Op.like]: `%${track_album}%`
    }
  } : null;

  Track.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving artist."
      });
    });
};
// Find Artist with artist name
exports.findAllTrackForArtist = (req, res) => {
  const track_artist = req.params.artistName;
  var condition = track_artist ? {
    track_artist: {
      [Op.like]: `%${track_artist}%`
    }
  } : null;

  Track.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving artist."
      });
    });
};
// Delete all Track from the database.
exports.deleteAll = (req, res) => {
  Track.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Track were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tracks."
      });
    });*/
};