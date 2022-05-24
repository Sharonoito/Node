var Db=require('./crud');
var Products=require('./products');
const crud=require('./crud');

var express=require('express');
var bodyParser = require('body-parser');
var cors=require('cors');
var app=express();
var router=express.Router();

app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.json()); 
app.use(cors());
app.use('/api',router); 


router.use((request,res,next)=>{
    console.log("middleware");
    next()
})
router.route('/products').get((request,res)=>{
    crud.getProducts().then(result=>{
        res.json(result);
    })
})

var port=process.env.PORT||8090;
app.listen(port);
console.log("application running on port"+ port);
