const mongoose = require("mongoose");



const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    //Tacgia
    author: {
        type: String,
        require: true,
    },
    cost: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    yearOfPublication: {
        type: String,
        require: false,
    },
    image: {
        type: String,
        require: false,
    },

},
    {
        //thời gian tạo
        timestamps: true,
    }
);

const Book = mongoose.model('Book', bookSchema)

module.exports = Book