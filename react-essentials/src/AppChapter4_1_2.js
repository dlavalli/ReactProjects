import logo from './logo.svg';
import './App.css';

function SecretComponent() {
  return (
    <h1>Secret Component for Authorized Personnel Only</h1>
  );
}

function RegularComponent() {
  return (
    <h1>Component Accessible to ALL</h1>
  );
}



// This is the main component that will be added to our root element ID in the DOM
// The name App  must match exactly with the <App />  tag in the ReactDOM.render(...) call
function App( {authorized} ) {
  /* More verbose way to condition over, assume use of props as argument
  if (props.authorized) {
    return(<SecretComponent />);
  } else {
    return(<RegularComponent />);
  }
  */
  
  // Shortand version of condition over
 return (
   <>
     { authorized ? <SecretComponent /> : <RegularComponent /> }
     </>
 );
}

export default App;
