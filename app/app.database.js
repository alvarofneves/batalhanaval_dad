const MongoClient = require('mongodb').MongoClient;
const db = module.exports = {};

//TODO AS rever nomes 'db'; legendar
db.connect = function (url, callback) {
	MongoClient.connect(url)
        .then(database => {
            db.db = database;
            console.log('Connection established to database %s', url);
            callback();
        })
        .catch(console.error);
};