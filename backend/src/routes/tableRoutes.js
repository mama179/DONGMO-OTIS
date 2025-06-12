const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

// Route to get all tables
router.get('/', tableController.getAllTables);

// Route to get a specific table by ID
router.get('/:id', tableController.getTableById);

// Route to create a new table
router.post('/', tableController.createTable);

// Route to update a table by ID
router.put('/:id', tableController.updateTable);

// Route to delete a table by ID
router.delete('/:id', tableController.deleteTable);

module.exports = router;