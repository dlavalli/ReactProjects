import Reat, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

// This is the main component that will be added to our root element ID in the DOM
// The name App  must match exactly with the <App />  tag in the ReactDOM.render(...) call
function App( ) {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );
  
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked ? "checked" : "unchecked"}</p>
    </>
  )
}

export default App;
