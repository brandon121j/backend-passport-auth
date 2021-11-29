var express = require('express');
var router = express.Router();
var passport = require('passport');
var { signUp, login } = require('./users/controller/usersController');

router.get(
	'/',
	passport.authenticate('jwt-user', { session: false }),
	function (req, res, next) {
		res.send('respond with a resource');
	}
);

router.post('/sign-up', signUp);

router.post('/login', login);

module.exports = router;
