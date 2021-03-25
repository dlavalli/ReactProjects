import Reat, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

// This is the main component that will be added to our root element ID in the DOM
// The name App  must match exactly with the <App />  tag in the ReactDOM.render(...) call
function App( ) {
  // Need to used Array destructuring with useState
  // the function is ususally in the form   setVariable  where Variable is the 1st argument of the array
  // The variable can be of any type
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  
  //useEffect(() => {
  //  console.log(`It's ${emotion} around here`);
  //}, [emotion]);
  
  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);
  
  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary]);
  
  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthousiastic")}>Enthousiastic</button>
    </>
  )
}

export default App;
