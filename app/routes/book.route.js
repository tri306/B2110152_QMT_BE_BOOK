const express = require('express');
const router = express.Router();
const bookController = require("../controllers/book.controller");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../middleware/verifyToken");

router.route("/")
    .get(verifyToken, bookController.getAllBooks)
    .post(verifyTokenAndAdmin,bookController.createBook)

router.route("/search")
    .get( bookController.getBookByName)
    
// thêm dk kiểm tra, chỉ có admin được phép xóa sách
router.route("/:id")
    .get(verifyToken,bookController.getBookById)
    .delete(verifyTokenAndAdmin,bookController.deleteBook)
    .put(verifyTokenAndAdmin,bookController.updateBook)

router.route("/search")
    .get(verifyToken, bookController.getBookByName)

router.route("/count")
    .get(bookController.getBookCount)


module.exports = router;