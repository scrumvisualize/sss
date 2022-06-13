const express = require('express');
const bodyParser = require("body-parser");
var multer  = require('multer')
var path = require('path');
const moment = require('moment');
const { Sequelize, DataTypes } = require("sequelize");
const requestSchema = require('./server/models/requests');
const userSchema = require('./server/models/user');
const announcementSchema = require('./server/models/announcement');
const playerofMonthSchema = require('./server/models/playerofmonth');


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
const UserModel = userSchema(sequelize, DataTypes);
const AnnouncementModel = announcementSchema(sequelize, DataTypes);
const PlayerOfMonthModel = playerofMonthSchema(sequelize, DataTypes);

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
    cb(null, '../public/images')
  },
  filename: function (req, file, cb) {
    var ext = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  }
})

var upload = multer({ storage: storage });

// This service method is used to send a PUT request for a player who wish to join the club via send Request button in Home screen.

app.put('/service/joinrequest',  upload.single('photo'), async (req, res, next) => {
  try {
    const code = req.body.code;
    const pName = req.body.name;
    const pEmail = req.body.email; 
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


// This method is used only for admin user to login to admin panel to approve player requests.

app.post('/service/login', async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const adminUser = await UserModel.findAll({ where: { email: userEmail } });
    console.log("Log Admin:" + adminUser);
    if (adminUser == null || adminUser == '') {
      console.log("Check login user is null:" + adminUser);
      res.status(403).json({ fail: "Invalid admin user details !" });
    }
    const email = adminUser[0].email;
    const password = adminUser[0].password;
    console.log("Ghaaa"+ email + password);
    if (password === userPassword && email === userEmail) {
      //const role = adminUser[0].role; // if role is needed in future, please send along with res json()
      res.status(200).json({ success: true });
    } else {
      res.status(403).json({ fail: "Email or Password is incorrect !" });
    }
  } catch (e) {
    res.status(500).json();
  }
});


/* Below get method will display all of the player requests in the admin screen, so admin can act upon it */ 

app.get('/service/requestlist', async (req, res) => {
  try {
    const requests = await RequestModel.findAll({});
    requests.map(req => {
      req.setDataValue("processRequest", "Accept");
      return req;
  })
    res.status(200).json({ requests });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/* When admin user accepts a player, below post request will set status to "Yes" in the status colum */ 

app.post('/service/acceptplayerrequest', async (req, res) => {
  try {  
    const pEmail = req.body.email;
    var updateStatus =  "Yes";
    const pStatus = await RequestModel.update(
      { status : updateStatus },
      { where: { email: pEmail } }
      );   
    console.log("Server side to accept player :" + pStatus);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});


/* When admin user decline a request, below post request will set status to "No" in the status colum */ 

app.put('/service/declinerequest', async (req, res) => {
  try {  
    const pEmail = req.body.email;
    var updateStatus =  "No";
    const pStatus = await RequestModel.update(
      { status : updateStatus },
      { where: { email: pEmail } }
      );   
    console.log("Server side to decline request :" + pStatus);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});


/* Below service will get the active list of player in the team /squad page  */ 
app.get('/service/activesquadlist', async (req, res) => {
  try {
    const active = await RequestModel.findAll(
      { where: { status : "Yes" } }
    );
    res.status(200).json({ active });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/* Below service will create news data in the announcement table */ 
app.post('/service/announcement', async (req, res) => {
  try {
    const loginEmail = req.body.email;
    const newsInput = req.body.data.newsUpdate;
    var newsData = { email:loginEmail, news:newsInput };
    const newsReq = await AnnouncementModel.create(newsData);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});


/* Below get method will get all the news data from announcement table and dispay in the Home page */ 

app.get('/service/getannouncementdata', async (req, res) => {
  try {
    const requests = await AnnouncementModel.findAll({});
    res.status(200).json({ requests });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});


/* Below post service is to set the player of the month by an admin user */ 

app.post('/service/add/playerofmonth', async (req, res) => {
  try {
    const plyName = req.body.data.name;
    const plyPhoto = req.body.data.photo;
    const plyEmail = req.body.data.email;
    var playerData = { name: plyName, email:plyEmail, photo:plyPhoto };
    const plydata = await PlayerOfMonthModel.create(playerData);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
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