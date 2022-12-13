const mongoose = require('mongoose');
const Schema=mongoose.Schema;

var uSchema= new Schema({
    Name: {type: String },
    Mail: { type: String, unique: true},
    Expiration: { type : String},
    Age: { type: Number },
    Session: { type: Number}
},{timestamps: true});

var Users=mongoose.model('Users',uSchema);
module.exports=Users;