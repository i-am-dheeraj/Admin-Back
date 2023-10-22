const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const userSchema = Schema({
    communityID: {
        type:ObjectId,
        ref:'User'
       },
    name: String,
    logo: String,
    appIcon: String,
    appName: String,
    dbconnstring: String,
    appID: String,
    playstoreID: String, 
    admin_name: String,
    email: String, 
    password: String
});

const user = mongoose.model('user', userSchema);
module.exports = user;