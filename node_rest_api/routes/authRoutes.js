const User = require('../models/user');



module.exports=(app)=>{
    app.get("/register", async (req,res)=>{
        const user = await new User({
            username:"prateek",
            email:"pratekk@2.com",
            password:"1234565",
        })
            await user.save();
            res.send("ok");
    });
};