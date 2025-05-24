const router = require("express").Router();
const Note = require("../controllers/Note.Controller");

router.get("/getNotes", Note.getUserNotes);
router.post("/addNotes", Note.addNote);

module.exports = router;
