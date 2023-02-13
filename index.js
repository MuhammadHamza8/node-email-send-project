const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const nodemailer =require('nodemailer');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const router = express.Router();

 // Serve static files from the "public" directory
app.use(express.static('public'));


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


router.post('/', function(req,res){

  const{name,phone,email,subject,message} = req.body;
   
  const data ={
    name:name,
    phone:phone,
    email:email,
    subject:subject,
    message:message
  }
  
//   console.log(data);
//   res.send(data);

  // sending mail code............
    


const mailtransporter = nodemailer.createTransport({

    service:"gmail",
    auth:{
        user:"hamzaicp54@gmail.com",
        pass:"uhapeyqhunsvjohj"

    }
});



const details = {

    From:"hamzaicp54@gmail.com",
    to: data.email,
    subject:data.subject,
    text:data.message
};

mailtransporter.sendMail(details,(err)=>{
    if(err){
        console.log("somethigs went wrong");
    }else
    {
        console.log("email has sent ");
    }
});
    })
// router.get('/about',function(req,res){
//     res.sendFile(path.join(__dirname+'/about.html'));
//   });
 



 

 
//add the router


app.use('/', router);
app.listen(process.env.port || 3000);
 
console.log('Running at Port 3000');