import logo from './logo.svg';
import './App.css';

function App() {

  const blogObj = {
    title : 'Blog Title 1',
    description : 'Loreipsum Loreipsum Loreipsum Loreipsum'
  }

  return (
    <div className="App">
      <div>
        <h3> {blogObj.title}</h3>
        <p> {blogObj.description}</p>
      </div>
      <hr></hr>
      <div>
        <h3> {blogObj.title}</h3>
        <p> {blogObj.description}</p>
      </div>
      <hr></hr>
      <div>
        <h3> {blogObj.title}</h3>
        <p> {blogObj.description}</p>
      </div>
      <hr></hr>


    </div>
  );
}

export default App;
/* This would be how react is transform to JS

React.createElement("div", {
  className: "App"
}, React.createElement("div", null, 
React.createElement("h3", null, " ", blogObj.title),
 React.createElement("p", null, " ", blogObj.description)), 
 React.createElement("hr", null), 
 React.createElement("div", null,
  React.createElement("h3", null, " ", blogObj.title),
   React.createElement("p", null, " ", blogObj.description)),
    React.createElement("hr", null), 
    React.createElement("div", null, 
    React.createElement("h3", null, " ", blogObj.title), 
    React.createElement("p", null, " ", blogObj.description)),
    React.createElement("hr", null));
*/