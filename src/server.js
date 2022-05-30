const express = require('express');
const bodyParser = require("body-parser");
var multer  = require('multer')
var path = require('path');
const moment = require('moment');
const { Sequelize, DataTypes } = require("sequelize");
const requestSchema = require('./server/models/requests');


const cors = require("cors");

const port = 8000;
const DB_NAME = 'sssclub';
const DB_PORT = 3306;
const DB_USERNAME = 'admin';
const DB_PASSWORD = 'C@rnagieMe11on';
const DB_HOST = 'localhost';
const DB_DIALECT = 'mysql';
const DB_POOL = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
};

const app = express();

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  pool: DB_POOL,
  port: DB_PORT
});

const RequestModel = requestSchema(sequelize, DataTypes);

app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// The below define the folder location and storage of file using multer. File will be saved
// with field name, date stamp and extension and then upload variable will have the below information.

app.use(express.static(path.join(__dirname, 'public')));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    var ext = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  }
})

var upload = multer({ storage: storage });

// This method is used to send a request by a player who wish to join the club via send Request button in Home screen.

app.put('/service/joinrequest',  upload.single('photo'), async (req, res, next) => {
  try {
    const code = req.body.code;
    const pName = req.body.name;
    const pEmail = req.body.email; //exisiting code
    const pMobile = req.body.mobile;
    console.log(req.file);
    const validCode = "Soccer-575";
    if( code == validCode ) {
    const playerEmail = await RequestModel.count({ where: { email: pEmail } });
      if (playerEmail == 0) {
        
        if(req.file){
          var imageOriginalName = req.file.originalname;
          var imageName = req.file.fieldname;
          var imageMime = req.file.mimetype;
          var imagePath = req.file.path;
          var revisedPath = imagePath.replace(/^public\\/, '');  // Regx will remove the word public from file path.
          var imageSize = req.file.size;
      } else {
          var imageName = "noimage.png";
      }    
        //If the email doesn't exists, procced with normal registration here...
        var requestData = {name:pName, email:pEmail, mobile:pMobile, photo: revisedPath, code: code };
        const addRequest = await RequestModel.create(requestData);
        console.log("Server side PUT method log:" + addRequest);
        res.status(200).json({ success: true });
      } else {
        return res.status(409).json({ message: "Email address already exists !" });
      }
    } else {
      return res.status(401).json({ message: "Invalid code provided, please contact admin !" });
    }
  } catch (err) {
    return next(err);
  }
});



(async () => {
  try {
    const sequelizeStatus = await sequelize.sync();
    console.log("your server is up and running");
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (e) {
    console.log(e, 'Database issue.');
  }
})();