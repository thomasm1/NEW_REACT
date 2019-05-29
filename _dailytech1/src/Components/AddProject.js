import React, { Component } from 'react';  
import uuid from 'uuid';
import '../AppList.css';

class AddProject extends Component { 
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['Musing Blockchain', 'Web Dev Affairs', 'Sociology Tomorrow!','April', 'March', 'February']
  }

  handleSubmit(e){
   if(this.refs.title.value === ''){
    alert('Type Title to add Blog Post');
  } else {
    this.setState({newProject:{
      id:uuid.v4(),
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function(){
     // console.log(this.state);
      this.props.addProject(this.state.newProject);
    });
  }
   console.log(this.refs.title.value);
   console.log(this.refs.category.value);
   // document.write('submitted@ successfully!');
    e.preventDefault();
  }
  
  render() { 
    
    let categoryOptions = this.props.categories.map(category => {
        return <option key = {category} value={category}>{category} </option>
    });
    return (
      <div  className="appapi" > 
       <h5> Add Post</h5>         
       <form onSubmit={this.handleSubmit.bind(this)}>
       <div>
       <label>Title  </label><br />
       <input type="text" placeholder="Enter title here ..." ref="title" /> <br />
       </div>
       <div> 
       <select  ref="category" > 
       {categoryOptions}
       </select>
       </div>
       <input type="submit" className="submit" value="Submit" />
       </form>   
      </div>
    );
  }
}

export default AddProject;
