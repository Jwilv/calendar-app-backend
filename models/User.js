const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    }
})