import React from "react";
import "./assets/scss/style.scss";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import LoginPage from "pages/LoginPage";
import BerandaPage from "pages/BerandaPage";
import BookingPage from "pages/BookingPage";
import AntrianBankPage from "pages/AntrianBankPage";
import DaftarBank from "pages/DaftarBank";
import axios from "axios";

axios.defaults.baseURL = "http://backend-b-queue-management.digitalent.rakamin.com/api/";
const PrivateRoute = (props) => {
  const token = localStorage.getItem("token");
  const history = useHistory();
  if (token !== null && token !== undefined) {
    history.push("/beranda");
    return <Route exact={true} path={props.path} component={props.component} />;
  } else {
    return <Redirect to="/" />;
  }
};

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginPage}></Route>
        <PrivateRoute path="/beranda" component={BerandaPage}></PrivateRoute>
        <PrivateRoute
          path="/booking-antrian"
          component={BookingPage}
        ></PrivateRoute>
        <PrivateRoute path="/daftar-bank" component={DaftarBank}></PrivateRoute>
        <PrivateRoute
          path="/detail-antrian-bank/:id"
          component={AntrianBankPage}
        ></PrivateRoute>
      </Router>
    </div>
  );
}

export default App;
