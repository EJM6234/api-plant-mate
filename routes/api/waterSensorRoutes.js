const router = require("express").Router();
const { waterSensorController } = require("../../controllers");

router.get("/", waterSensorController.getAllWaterSensors);
router.get("/:id", waterSensorController.getWaterSensorById);
router.post("/", waterSensorController.createWaterSensor);
// router.put("/", waterSensorController.updateWaterSensors);
router.patch("/:id", waterSensorController.updateWaterSensor);
router.delete("/:id", waterSensorController.deleteWaterSensor);

module.exports = router;
