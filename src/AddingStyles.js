import logo from './logo.svg';
import './App.css';

function App() {

  const blogObj = {
    title : 'Blog Title 1',
    description : 'Loreipsum Loreipsum Loreipsum Loreipsum'
  }
  const styles = {
    margin: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius:'5px',
    boxShadow: ' 0 2px 5px #ccc'
  }

  return (
    <div className="App">
      <div className = "BlogCard">
        <h3> {blogObj.title}</h3>
        <p> {blogObj.description}</p>
      </div>
      <hr></hr>
      <div style = {styles}>
        <h3> {blogObj.title}</h3>
        <p> {blogObj.description}</p>
      </div>
      <hr></hr>
      <div style = {styles}>
        <h3> {blogObj.title}</h3>
        <p> {blogObj.description}</p>
      </div>
      <hr></hr>


    </div>
  );
}

export default App;
/* How to define a class in the main js and call it as style = {styles}
const styles = {
    margin: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius:'5px',
    boxShadow: ' 0 2px 5px #ccc'
  }
Also changes on App.css 

created .BlogCard
*/