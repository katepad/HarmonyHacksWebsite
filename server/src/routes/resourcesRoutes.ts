import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/resources', (req, res) => {
  const filePath = path.join(__dirname, '../data/resources.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).json({ error: 'Unable to read resources.' });
    }
    res.json(JSON.parse(data));
  });
});

export default router;
