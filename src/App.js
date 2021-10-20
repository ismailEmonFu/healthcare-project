import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Pages/Shared/Footer/Footer';
import Banner from './Pages/Shared/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import Features from './Pages/Home/Features/Features';
import Emergency from './Pages/Home/Emergency/Emergencey';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Facility from './Pages/Home/Facility/Facility';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/features">
              <Features></Features>
            </PrivateRoute>
            <Route path="/emergency">
              <Emergency></Emergency>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/facilities">
              <Facility></Facility>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
