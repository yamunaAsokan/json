const express = require("express");
const teachers = require("../models/Teachers");

const teacherRouter = express.Router();

teacherRouter
  .post("/", (req, res) => {
    if (req.body.id && req.body.firstName) {
      teachers.push(req.body);
      res.status(200).json({ message: "Teacher created successfully" });
    } else {
      res.status(400).send("Bad Request");
    }
  })
  .get("/:id", (req, res) => {
    // const studentId = req.params.id;
    const { id = "" } = req.params;
    const requiredTeacher = teachers.find(teacher => {
      if (parseInt(id) === teacher.id) return true;
      else return false;
    });
    if(requiredTeacher) {
      res.status(200).json({ teacher: requiredTeacher });
    } else {
      res.status(404).send("Not Found");
    }
  })
  .patch("/:id", (req, res) => {
    const { id } = req.params;

    let requiredTeacherIndex;
    const requiredTeacher = teachers.find((teacher, teacherIndex) => {
      if (parseInt(id) === teacher.id) {
        requiredTeacherIndex = teacherIndex;
        return true;
      }
      return false;
    });

    if (requiredTeacher) {
      const {
        firstName = requiredTeacher.firstName,
        lastName = requiredTeacher.lastName,
        age = requiredTeacher.age,
        gender = requiredTeacher.gender,
        qualification = requiredTeacher.qualification,
       experience = requiredTeacher.experience,
       subject = requiredTeacher.subject,
       
      } = req.body;
      teachers[requiredTeacherIndex] = {
        id: requiredTeacher.id,
        firstName,
        lastName,
        age,
        gender,
        qualification,
        experience,
        subject,
      };
      res.status(200).json({ message: "Teacher details updated" });
    } else {
      res.status(400).send("Bad Request");
    }
  })
  .delete("/:id", (req, res) => {
    const {id} = req.params;
    let requiredTeacherIndex;
    const requiredTeacher = teachers.find((teacher, teacherIndex) => {
      if (parseInt(id) === teacher.id) {
        requiredTeacherIndex = teacherIndex;
        return true;
      }
      return false;
    });
    if(requiredTeacher) {
      teachers.splice(requiredTeacherIndex, 1);
      res.status(200).json({ message: "Teacher has been deleted" });
    } else {
      res.status(400).send("Bad Request");
    }
  });

module.exports = teacherRouter;
