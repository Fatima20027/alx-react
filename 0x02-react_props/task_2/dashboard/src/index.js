import React from 'react';
import ReactDOM from 'react-dom';

const Myname = 'Fatima Hailou';
const today = new Date();
const year = today.getFullYear();


const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <p>created by {Myname}</p>
      <p>{year}</p>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
