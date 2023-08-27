const express = require("express");
const authMiddelware = require('../middlewares/authMiddelware');
const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonarController } = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//get donar list
router.get(
    '/donar-list', 
    authMiddelware, 
    adminMiddleware, 
    getDonarsListController
    );

//get hospital list
router.get(
    '/hospital-list', 
    authMiddelware, 
    adminMiddleware, 
    getHospitalListController
    );


//get org list
router.get(
    '/org-list', 
    authMiddelware, 
    adminMiddleware, 
    getOrgListController
    );


//delete donar
router.delete(
    '/delete-donar/:id', 
    authMiddelware, 
    adminMiddleware, 
    deleteDonarController
    );

module.exports = router;