const express = require("express");
const teachers = require("../models/Teachers");

const teachersRouter = express.Router();

teachersRouter
  .get("/", (req, res) => {
    /**
     * Express is smart enough to figure out the
     * response header's MIME type
     */
    // res.send(teachers);
    // res.send("<h1>Hello</h1>")

    /**
     * Multiple properties of the same object of the express modules
     * can be chained together
     */
    // res.status(200);
    // res.json({teachers}); // These two statements can be chained together

    /**
     * It's a good practice to be explicit
     * of the status codes and response types
     */
    res.status(200).json({ teachers });
  });

  module.exports = teachersRouter;