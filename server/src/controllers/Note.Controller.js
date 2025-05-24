const Note = require("../models/Note.Model");
const User = require("../models/User.Model");

const getUserNotes = async (req, res) => {
  try {
    const { user } = req;
    const userId = user.id;

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const notes = await Note.find({ userId });
    return res
      .status(200)
      .json({ message: "Notes Fetched Successfully", notes });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: "All Fields Are Required" });
    }
    const { user } = req;
    const userId = user.id;
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const newNote = new Note({
      title,
      description,
      userId,
    });
    await newNote.save();
    return res
      .status(201)
      .json({ message: "note Added Successfully", note: newNote });
  } catch (error) {
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

module.exports = { getUserNotes, addNote };
