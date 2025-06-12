const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Create a reservation
router.post('/', reservationController.createReservation);

// List reservations by table
router.get('/table/:tableId', reservationController.listReservationsByTable);

module.exports = router;