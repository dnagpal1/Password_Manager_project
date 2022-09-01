//----------Initial Setup----------
const path = require("path");
const express = require("express");
const app = express();

const PORT = 3000;

const pwdRouter = require("./routes/pwdRouter");

// parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//----Router-----//
app.use("/pwd", pwdRouter);

//default static file
if (process.env.NODE_ENV === "production") {
  app.use("/build", express.static(path.resolve(__dirname, "../build")));
  app.get("/", (req, res) =>
    res.status(200).sendFile(path.join(__dirname, "../src/index.html"))
  );
}

// catch-all route handler
app.use((req, res) => res.status(404).send("ERROR:catch-all route handler"));
// based express error handler <3

//----------Global Error Handler----------
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: err.message,
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//----------Start Server----------
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

//----------Export----------
module.exports = app;
