const express = require('express');
const router = express.Router();
const printingController = require('../controllers/PrintingController');

router.use(express.json());

router.get('/document/:id', printingController.getDocumentByStudentID);

router.get('/all', printingController.retrieveAllDocumentOrder);

module.exports = router;