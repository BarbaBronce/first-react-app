
import React , {Component} from 'react';
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';

class App extends React.Component {
//Created state
  state = {
    showBlogs : true,
    blogArr: [{
    id:1,
    title : 'Blog Title 1',
    description : 'Loreipsum Loreipsum Loreipsum Loreipsum',
    likeCount: 0
  },{
    id:2,
    title : 'Blog Title 2',
    description : 'Loreipsum Loreipsum Loreipsum Loreipsum',
    likeCount: 0
  },{
    id:3,
    title : 'Blog Title 3',
    description : 'Loreipsum Loreipsum Loreipsum Loreipsum',
    likeCount: 0
  }]
  }
  //Creating a function and passing as props
  onLikeBtnClick = (pos) =>{
   //  alert('Like Button Clicked at pos => ' + pos)
   const updatedBlogList = this.state.blogArr;
   const updatedBlogObj = updatedBlogList[pos];
    updatedBlogObj.likeCount++;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({blogArr:updatedBlogList})
   //console.log(updatedBlogObj);
  }
 


    onHidebtnClick =() => {
      //let updatedState = !this.state.showBlogs; //This will give true if it was false and false if it was true
     this.setState((prevState,prevProps) => {
        return {showBlogs : !prevState.showBlogs }
    });

     console.log(this.state.showBlogs);

   }
  

   render(){
     console.log('Render Called');

  //Using the module to check 
  const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item,pos)=>{
 
    //Passing Data to Components using Props
    return ( 
      <BlogCard 
      key={pos}
      id = {item.id} 
      title={item.title} 
      description={item.description} 
      likeCount={item.likeCount} 
      onLikeBtnClick={() => this.onLikeBtnClick(pos)}
      //position ={pos}
      />
      )
   })


    return (
      <div className="App">
        {/*You can change de description on the button like this*/}
        <button onClick={this.onHidebtnClick}>{this.state.showBlogs ? 'Hide List ': 'Show List'}</button>
        <br></br>
        {this.state.showBlogs ? blogCards : null }
  
      </div>
    );

   }

  
}

export default App;
