
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    name:({
        type:String,
        required:[true , 'please insert name'],
    }),
    email:({
        type:String,
        unique:true
    }),
    // age:({
    //     type:Number
    // }),
    // createdat:({
    //     type:Date,
    //     default:Date.now
    // }),
    // option:({
    //     type:String,
    //     enum:{
    //         values:['coffee' , 'tea'],
    //         message:'your value is not supported please be choose coffee or tea'
    //     }
    // }),
    // password:({
    //     type:String,
    //     minlength:[8 , 'enter password must be 8 character up'],
    //     maxlength:16
    // })
})
const MyModel = mongoose.model('demo', user);
module.exports = MyModel