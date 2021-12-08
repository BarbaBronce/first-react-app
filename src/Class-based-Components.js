
import React , {Component} from 'react';
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';
//there is no need to put const as we are creating a class 
//we need the component from React to create a class
//we can create "states" 
class App extends React.Component {

  state = {
    showBlogs : true

  }

   blogArr = [{
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

 
  //Using the module to check 
   blogCards = isArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item)=>{
 
    //Passing Data to Components using Props
    return ( 
      <BlogCard key={item.id} title={item.title} description={item.description}/>
    )
   })
    onHidebtnClick =() => {
     //If you use set something it will call again the render function to check if something has change
     this.setState({showBlogs : false});

     console.log(this.state.showBlogs);

   }
   //Here is where you can return things if needed for a class 
   render(){
    return (
      <div className="App">
        <button onClick={this.onHidebtnClick}>Hide List</button>
        <br></br>
        {this.state.showBlogs ? this.blogCards : null }
  
      </div>
    );

   }

  
}

export default App;
