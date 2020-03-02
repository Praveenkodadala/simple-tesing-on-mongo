let express = require('express');
let router = express.Router();

mongoose    = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name:String,
    username:{type:String, required:true, index:{unique:true}},
    password:{type:String, required:true, select:true}

});

let User = mongoose.model('user', UserSchema);

router.get('/', (req, res) =>{
    res.send('this is get method use post method in postman /user');
});


router.post('/user', (req, res)=>{
    
    let {name, username, password} = req.body; 
    console.log(req.body);

    let user = new User();
    
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function(err) {
        if( err ) {

            console.log( err ); 

        }

        res.send("user created!");

    });




});


router.get("/getusers", (req, res) => {
    let user = new User();
     User.find().then((data) => {
         console.log("Data", data)
         res.send(data)
     })
 })





module.exports= router;