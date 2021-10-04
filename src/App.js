
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/service'>
            <Service></Service>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
