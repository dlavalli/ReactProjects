import React from 'react';
import ReactDOM from 'react-dom';

/*
Within the download you'll find the following directories and files,
logically grouping common assets and providing both compiled and minified variations.
You'll see something like this

bootstrap/
└── dist/
    ├── css/
    │   ├── bootstrap-grid.css
    │   ├── bootstrap-grid.css.map
    │   ├── bootstrap-grid.min.css
    │   ├── bootstrap-grid.min.css.map
    │   ├── bootstrap-reboot.css
    │   ├── bootstrap-reboot.css.map
    │   ├── bootstrap-reboot.min.css
    │   ├── bootstrap-reboot.min.css.map
    │   ├── bootstrap.css
    │   ├── bootstrap.css.map
    │   ├── bootstrap.min.css
    │   └── bootstrap.min.css.map
    └── js/
        ├── bootstrap.bundle.js
        ├── bootstrap.bundle.js.map
        ├── bootstrap.bundle.min.js
        ├── bootstrap.bundle.min.js.map
        ├── bootstrap.js
        ├── bootstrap.js.map
        ├── bootstrap.min.js
        └── bootstrap.min.js.map
 */

import 'bootstrap/dist/css/bootstrap.min.css';

import List from './containers/List';

const App = () => {
  return (
    // Display a Navigation bar with a title and a background color
    // and Load out React List Component
    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>MovieList</h1>
      </nav>

      <List />
    </div>
  );
};

// Render the App Component and mount it to an element with the root ID
// in your document which is the entrypoint of the application
ReactDOM.render(<App />, document.getElementById('root'));
