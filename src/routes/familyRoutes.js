const express = require("express");

const router = express.Router();

const familyController = require("../controllers/familyController.js");

router.post("/", familyController.createFamily);
router.get("/:id", familyController.showFamily);
router.put("/:id", familyController.updateFamily);
router.delete("/:id", familyController.deleteFamily);
module.exports = router;
