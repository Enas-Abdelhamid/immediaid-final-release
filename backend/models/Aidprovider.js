const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Aidprovider = new Schema({
   name: {
      type: String
   },
   location: {
      type: String
   },
   aidtype: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'aidproviders'
})
module.exports = mongoose.model('Aidprovider', Aidprovider)