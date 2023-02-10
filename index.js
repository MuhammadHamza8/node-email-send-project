const nodemailer =require('nodemailer');

const mailtransporter = nodemailer.createTransport({

    service:"gmail",
    auth:{
        user:"hamzaicp54@gmail.com",
        pass:"uhapeyqhunsvjohj"

    }
});



const details = {

    From:"hamzaicp54@gmail.com",
    to: "carolineicp344@gmail.com",
    subject:"The is test Email",
    html:"<b>Thanks for contacting us We have recevied your contact details we will get back to you soon!!!</b>"
};

mailtransporter.sendMail(details,(err)=>{
    if(err){
        console.log("somethigs went wrong");
    }else
    {
        console.log("email has sent ");
    }
});