const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/", apiRoutes);

// Logout and destroy session
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    !err ? res.clearCookie('connect.sid', {path: '/'}).sendStatus(200) : console.log('Error from session destroy:', err);
  });
});

module.exports = router;
