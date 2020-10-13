const { urlencoded } = require('express');
const express=require('express');
const path=require('path');
const port=8000;
const app=express();
const db=require('./config/todo');
const Todo=require('./models/todo_schema');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(urlencoded());
app.use(express.static('assets'));

var todoarr=[
    {
        description:'mongo is love',
        category:'work',
        date:'12/2/2019'
    }
]

app.get('/',function(req,res){
    
   Todo.find({},function(err,data){
       if(err)
       {
           console.log('error');
       }
       return res.render('index',{
           title:'go way',
           to:data
       })
   })
 
})

app.post('/create',function(req,res){
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,data){
        if(err){
            console.log('could not post data');
        }
        console.log("#####",data);
        res.redirect('back');
    })
})

app.get('/delete/',function(req,res){
    let id=req.query.id;
    console.log(id);
    Todo.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log('cant find');
        }
        return res.redirect('back');
    })
})


app.listen(port,function(err){
    if(err)
    {
        console.log("got an error on connext port",port)
    }
    console.log("server is running on a port:",port);
})
