import logo from './logo.svg';
import './App.css';

function App() {
    //Create and Array of clases descriptions  and map them so we can call them 
  const blogArr = [{
    id:1,
    title : 'Blog Title 1',
    description : 'Loreipsum Loreipsum Loreipsum Loreipsum'
  },{
    id:2,
    title : 'Blog Title 2',
    description : 'Loreipsum Loreipsum Loreipsum Loreipsum'
  },{
    id:3,
    title : 'Blog Title 3',
    description : 'Loreipsum Loreipsum Loreipsum Loreipsum'
  }]

  const blogCards = blogArr.map((item)=>{
    console.log(item);

    return ( <div className = "BlogCard" key={item.id}>
    <h3> {item.title}</h3>
    <p> {item.description}</p>
  </div>)
   })

  return (
    <div className="App">
      {blogCards}

    </div>
  );
}

export default App;
