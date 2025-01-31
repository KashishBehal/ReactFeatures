import React from "react";
import { createRef } from "react";
import Forward   from "./Forward";
class RefExample extends React.Component{
    constructor(){
        super();
        this.inputRef=createRef();
    }
    componentDidMount(){
        console.warn(this.inputRef.current.value="100");
        this.inputRef.current.style.backgroundColor="gray"
        this.inputRef.current.style.color="white"
    }
    
    render(){
        return(
            <div>
               
               <div> <h1>
                    Ref Example
                </h1>
                <input type="text" ref={this.inputRef}></input>
               </div>

               <div>
                <br/>
               
                <br/>
            
               </div>
            </div>
        ) 
    }
}
export default RefExample;