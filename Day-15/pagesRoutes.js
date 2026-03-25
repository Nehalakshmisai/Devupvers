const express = require("express");
const pagesController = require("../controllers/pagesController");

const router = express.Router();

router.get("/home", pagesController.home);
router.get("/about", pagesController.about);
router.get("/contact", pagesController.contact);

module.exports = router;

