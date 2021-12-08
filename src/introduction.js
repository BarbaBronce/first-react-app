import logo from './logo.svg';
import './App.css';

function App() {

  const firstName = 'John'; //Testing Variables
  const lastName = ' Wick';
  const age = 28;
  const job = 'Gentelman';

  //Testing functions and calling it
  const getFullName = (firstName,lastName) => `${firstName} ${lastName}`

  const inputPlaceholder = 'Enter Your Details'
  
  const detailsInputBox =  <input placeholder = {inputPlaceholder} autoComplete/>

  const mArr = [1,2,3,4] //Testing an array and calling it

  const mObj ={ // Testing create an obj and calling it
      name: 'toto',
      age: 30
  }


  return (
    <div className="App">
      <h3> Full Name: {getFullName(firstName,lastName)} </h3>
      <p>Age: {age}</p>
      <p>Job: {job} </p>

      {/* {detailsInputBox} */}

      <p>{mArr[0]} </p>
      <p>{mObj.age} </p>



    </div>
  );
}

export default App;
/*
This was how it was fill when created
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/