import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting";

describe('Greeting component', () => {

  // A test of the suite
  test('renders hello world as a text', () => {
    // Arrange : Render the greeting component (argument is JSX code)
    render(<Greeting />);
    
    // Act : No required here
    
    // Assert : Look at the dom, select an element by text annd if we find such element it pass the test else fail it
    // get type functions throw an error if element not gound while find type functions do not
    // screen.findByText('Hello World!');
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();   //testing value  then matcher
  });

});
