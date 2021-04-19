var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSchema = new Schema({

    username:{
        type:String,
        required:true
    },
    
    productId: {
        type: String,
        required: true
    },

    productName: {
    type: String,
    required:true
    },

    quantity: {
    type: Number,
    required:true
    },
    amount: {
    type: Number,
    required:true
    }
},
{
    writeConcern: {
        j: true,
        wtimeout: 1000
    }

});
module.exports = mongoose.model('Cart', CartSchema);