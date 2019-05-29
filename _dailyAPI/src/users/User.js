import React from 'react';

const User = (props) => {
  return (<div>Name: {props.children} | Balance: {props.bal}</div>)
}

export default User;
