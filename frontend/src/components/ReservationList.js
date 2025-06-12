import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);
    const [tableId, setTableId] = useState('');

    useEffect(() => {
        fetchReservations();
    }, [tableId]);

    const fetchReservations = async () => {
        try {
            const response = await axios.get(`/api/reservations?tableId=${tableId}`);
            setReservations(response.data);
        } catch (err) {
            setError('Error fetching reservations');
        }
    };

    const handleTableChange = (event) => {
        setTableId(event.target.value);
    };

    return (
        <div>
            <h2>Reservation List</h2>
            <select onChange={handleTableChange} value={tableId}>
                <option value="">Select a Table</option>
                {/* Add options for tables here */}
            </select>
            {error && <p>{error}</p>}
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        {reservation.name} - {reservation.date} at {reservation.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;