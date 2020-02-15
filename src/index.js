
const express = require("express");
const bodyParser = require("body-parser");
const teachersRouter = require("./routers/teachersRouter");
const teacherRouter = require("./routers/teacherRouter");

const app = express();

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   // res.send("Response from Middleware");
//   req.customKey = "Value set in the middleware";
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello Kutty");
});

app.use("/teachers", teachersRouter);

app.use("/teacher", teacherRouter)

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
