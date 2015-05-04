var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Retrieves all data from the database */
router.get('/dblist', function(req, res) {
	var db = req.db;
	var collection = db.model('User');
	collection.find({},{},function(e,docs){
		res.render('dblist', {
			"dblist" : docs
		});
	});
});

/* GET New User page. */
router.get('/register', function(req, res) {
	res.render('register', { title: 'Add New User' });
});

/* POST to database */
router.post('/dbpost', function(req, res) {
    // Set our internal DB variable
    var db = req.db;
    var User = db.model('User');

    // Get our form values.
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var userPassword = req.body.password;

    // Submit to the DB
    var user = new User({
    	"username" : userName,
    	"email" : userEmail,
    	"password" : userPassword
    });
    user.save(function (err, doc) {
    	if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("dblist");
            // And forward to success page
            res.redirect("dblist");
        }
    });
});

module.exports = router;
