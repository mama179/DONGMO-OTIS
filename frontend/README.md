# Restaurant Reservation Application

## Overview

The Restaurant Reservation Application is a full-stack web application designed to manage restaurant reservations efficiently. It allows users to create reservations, view existing reservations, and leave comments on their experiences. The application is built using Express.js for the backend and React.js for the frontend.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

- **src**: Contains the source code for the backend application.
  - **controllers**: Contains the logic for handling requests related to comments, reservations, and tables.
    - `commentController.js`: Handles comment-related operations.
    - `reservationController.js`: Manages reservations.
    - `tableController.js`: Handles table-related operations.
  - **models**: Defines the data models and their relationships.
    - `Comment.js`: Defines the Comment model.
    - `Reservation.js`: Defines the Reservation model.
    - `Table.js`: Defines the Table model.
    - `User.js`: Defines the User model.
  - **routes**: Sets up the API endpoints for the application.
    - `commentRoutes.js`: Routes for comment-related API endpoints.
    - `reservationRoutes.js`: Routes for reservation-related API endpoints.
    - `tableRoutes.js`: Routes for table-related API endpoints.
  - `app.js`: Entry point of the backend application.
  - **config**: Contains configuration files.
    - `db.js`: Database configuration and connection logic.
- `package.json`: Lists dependencies and scripts for the backend project.
- `README.md`: Documentation specific to the backend project.

### Frontend

- **src**: Contains the source code for the frontend application.
  - **components**: Contains React components for the application.
    - `AddReservation.js`: Component for adding a new reservation.
    - `ReservationList.js`: Component for displaying a list of reservations.
    - `CommentForm.js`: Component for submitting comments.
  - `App.js`: Main entry point for the frontend application.
  - **api**: Contains functions for making API calls.
    - `reservationApi.js`: Functions for reservation-related API calls.
- `package.json`: Lists dependencies and scripts for the frontend project.
- `README.md`: Documentation specific to the frontend project.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB or any other database configured for the backend.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd restaurant-reservation-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend (or whichever port you have configured).

## Features

- Create and manage reservations.
- View reservations filtered by table.
- Leave comments on reservations.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.