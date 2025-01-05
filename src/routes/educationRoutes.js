const express = require("express");

const router = express.Router();

const educationController = require("../controllers/educationController.js");

router.post("/", educationController.createEducation);
router.get("/", educationController.getEducationEmployee);
router.put("/:id", educationController.updateEducation);
router.delete("/:id", educationController.deleteEducation);

module.exports = router;
