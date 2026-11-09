const fs = require("node:fs");
const FILE = "notes.json";

const command = process.argv[2];
const argument = process.argv[3];

// Read existing notes
function getNotes() {
    if (!fs.existsSync(FILE)) {
        return [];
    }

    const data = fs.readFileSync(FILE, "utf8");

    return JSON.parse(data);
}

// Save notes
function saveNotes(notes) {
    fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
}

// Add a new note
function addNote(note) {
    if (!note) {
        console.log("Please provide a note to add.");
        return;
    }

    const notes = getNotes();

    const newId = notes.length === 0
        ? 1
        : Math.max(...notes.map(note => note.id)) + 1;

    notes.push({
        id: newId,
        content: note
    });

    saveNotes(notes);

    console.log("Note added successfully!");
}

// Display all notes
function listNotes() {
    const notes = getNotes();

    if (notes.length === 0) {
        console.log("You have no saved notes.");
        return;
    }

    console.log("\nYour Notes:\n");

    notes.forEach((note) => {
        console.log(`ID: ${note.id}`);
        console.log(`Note: ${note.content}`);
    });
}

// Delete a note
function deleteNote(id) {
    if (!id) {
        console.log("Please provide the ID of the note to delete.");
        return;
    }

    const notes = getNotes();

    const updatedNotes = notes.filter(
        (note) => note.id !== Number(id)
    );

    if (updatedNotes.length === notes.length) {
        console.log("Note not found.");
        return;
    }

    saveNotes(updatedNotes);
    console.log("Note deleted successfully!");
}

// Handle commands
if (command === "add") {
    addNote(argument);
} else if (command === "list") {
    listNotes();
} else if (command === "delete") {
    deleteNote(argument);
} else {
    console.log("Invalid command.");
    console.log("Available commands: add, list, delete");
}
