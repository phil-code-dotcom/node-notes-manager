
# Node.js Notes Manager

A simple command-line Notes Manager built with Node.js. It allows users to add, view, and delete notes directly from the terminal, with all notes stored locally in a JSON file.

## Features

- Add new notes.
- View all saved notes.
- Delete notes using their IDs.
- Automatically assign sequential IDs (1, 2, 3, ...).
- Store notes permanently in a JSON file.
- Validate user input and handle invalid commands.

## Technologies Used

- Node.js
- JavaScript
- JSON
- Node.js File System (fs) module

## Project Structure

```text
notes-manager/
├── notes.js
├── notes.json
└── README.md
```

## Getting Started

### Prerequisites

Ensure that Node.js is installed on your computer.

[Download Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd notes-manager
   ```

3. Make sure `notes.json` exists and contains an empty array:

   ```json
   []
   ```

## Usage

Run the following commands from your terminal.

### 1. Add a Note

```bash
node notes.js add "Learn Node.js"
```

### 2. List All Notes

```bash
node notes.js list
```

### 3. Delete a Note

Use the ID displayed when listing your notes:

```bash
node notes.js delete 1
```

### 4. Invalid Command

```bash
node notes.js update
```

The application will display the available commands.

## Data Storage

Notes are stored in `notes.json` as an array of objects.

Example:

```json
[
  {
    "id": 1,
    "content": "Learn Node.js"
  },
  {
    "id": 2,
    "content": "Practise JavaScript"
  }
]
```

## Concepts Practised

Through this project, I practised:

- Understanding the Node.js runtime environment.
- Using `process.argv` to handle command-line arguments.
- Importing built-in modules using `require()`.
- Reading and writing files with the `fs` module.
- Checking file existence with `fs.existsSync()`.
- Converting JSON strings into JavaScript data using `JSON.parse()`.
- Converting JavaScript data into JSON using `JSON.stringify()`.
- Working with arrays and objects.
- Creating and using functions.
- Using array methods such as `push()`, `forEach()`, `filter()`, and `map()`.
- Implementing conditional statements and input validation.

## Project Goal

This project was built as a practical introduction to Node.js and command-line application development. It demonstrates how JavaScript can interact with the file system to create and manage persistent data without using external packages.

## Author

**Philip Ajik**
