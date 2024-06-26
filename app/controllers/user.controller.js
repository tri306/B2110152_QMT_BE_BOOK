const User = require("../models/User.model")
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");


exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.massage });
    }
};

exports.changePassword = (req, res) => {
    res.send({ massage: "changePassword" });
};

exports.getUserInfoByID = async (req, res) => {
    try {
        // Lấy token
        const token = req.headers.token.split(" ")[1];
        console.log(token);
        // Giải mã token sau đó lấy ID người dùng
        const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_KEY);
        const userId = decodedToken.id;

        // Tìm kiếm người dùng theo ID
        const user = await User.findById(userId);
        
        // Kiểm tra người dùng có hay chưa
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Trả về thông tin người dùng nếu tìm thấy
        res.status(200).json(user);
    } catch (error) {
        // Xử lý lỗi nếu có
        res.status(500).json({ message: error.message });
    }
};



exports.changeUserInfo = (req, res) => {
    res.send({ massage: "changeUserInfo " });
};

exports.getUserOrder = (req, res) => {
    res.send({ massage: "getUserOrder" });
};

exports.addOrder = (req, res) => {
    res.send({ massage: "addOrder " });
};

exports.updateBookInOrder = (req, res) => {
    res.send({ massage: "updateBookInOrder" });
};

exports.removeBook = (req, res) => {
    res.send({ massage: "removeBook" });
};
