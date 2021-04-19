var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    }
},
{
    writeConcern: {
        j: true,
        wtimeout: 1000
    }
});

module.exports = mongoose.model('User', UserSchema);
