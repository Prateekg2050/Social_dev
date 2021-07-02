
module.exports=(app)=>{
    app.get("/",(req,res)=>{
        res.send("HOme Page");
        res.end(); 
        });
        
    app.get("/users",(req,res)=>{
            res.end("Welcome to users page");
        });
    
}