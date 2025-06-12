const Table = require('../models/Table');

// Get all tables
exports.getAllTables = async (req, res) => {
    try {
        const tables = await Table.find();
        res.status(200).json(tables);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tables', error });
    }
};

// Get a table by ID
exports.getTableById = async (req, res) => {
    const { id } = req.params;
    try {
        const table = await Table.findById(id);
        if (!table) {
            return res.status(404).json({ message: 'Table not found' });
        }
        res.status(200).json(table);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving table', error });
    }
};