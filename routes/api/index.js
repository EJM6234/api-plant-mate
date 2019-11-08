const router = require("express").Router();
const plantRoutes = require("./plantRoutes");
const waterSensorRoutes = require("./waterSensorRoutes");
const {plantController} = require('../../controllers');

//API routes
router.use("/plants", plantRoutes);
router.use("/water-sensors", waterSensorRoutes);

router.get("/health", plantController.health);

module.exports = router;
