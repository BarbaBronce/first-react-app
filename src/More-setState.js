
import React , {Component} from 'react';
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';

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
      //let updatedState = !this.state.showBlogs; //This will give true if it was false and false if it was true
     this.setState((prevState,prevProps) => {
        return {showBlogs : !prevState.showBlogs }
    });

     console.log(this.state.showBlogs);

   }
   render(){
     console.log('Render Called');
    return (
      <div className="App">
        {/*You can change de description on the button like this*/}
        <button onClick={this.onHidebtnClick}>{this.state.showBlogs ? 'Hide List ': 'Show List'}</button>
        <br></br>
        {this.state.showBlogs ? this.blogCards : null }
  
      </div>
    );

   }

  
}

export default App;
