const express = require('express');
const router = express.Router();

const userController = require("../controllers/user.controller");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../middleware/verifyToken");

router.route("/")
  .get(verifyTokenAndAdmin, userController.getAllUsers)

router.route("/info")
    .get(userController.getUserInfoByID)
    .put(verifyToken, userController.changeUserInfo)

router.route("/order")
    .get(userController.getUserOrder)
    .post(userController.addOrder)
    .patch(userController.updateBookInOrder)

router.route("/Order/:id")
    .delete(userController.removeBook)



module.exports = router;