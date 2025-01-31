
import './App.css';
import { useState } from 'react';
import ReactDOM from "react-dom";
import RefExample from './RefExample';
import Forward from './Forward';
import Concurrent from './Concurrent';
import { LazyLoading } from './LazyLoading';
const container=document.getElementById("modal-root");
function App() {
  const [open , setOpen]=useState(false);

  return (
    <div className="App">
   <div>
   <h1> EXAMPLE OF PORTAL</h1>
   <button onClick={()=>setOpen(!open)}>{open? "Hide" :"Show"}</button>
   {open && <Modal/>}
   </div>

   <RefExample/>
   <Forward/>
<br/>
<br/>
   <Concurrent/>
   <br/>
   <LazyLoading/>

    </div>
  );
}

export default App;


const Modal=()=>{
  return ReactDOM.createPortal(<div>Hello World</div> ,container )
}