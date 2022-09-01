const model = require("../Model");
const pwdController = {};

//functionality to get passwords in the database
pwdController.getPassword = (req, res, next) => {
  model.PasswordStorage.find({})
    .exec()
    .then((personData) => {
      res.locals.fetched = personData;
      // console.log(personData);
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

pwdController.deleteAccount = (req, res, next) => {
  console.log(req.query);
  const { website, username, password } = req.query;
  const deleteAccount = {
    website,
    username,
    password,
  };
  model.PasswordStorage.deleteOne(deleteAccount)
    .then((data) => {
      console.log(data, "was deleted");
      return next();
    })
    .catch((err) => {
      next({
        log: "pwdController.deleteAccount ERROR: data not found",
        message: { err: "Error occured" },
      });
    });
};

pwdController.updateAccount = (req, res, next) => {
  console.log(req.query);
  const { website, username, password, _id } = req.query;
  const updateAccount = {
    website,
    username,
    password,
  };
  console.log(_id);
  model.PasswordStorage.findByIdAndUpdate({ _id }, updateAccount)
    .then((data) => {
      console.log(data, "was updated");
      return next();
    })
    .catch((err) => {
      next({
        log: "pwdController.deleteAccount ERROR: data not found",
        message: { err: "Error occured" },
      });
    });
};

module.exports = pwdController;
