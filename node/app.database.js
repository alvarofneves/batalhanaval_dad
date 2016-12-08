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

        /*db.createCollection('test_collection_is_capped', {'capped':true, 'size':1024}, function(err, collection) {
    		test.equal('test_collection_is_capped', collection.collectionName);
    	
    		db.close();
    	});*/

        // testar inserir 1
        /*createPlayer(request, response, next) {
        	console.log('a inserir 1 jogador....');
        }  */ 

        //db.close();      
};
