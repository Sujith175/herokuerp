const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationsSchema = new Schema({

   name :{
       type: String
   }

}
);

const locations = mongoose.model('locations',LocationsSchema);

module.exports = locations;