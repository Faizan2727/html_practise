const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const FILES_DIR = path.join(__dirname, 'files');

// Endpoint to get the list of files in the directory
app.get('/files', (req, res) => {
  fs.readdir(FILES_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read files directory' });
    }
    res.status(200).json(files);
  });
});

// Endpoint to get the content of a specific file
app.get('/files/:filename', (req, res) => {
  const filePath = path.join(FILES_DIR, req.params.filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send('File not found');
      }
      return res.status(500).json({ error: 'Failed to read file' });
    }
    res.status(200).send(data);
  });
});

// Handle undefined routes with a 404 response
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
