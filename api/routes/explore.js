const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

// Controllers
const {
oxygen_get,oxygen_post
} = require("../controllers/explore");


router.route("/:lead_type").post(oxygen_post);
// router.route("/:lead_type/:postid").get(oxygenpost_get);

router.route("/:lead_type").get(oxygen_get);
router.route("/:lead_type/:postid").get(protect,oxygen_get);
// router.route("/:lead_type/:category/:postid").get(oxygenpost_get);




module.exports = router;
