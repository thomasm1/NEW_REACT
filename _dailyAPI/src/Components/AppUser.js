import React, { Component } from 'react';
import Users from '../users/Users';
import '../AppList.css';


const MyInput = (props) => {
  return (<input
    type="text"
    ref={props.inputRef} />)
}

const FuncCustomComp = (props) => {

  let textRef = null;
    
   const handleClick = () => {
     alert(`Note: Input value is ${textRef.value}`)
   }
    return (
      <div style={styles.myInput}>
        <MyInput inputRef={(input) => { textRef = input; }}/>
        <input
          type="button"
          value="show input"
          onClick={handleClick}
        />
      </div>
    ); 
}


class AppUser extends Component {

  onKeyUp = (passed, e) => {
    if (e.keyCode === 13) {
      console.log(passed)
      switch (passed) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.submit.focus();
      }
    }
  }
  onSubmit = () => {
    alert(`You submitted - ${this.firstName.value}, ${this.lastName.value} `);
  }
  render() {
    return (
      <div  style={{maxWidth:'50%' }} className="AppUser  ">

<Users />
        <div>
          <FuncCustomComp/>
        </div>

        <div>
          <span>First Name: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'firstName')}
            ref={(input) => { this.firstName = input; }} />
        </div>
        <div>
          <span>Last Name: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'lastName')}
            ref={(input) => { this.lastName = input; }} />
        </div>
        <div>
          <span>Age: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'age')}
            ref={(input) => { this.age = input; }} />
        </div>
        <div>
        <input
          type="submit"
          value="Submit"
          onClick={this.onSubmit}
          ref={(input) => { this.submit = input; }}
        />
        
         </div>
      </div>
      
    );
  }
}
const styles = {
  myInput : {
     margin  : '20px'
  }
}

export default AppUser;