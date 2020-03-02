const express = require('express');
const accountRoutes = require('./routes/accounts');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/accounts', accountRoutes);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "There was an internal server error.",
	})
})

module.exports = server;