const router = require("express").Router();
const { plantController } = require("../../controllers");

router.get("/", plantController.getAllPlants);
router.get("/:id", plantController.getPlantById);
router.post("/", plantController.createPlant);
// router.put("/", plantController.updatePlants);
router.patch("/:id", plantController.updatePlant);
router.delete("/:id", plantController.deletePlant);

module.exports = router;
