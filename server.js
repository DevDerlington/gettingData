const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
res.send("<h1>Welcome to my Home Page!</h1>");

});

app.get("/hobbies",(req,res)=>{
    res.send("<h1>My hobbies are playing,reading, cooking(lolz i really dont like cooking)</h1>");
    
    });

    app.get("/about",(req,res)=>{
        res.send("<h1>IM iRANLOWO , PRUDENT IN A LOT OF THINGS!</h1>");
        
        });

        app.get("/index.html",(req,res)=>{
           res.sendFile(__dirname + "/index.html")
            
            });

            app.post("/index.html",(req,res)=>{
            const fName = req.body.FirstName;
            const lName = req.body.lastName;
            const email = req.body.email;
            const school = req.body.school;
            const password = req.body.password;
            res.write(" <h1> your first Name is : </h1>" + fName );
            res.write(" <h1> your last Name is : </h1>" + lName);
            res.write(" <h1> your email  is : </h1>" + email);
            res.write(" <h1> you attended  : </h1>" + school);
            res.write(" <h1> your password is :  </h1>" +  password);
            res.send();
           
     
            console.log("your info are " + "first Name: " + fName   + " last Name is " + lName + " your mail address is " + email  + " you attend/attended " + school);
            });
app.listen(3000, (req,res)=>{
console.log("app is up and runing on port 3000");

});