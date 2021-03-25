import logo from './logo.svg';
import './App.css';

// Note that resources to import must be within a directory/subdirectory of src else you get the error:
//      Module not found: You attempted to import ../public/avatar.jpg which falls outside of the project src/ directory.
//      Relative imports outside of src/ are not supported.
import avatar from './avatar.jpg';

// 1- break everything down into little chunks. Like if I have to display a list, let me make sure I can map over it first, before adding it to a component
// 2- make the data available to the component

const dishes = [
  "Macaroni & Cheese",
  "Salmon",
  "Chicken"
];

// A transformation function that assign a key to each element of the array
//  And this is going to map over the dishes and then for each dish, we're going to return an object and
//  whenever we return an object from a function like this, in line, we need to wrap it in parenthesis
//  NOTE: Do not put {}  around ({id: i, title: dish})  in such case else you will get an erro that say
//        Expected an assignment or a function but got an expression
const dishObject = dishes.map((dish, i) => ({id: i, title: dish}) );

//  Every react component has access to this object called props.
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s office'</h1>
    </header>
  )
}



// NOTE: The style is attached directly to the tag to show what can be done
//       but it normally would be be inside the App.css file that was provided

// NOTE: In a list, every item must have a unique key to identify it uniquely
//       In theory we could add  (dish,i)  and do <li key={i}> but that can cause issue when rendering
//        So what we can do instead, is we can adjust our dishes array to instead of returning these strings,
//        we can return objects. So all we need to do here is we need to write a little transformation function (see above)

// img src van also be a url and would  be set as:  src="{http://github.com/yourname/yourresource.jpg}" instead of  src={avatar}
function Main(props) {
  return (
    <section>
      <p>Dan has {props.adjective} dishes </p>
      <img src={avatar} alt="avatar" height={200}/>
      <ul style={{textAlign: "left"}}>
      {
        props.dishes.map((dish) =>
          <li key={dish.id}>{dish.title}</li>
        )
      }
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <h3>For sure {props.date}</h3>
    </footer>
  )
}


// This is the main component that will be added to our root element ID in the DOM
// The name App  must match exactly with the <App />  tag in the ReactDOM.render(...) call
function App() {
  return (
    // Note: You coulr replace the <div className="App"> by <></> but would loose the css info for it also
    <div className="App">
      <Header name="Dan" />
      <Main adjective="Best" dishes={dishObject} />
      <Footer date={new Date().getFullYear()} />
    </div>
  );
}

export default App;
