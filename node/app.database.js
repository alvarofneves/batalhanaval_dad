const MongoClient = require('mongodb').MongoClient;
const db = module.exports = {};

//TODO AS rever nomes 'db'; legendar
db.connect = function (url, callback) {
	MongoClient
		.connect(url)
        .then(database => {
            console.log('Connection established to database %s', url);
            db.db = database;
            callback();
        })
        .catch(console.error);
};

// db.close();   TODO qd fz isto?