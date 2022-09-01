const model = require("../Model");
const pwdController = {};

//functionality to get passwords in the database
pwdController.getPassword = (req, res, next) => {
  model.PasswordStorage.find({})
    .exec()
    .then((personData) => {
      res.locals.fetched = personData;
      //   console.log(personData);
      return next();
    })
    .catch((err) => {
      next({
        log: "pwdController.getPassword ERROR: data not found",
        message: { err: "Error occured" },
      });
    });
};

pwdController.postAccount = (req, res, next) => {
  console.log(req.body);
  const { website, username, password } = req.body;
  const newAccount = {
    website,
    username,
    password,
  };
  model.PasswordStorage.create(newAccount)
    .then((newAccount) => {
      res.locals.newAccount = newAccount;
      return next();
    })
    .catch((err) => {
      next({
        log: "pwdController.postAccount ERROR: data not found",
        message: { err: "Error occured" },
      });
    });
};

module.exports = pwdController;
