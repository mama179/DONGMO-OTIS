import React, { useState } from 'react';
import axios from 'axios';

const AddReservation = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [tableId, setTableId] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name || !date || !time || !tableId) {
            setError('All fields are required.');
            return;
        }

        try {
            const response = await axios.post('/api/reservations', {
                name,
                date,
                time,
                tableId,
            });
            console.log('Reservation added:', response.data);
            // Reset form fields
            setName('');
            setDate('');
            setTime('');
            setTableId('');
        } catch (err) {
            console.error('Error adding reservation:', err);
            setError('Failed to add reservation. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add Reservation</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Table ID:</label>
                    <input
                        type="text"
                        value={tableId}
                        onChange={(e) => setTableId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Reservation</button>
            </form>
        </div>
    );
};

export default AddReservation;