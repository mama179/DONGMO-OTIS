const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reservationRoutes = require('./routes/reservationRoutes');
const commentRoutes = require('./routes/commentRoutes');
const tableRoutes = require('./routes/tableRoutes');
const dbConfig = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/reservations', reservationRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/tables', tableRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});