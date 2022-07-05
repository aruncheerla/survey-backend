const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
// Create and Save a new Artist
exports.create = (req, res) => {
  // Validate request
  if (!req.body.userEmail) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Artist
  const user = {
    user_Email: req.body.userEmail,
    user_FirstName: req.body.userFirstname,
    user_LasttName: req.body.userLastname,
    user_Password: req.body.userPassword
  };
  // Save Artist in the database
  /* Artist.findOne({where: {artist_name:req.body.artistName}})
  .then(data => {
    if(data != undefined){
      res.status(409).send({
        message: "Artist already exists. Please enter valid artist details"
      });
    }else{
      Artist.create(artist)
    .then(data => {
      res.send(data);
    })
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Artist."
    });
  });
};
// Retrieve all Artists from the database.
exports.findAll = (req, res) => {
  Artist.findAll({ include: ["album"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving artists"
      });
    });
};
// Find a single Artist with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Artist.findByPk(id,{ include: ["album"] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Artist with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Artist with id=" + id
      });
    });
};
// Find Artist with artist name
exports.findAllArtist = (req, res) => {
  const artist_name = req.params.artistName;
  var condition = artist_name ? {
    artist_name: {
      [Op.like]: `%${artist_name}%`
    }
  } : null;

  Artist.findAll({ where: condition })
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
// Update a Artist by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Artist.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Artist was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Artist with id=${id}. Maybe Artist was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Artist with id=" + id
      });
    });
};
// Delete a Artist with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Artist.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Artist was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Artist with id=${id}. Maybe Artist was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Artist with id=" + id
      });
    });
};
// Delete all Artist from the database.
exports.deleteAll = (req, res) => {
  Artist.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Artist were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all artists."
      });
    });*/
 };

