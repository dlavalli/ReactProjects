import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// responsible for all of the pages that are part of our app
// I want these components to display when I go to certain routes in my website.
// Note that the router lives in the Index.js file, this is where we're going to pass
//      all of the information from the router to any nested components.

export function Home() {
  // The to="route"  refers to an actual url path we defined
  return(
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        &nbsp;
        <Link to="events">Events</Link>
        &nbsp;
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

// So the About is kind of this parent route then we nest other information
// underneath that for this nested data. So like company information, location information,
// it's all really part of that about section, but we're going to list it
// on the same page as a subsection
export function About() {
  return(
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Services() {
  return(
    <div>
      <h2>Our Services</h2>
    </div>
  );
}

export function CompanyHistory() {
  return(
    <div>
      <h2>Our Company History</h2>
    </div>
  );
}

export function Location() {
  return(
    <div>
      <h2>Our Location</h2>
    </div>
  );
}

export function Events() {
  return(
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return(
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Woops404() {
  let location = useLocation();
  return(
    <div>
      <h1>Resource not found at {location.pathname}!</h1>
    </div>
  );
}