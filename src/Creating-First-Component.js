import logo from './logo.svg';
import './App.css';

import BlogCard from './BlogCard';

function App() {

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

    return ( 
      <BlogCard/>
    )
   })

  return (
    <div className="App">
      {blogCards}

    </div>
  );
}

export default App;
