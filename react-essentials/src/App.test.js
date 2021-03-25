/*
// Jest Library based testing code
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */

// What we really want to test here, is that de generate html content meets the expectations
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// An example of text on component rendering
test(
  "renders an h1",      // The test name
  () => {                 //  A callback function to do the testing
    // And we're going to use this syntax here. We're going to say, getByText.
    // We're going to de-structure this from calling render with the App
  
    // So what this is called is a query. With React Testing Library, a query
    // is going to reach out to some sort of element and return some information about it.
    // So, just like we had expect with Jest, this is how we're going to do this
    // with React Testing Library
    
    // See https://testing-library.com/docs/react-testing-library/cheatsheet/#queries
    // for other options such as getByText
    const { getByText } = render(<App />);
    
    // Find the h1 passing a regular expression matching the expected text in hour case
    const h1 = getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library");
  }
);
