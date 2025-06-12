const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    }]
}, { timestamps: true });

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;