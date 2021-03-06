var mongoose = require('mongoose'),
autoIncrement = require('mongoose-auto-increment');

var TypeSchema = mongoose.Schema({
   name:  { type: String, required: true, unique: true },
   color:  { type: String, required: true, unique: true },
   icon: {type: String}
});

TypeSchema.plugin(autoIncrement.plugin, 'Type');
var Type = mongoose.model('Type', TypeSchema);

module.exports = Type;
