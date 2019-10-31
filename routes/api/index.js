const router = require("express").Router();
const plantRoutes = require("./plantRoutes");
const waterSensorRoutes = require("./waterSensorRoutes");

//API routes
router.use("/plants", plantRoutes);
router.use("/water-sensors", waterSensorRoutes);

module.exports = router;
