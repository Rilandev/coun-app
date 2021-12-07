import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(1);

  const decrement = () => {
      if(count<=1){
      }else{
        setCount(count - 1);
      }
  }

  const increment = () => {
    if(count>=1000){
    }else{
      setCount(count + 1);
    }
      
  }



  return (
    <div className="App">
     <div className="counter-app">
     <button onClick={decrement} className="decrement">-</button>
       <div className="count">{count}</div>
      <button onClick={increment} className="increment">+</button>
     </div>
    </div>
  );
}

export default App;
