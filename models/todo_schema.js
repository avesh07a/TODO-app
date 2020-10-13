const { text } = require('express');
const mongoose=require('mongoose');

const Todoschema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },   
    date:{
        type:String,
        required:true
    }

})

const Todo=mongoose.model('Todo',Todoschema);
module.exports=Todo;