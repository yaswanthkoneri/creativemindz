import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './Pages/HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import TeamPage from './Pages/TeamPage';
import DevSourcingPage  from './Pages/DevSourcingPage';
import BootCampPage from './Pages/BootCampPage';
import ServicesPage from './Pages/ServicesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header id="myHeader">
          <NavBar />
          </header>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="team" exact path="/team" component={TeamPage}/>
          <Route name="devsourcing" exact path="/devsourcing" component={DevSourcingPage}/>
          <Route name="services" exact path="/services" component={ServicesPage}/>
          <Route name="bootcamp" exact path="/bootcamp" component={BootCampPage}/>

          <Footer/>
        </div>
      </Router>
    )
  }
}
export default App;