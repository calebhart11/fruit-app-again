// Import Dependencies
const mongoose = require("./connection")

//define model
//pull schema and model from mongoose
const {Schema, model} = mongoose

//make user schema
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

//make user model
const User = model("User", userSchema)

//export model
module.exports = User
