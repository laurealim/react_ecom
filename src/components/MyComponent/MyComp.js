import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function MyComp(req){
    let gender = 'Male';
    return <h1>Hello, My name is {req.name} and I am {req.age} years old and I am { gender }.</h1> 
}

export default MyComp;