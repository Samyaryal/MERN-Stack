const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const exerciseSchema = new Schema ({
    username: {type: string, required: true},
    description: {type: string, required: true},
    duration: {type: string, required: true},
    date: {type: string, required: true},
}, {
    timestamps: true,

});
const User = mongoose. model('Exercise', exerciseSchema);
module.exports = User;