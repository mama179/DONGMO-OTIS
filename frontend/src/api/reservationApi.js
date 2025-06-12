import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reservations';

// Function to create a new reservation
export const createReservation = async (reservationData) => {
    try {
        const response = await axios.post(API_URL, reservationData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to list reservations by table
export const getReservationsByTable = async (tableId) => {
    try {
        const response = await axios.get(`${API_URL}/table/${tableId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to post a comment
export const postComment = async (reservationId, commentData) => {
    try {
        const response = await axios.post(`${API_URL}/${reservationId}/comments`, commentData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};