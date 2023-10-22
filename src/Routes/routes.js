const express = require('express');
const router = express.Router();
const userController = require('../userController/userController');

//Dashboard APIs
router.post("/insert", userController.insert);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete)
router.get("/getbyId/:id", userController.getByCommId);
router.get("/getall",userController.getAll);
module.exports = router;
