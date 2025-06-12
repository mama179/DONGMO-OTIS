import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddReservation from './components/AddReservation';
import ReservationList from './components/ReservationList';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Restaurant Reservation Management</h1>
        <Switch>
          <Route path="/" exact component={ReservationList} />
          <Route path="/add-reservation" component={AddReservation} />
          <Route path="/comments" component={CommentForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;