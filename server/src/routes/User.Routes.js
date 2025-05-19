const UserRoutes = require("../controllers/User.Controller");
const router = require("express").Router();
const authMiddleware = require("../middleware/Auth.Middleware");

router.post("/register", UserRoutes.register);
router.post("/login", UserRoutes.login);
router.post("/logout", UserRoutes.logout);
router.get("/user-details", authMiddleware, UserRoutes.userDetails);

module.exports = router;
