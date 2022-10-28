import logo from './logo.svg';
import './App.css';

const singers = [
  { name: 'Arijit', song: 'tum ho' },
  { name: 'Atif', song: 'wo lamhe' },
  { name: 'Shreya', song: 'tum bin' },
  { name: 'Eminem', song: 'venom' }

];

function App() {
  const names = ['Rubel', 'Leon', 'Tahjib', 'Salman', 'Amir', 'Sharukh', 'Saif'];
  return (
    <div className="App">
      {
        names.map(name => <li>{name}</li>)
      }
      {
        // names.map(name => <Person name={name}></Person>)
      }

      {
        singers.map(singer => <Person name={singer.name} song={singer.song}></Person>)
      }

      {/* each person is a component */}
      {/* <Person name={names[0]} job="circketer"></Person>
      <Person name={names[1]} job="student"></Person>
      <Person name={names[2]}></Person> */}

      <h5>New Component</h5>
      <p>Creating two Components</p>
      <Friend name="Alen" phone="018545454"></Friend>
      <Friend name="Jimmy" phone="012452085"></Friend>

    </div >
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <h2>{props.song}</h2>
      {/* <p>profession is {props.job}</p> */}
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
