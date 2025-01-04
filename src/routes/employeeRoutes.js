const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeController.js");

router.post("/", employeeController.createEmployee);
router.get("/", employeeController.getAllDataEmployee);
router.get("/:id", employeeController.getDetailEmployee);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
