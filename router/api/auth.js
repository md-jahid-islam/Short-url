const express = require('express');
const registration = require('../../controllers/auth/Registration');
const loginUser = require('../../controllers/auth/Login');
const authRoute = express.Router();

authRoute.post("/registration", registration)

authRoute.post("/login", loginUser)

module.exports = authRoute;