var User; //Name of global schema
exports.configure = function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var collection = '' //Insert name of collection
	var userSchema = new Schema({
		// Add schema
		}, {collection : collection}); // Name of the collection in the db
	var modelName = ''; // Insert name of model
	mongoose.model(modelName, userSchema);
	User = mongoose.model(modelName);
}