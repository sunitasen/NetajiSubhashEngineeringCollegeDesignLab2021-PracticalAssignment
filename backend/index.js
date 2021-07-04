const express = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require('cors')


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  // modified db info, change it to yours.
  password : '',
  database : ''
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))

connection.connect();

app.post('/submitForm',  async(req, res) => {
    console.log(req.body.id, req.body.name, req.body.contact,req.body.email,req.body.guardian ,
        req.body.guardianContact,req.body.course,req.body.slot, req.body.referAFriend, req.body.friendsContact );
    
    const q = "Insert into student values('" + req.body.id + "','" + req.body.name + "','" + req.body.contact + 
    "','" +req.body.email + "','" + req.body.guardian + "','" + req.body.guardianContact + "','" +
        req.body.course +"','"  + req.body.slot + "','" + req.body.referAFriend + "','"+ req.body.friendsContact
         + "','" +  req.body.friendsEmail + "');";

    connection.query(q, function (error, results, fields) {
        if (error) throw error;
        res.send("Done");
    });
   
})


app.listen(3001, () => console.log('Example app listening on port 3001!'))