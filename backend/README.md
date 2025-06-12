# Restaurant Reservation Management Application

## Overview

This project is a comprehensive reservation management application designed for restaurants. It allows users to make reservations, leave comments, and manage tables efficiently. The application is built using Express.js for the backend and React.js for the frontend.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is responsible for handling API requests and managing data. It is structured as follows:

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the logic for handling requests related to comments, reservations, and tables.
    - `commentController.js`: Functions for creating and retrieving comments.
    - `reservationController.js`: Functions for managing reservations.
    - `tableController.js`: Functions for handling table-related operations.
  - **models/**: Defines the data models and their relationships.
    - `Comment.js`: Schema for comments.
    - `Reservation.js`: Schema for reservations.
    - `Table.js`: Schema for tables.
    - `User.js`: Schema for users.
  - **routes/**: Sets up the API routes and links them to the corresponding controllers.
    - `commentRoutes.js`: Routes for comment-related API endpoints.
    - `reservationRoutes.js`: Routes for reservation-related API endpoints.
    - `tableRoutes.js`: Routes for table-related API endpoints.
  - `app.js`: Entry point of the application, initializes the Express app and middleware.
  - **config/**: Contains configuration files.
    - `db.js`: Database configuration and connection logic.

### Frontend

The frontend is responsible for the user interface and user interactions. It is structured as follows:

- **src/**: Contains the source code for the frontend application.
  - **components/**: Contains React components for various functionalities.
    - `AddReservation.js`: Component for adding a new reservation.
    - `ReservationList.js`: Component for displaying a list of reservations.
    - `CommentForm.js`: Component for submitting comments.
  - `App.js`: Main entry point for the frontend application.
  - **api/**: Contains functions for making API calls.
    - `reservationApi.js`: Functions for adding reservations and filtering them.

## Installation

To set up the backend, navigate to the `backend` directory and run:

```
npm install
```

To set up the frontend, navigate to the `frontend` directory and run:

```
npm install
```

## Running the Application

To start the backend server, run the following command in the `backend` directory:

```
npm start
```

To start the frontend application, run the following command in the `frontend` directory:

```
npm start
```

## API Endpoints

The backend exposes the following API endpoints:

- **Reservations**
  - `POST /api/reservations`: Create a new reservation.
  - `GET /api/reservations/table/:tableId`: List reservations by table.

- **Comments**
  - `POST /api/comments`: Post a new comment.

- **Tables**
  - `GET /api/tables`: Retrieve table information.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.