//route used to check a user

const express = require ('express');
const router = express.Router();
const {getPrivateData} = require('../controllers/private');
const { protect} = require('../middleware/auth');

router.route("/home").get(protect,getPrivateData);  // if we dont pass JWT it wont pass to next route(use of protect function in middleware auth)
module.exports = router;