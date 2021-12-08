
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';

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

  const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item)=>{
 
    //Passing Data to Components using Props
    return ( 
      <BlogCard key={item.id} title={item.title} description={item.description}/>
    )
   })

  return (
    <div className="App">
      {blogCards}

    </div>
  );
}

export default App;
