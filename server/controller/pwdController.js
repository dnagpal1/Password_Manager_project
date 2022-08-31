const model = require("../Model");
const pwdController = {};

//functionality to get passwords in the database
pwdController.getPassword = (req, res, next) => {
  model.PasswordStorage.find({})
    .exec()
    .then((personData) => {
      console.log("connected to PasswordManager");
      return next();
    })
    .catch((err) => {
      next({
        log: "pwdController.getPassword ERROR: data not found",
        message: { err: "Error occured" },
      });
    });
};

module.exports = pwdController;
