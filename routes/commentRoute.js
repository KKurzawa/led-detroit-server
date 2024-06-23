const express = require("express");
const router = express.Router();
const Comment = require("../Models/commentModel");

router.route("/create").post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const experience = req.body.experience;
    const newComment = new Comment({
        firstName,
        lastName,
        experience
    });

    newComment.save();
    res.json({ message: "succuss" })
})

router.route("/comments").get((req, res) => {
    Comment.find()
        .then(foundComments => res.json(foundComments))
})

module.exports = router;