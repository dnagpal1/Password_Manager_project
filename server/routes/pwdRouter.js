//----------Initial Setup----------
const express = require("express");
const router = express.Router();

// require in controller when we have a MW function
const pwdController = require("../controller/pwdController");

//----------Routers to Controllers----------

router.get("/", pwdController.getPassword, (req, res) => {
  return res.status(200).json(res.locals.fetched);
});

router.post("/post", pwdController.postAccount, (req, res) => {
  return res.status(200).json(res.locals.newAccount);
});

router.delete("/", pwdController.deleteAccount, (req, res) => {
  return res.status(200).json("account deleted");
});

router.patch("/", pwdController.updateAccount, (req, res) => {
  return res.status(200).json("account updated");
});

//-----Export------
module.exports = router;
