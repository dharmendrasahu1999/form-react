import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
function App() {
  const [ toggle , setToggle]=useState(false);
  return (
    <div>
      <div>
        <button onClick={()=>{setToggle(false)}}>SignUp</button>
        <button onClick={()=>{setToggle(true)}}>Login</button>
      </div>
      {
        toggle?
        <Login/>
        :
        <SignUp/>

      }
    </div>
  );
}

export default App;
