const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");
const dateLog = require("../middleware/dateLog");

router.use(dateLog);

//GET

router.get("/", dataController.getAll);
router.get("/:id", dataController.getOne);

//POST

router.post("/", dataController.create);


//DELETE

router.delete("/:id", dataController.remove);

module.exports = router;