const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/tododb');
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error on connecting with database'));
db.once('open',function(){
    console.log('successfully connected to database');

})

