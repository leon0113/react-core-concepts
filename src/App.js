import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* each person is a component */}
      <Person name="Rubel" job="circketer"></Person>
      <Person name="Leon" job="student"></Person>
      <Person name="Tahjib"></Person>

      <h5>New Component</h5>
      <p>Creating new Component</p>
      <Friend name="Alen" phone="018545454"></Friend>
      <Friend name="Jimmy" phone="012452085"></Friend>

    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>profession is {props.job}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Name : {props.name}</h3>
      <p>Phone Number : {props.phone}</p>
    </div>
  )
}

export default App;
