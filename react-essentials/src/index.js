import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';


// ReactDOM.render takes the elements that we create, and add them to our DOM,
// the first argument that it takes in is the element that we want to create.
//      So I can say React.createElement. Then I pass in the name of the tag that I want to create.
//      Then I pass in any properties that I want to create
// The second argument that we send is where we want to put it. So in other words, where in our HTML document
//      that's in this public folder should I inject our React code
// The second line specify to insert the tag above inthe element with the specified ID in the DOM (ie: html documents index.html)

// Example 1
// React.createElement("h1", {style: {color: 'blue'}}, "Text message to display"),

// Example 2 : This works but difficult as the page / nesting grows
//React.createElement("ul", null,
//    React.createElement("li", null, "Monday"),
//    React.createElement("li", null, "Tuesday"),
//    React.createElement("li", null, "Wednesday"),
//    React.createElement("li", null, "Thursday")),

// AppChapter 3 Rendering
// ReactDOM.render(<App />, document.getElementById('root') );

// AppChapter 4.1 & 4.2 Rendering
//. ReactDOM.render(<App authorized={true}/>, document.getElementById('root') );

// AppChapter 4.3, 4.4 && 4.5 Rendering
// ReactDOM.render(<App />, document.getElementById('root') );

// AppChapter 4.3, 4.4 && 4.5, && 5 Rendering
// ReactDOM.render(<App login="dlavalli" />, document.getElementById('root') );

// AppChapter 7 Rendering
// By enclosing the appp withing <Router> tags, we give access to all router information
// which gives the app access to all the properties of the router. So the location, the history,
// things like that, all of that's going to to live in the router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);