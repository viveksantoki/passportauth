var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var session = require('express-session');
var FacebookStrategy = require('passport-facebook');
var passport = require('passport');

var  APP_ID = '2240235066220112',
  APP_SECRET = 'dc8a74702f2bacf2da2af34152fcbebd';

var fbopt = {

    clientID : APP_ID,
   clientSecret : APP_SECRET,
    callbackURL : 'http://localhost:8080/auth/facebook/callback'
};

app.use(bodyparser.json());
app.use(session({
    secret : 'vivek',
    resave : true,
    saveUninitialized : true
}));


 var fbCallBack = function(accessToken,refreshToken,profile,cb){
      console.log(accessToken,refreshToken,profile,cb);
 };
 app.route('/').get(passport.authenticate('facebook'));

 passport.use(new FacebookStrategy(fbopt,fbCallBack ));
 

app.route('/').get(function(req,res){

        res.send('Hello worldkkkkk');
});

app.route('/').get(passport.authenticate('facebook'));
app.route('/auth/facebook/callback').get(function(req,res){

        res.send('ok go')
});

 app.listen(8080);