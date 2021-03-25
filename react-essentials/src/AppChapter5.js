import Reat, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

// This is the main component that will be added to our root element ID in the DOM
// The name App  must match exactly with the <App />  tag in the ReactDOM.render(...) call


// So this is kind of the breakdown of every one of these asynchronous calls to an API.
// We have a loading state where we're waiting on some data, We have a complete state where
// we have the data that we want, like here. And then we may have an error state, if there is
// some sort of a problem. Handling all of these States adds a little bit more code, but handling them
// is really essential. Because it's going to help us to track down any sort of problems,
// or handle latency with loading.
  
  function App({login} ) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Will trigger just ONCE is the second array is empty because we want to fetch data once the component renders
  useEffect(() => {
    if (!login) return; // useEffect not available until we are loading
    setLoading(true);
    
    // fetch returns a Promise<Response>
    fetch(`https://api.github.com/users/${login}`)
      .then(response =>response.json())
      .then(setData)
      .then(() => setLoading(false))// Do not re-execut after updating the data
      .catch(setError);
  }, [login]);
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    // Display the erros, no reducer function needed and insert 2 white space for readability between fields
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }
  
  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img src={data.avatar_url} alt={data.login}/>
      </div>
    );
  }
  
  return (<div>No user Available</div>);
}

export default App;
