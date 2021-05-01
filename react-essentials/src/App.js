import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Home,
  About,
  Events,
  Contact,
  Woops404,
  Services,
  CompanyHistory,
  Location
} from './pages';

/*
// Original version of the code to use with Jest library testing
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*
// For chapter 6 testing
function App() {
  return (
    <div>
      <h1>Hello React Testing Library</h1>
    </div>
  );
}
*/

function App() {
  return (
    // So these routes are going to tell the router, which component to render whenever the location changes
    // refer to https://dev.to/mconner89/react-router-52pk for more info on Route/Outlet
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} >
          <Route path="/services" element={<Services />}/>
          <Route path="/history" element={<CompanyHistory />}/>
          <Route path="/location" element={<Location />}/>
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Woops404 />}/>
      </Routes>
    </div>
  );
}

export default App;
