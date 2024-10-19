// require module
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const assetsRouter = require("./asset-router");
const userRouter = require("./routes/User");
const contactRouter = require("./routes/Contact");

const app = express()
// Server static file
app.use("/",express.static(path.join(__dirname,"public")));
app.use("/src",assetsRouter);
// API endpoint
app.get('/api/v1', (req, res) => {
    res.json({
      proect:"Assinment 2",
      from:"COMP229"
    });
});

// Extract routes from React/Client
app.get('/',function (req,res){
  res.sendFile(path.join(__dirname,"../public","index.html"))
  res.send({
    message: "Welcome to the DressStore application"
  })
});


app.use(express.json())
//use the routes you created
app.use('/',userRouter);
app.use('/',contactRouter);
//makes it parse in json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use((err,req,res,next)=>{
  if(err.name === 'UnauthorizedError'){
    res.status(401).json({'error':"Unaunthorized Access"})
  }
  else if(err)
  {
    res.status(401).json({"error" : err.name + ":" + err.message});
    console.log(err);
  }
})
module.exports = app;