const express = require("express")

const router = express.Router();

const {VerifyToken} = require("../middleware/VerifyTokenMiddleware")

router.get("/", VerifyToken, (req, res) => {
    res.json({
        message: "welcome to the dashboard",
        user: req.user
    }) })


module.exports = router