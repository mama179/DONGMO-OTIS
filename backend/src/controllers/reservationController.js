const Reservation = require('../models/Reservation');
const Table = require('../models/Table');

// Create a new reservation
exports.createReservation = async (req, res) => {
    const { userId, tableId, reservationTime } = req.body;

    try {
        const reservation = new Reservation({
            user: userId,
            table: tableId,
            reservationTime
        });

        await reservation.save();
        res.status(201).json({ message: 'Reservation created successfully', reservation });
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation', error });
    }
};

// List reservations by table
exports.listReservationsByTable = async (req, res) => {
    const { tableId } = req.params;

    try {
        const reservations = await Reservation.find({ table: tableId }).populate('user');
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving reservations', error });
    }
};