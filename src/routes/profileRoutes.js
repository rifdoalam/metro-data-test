const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController.js");

router.post("/", profileController.createProfile);
router.get("/:employee_id", profileController.showProfile);
router.put("/:employee_id", profileController.updateProfile);
router.delete("/:employee_id", profileController.deleteProfile);

module.exports = router;
