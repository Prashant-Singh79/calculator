
import { useState } from "react";
import "./index.css"
export default function App() {

  const [input, setInput] = useState("");
  const [show, setShow] = useState("");

  const value=(e)=>{
    
    setShow(show+""+e.target.value)
    setInput(input + "" +e.target.value);

  }

const reset=()=>{
  setInput("");
  setShow("");

}

const percent=(e)=>{
  let data=Number(input)/100
  setInput(data);

}


const backspace=()=>{
  let ans=input.toString();
  setShow(ans.slice(0,input.length-1))
  setInput(ans.slice(0,input.length-1))
}


const equals=()=>{

  
  setInput(eval(input))

}


  return (
  
    <div className="container">
      
      <div className="wrapper">
  
      <div className="screen">
      <div className="small">
        {show}
        </div>
        {input}
        </div>
          <button className="btn light-gray" onClick={reset}>
            AC
          </button>
          <button className="btn light-gray" value="%" onClick={percent}>
            %
          </button>
          <button className="btn light-gray" onClick={backspace}>
           C
          </button>
          <button className="btn orange" value="/" onClick={value}>
            /
          </button>
          <button className="btn" value="7" onClick={value}>
            7
          </button>
          <button className="btn" value="8" onClick={value}>
            8
          </button>
          <button className="btn" value="9" onClick={value}>
            9
          </button>
          <button className="btn orange" value="*" onClick={value}>
            X
          </button>
          <button className="btn" value="4" onClick={value}>
            4
          </button>
          <button className="btn" value="5" onClick={value}>
            5
          </button>
          <button className="btn" value="6" onClick={value}>
            6
          </button>
          <button className="btn orange" value="+" onClick={value}>
            +
          </button>
          <button className="btn" value="1" onClick={value}>
            1
          </button>
          <button className="btn" value="2" onClick={value}>
            2
          </button>
          <button className="btn" value="3" onClick={value}>
            3
          </button>
          <button className="btn orange" value="-" onClick={value}>
            -
          </button>
          <button className="btn zero" value="0" onClick={value}>
            0
          </button>
          <button className="btn" value="." onClick={value}>
            .
          </button>
          <button className="btn" value="=" onClick={equals}>
            =
          </button>
        </div>
  
    </div>
 
  );
}
