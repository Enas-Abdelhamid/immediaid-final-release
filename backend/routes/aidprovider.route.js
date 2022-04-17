const express = require('express');
const app = express();
const aidproviderRoute = express.Router();
// AidProvider model
let Aidprovider = require('../models/Aidprovider');
// Add AidProvider
aidproviderRoute.route('/create').post((req, res, next) => {
  Aidprovider.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All AidProviders
aidproviderRoute.route('/').get((req, res) => {
  Aidprovider.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single aid provider
aidproviderRoute.route('/read/:id').get((req, res) => {
  Aidprovider.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update aid provider
aidproviderRoute.route('/update/:id').put((req, res, next) => {
  Aidprovider.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete aid provider
aidproviderRoute.route('/delete/:id').delete((req, res, next) => {
  Aidprovider.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = aidproviderRoute;