const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter first name"]
        },
        lastName: {
            type: String,
            required: [true, "Please enter last name"]
        },
        email: {
            type: String,
            required: [true, "Please enter email"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please enter password"]
        }
    }
);

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel