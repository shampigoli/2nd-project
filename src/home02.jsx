import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home02() {
  const [text, setText] = useState(' ');
//   Clear Text
const cleartxt= ()=>{
    setText(" ");
    toast.success('Your text is cleared', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}
// 
const Change= (e)=>{
    setText(e.target.value);

}
const uppercase= ()=>{
   const newtext = text.toUpperCase();
   setText(newtext);
   
   toast.success('Your text is Uppercase Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

}
const lowercase= ()=>{
   const newtext02 = text.toLowerCase();
   setText(newtext02);
   
   toast.success('Your text is Lowercase Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

}
const copytxt=()=>{
    navigator.clipboard.writeText(text);
    
    toast.success('Your text is Copied Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
const removeSpc= ()=>{
  const txt=   text.split(/[ ]+/);
  setText(txt.join(" "));
  
  toast.success('Spaces can be removed from your text Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
const lighttheme =()=>{
    document.getElementById('theme').style.backgroundColor="white";
    document.getElementById('theme').style.color="black";
    
    toast.success('Lighttheme is applied to your project Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });   
}
const darktheme =()=>{
    document.getElementById('theme').style.backgroundColor="black";
    document.getElementById('theme').style.color="white";
    toast.success('Darktheme is applied to your project Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });      
}
  return (
    <>
      <div className="container" id="theme" style={{ paddingTop: "40px" }}>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={Change}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={cleartxt}>Clear Text</button>
         <button className="btn btn-primary" onClick={uppercase}>Uppercase</button> 
         <button className="btn btn-primary" onClick={lowercase}>LowerCase</button>
        <button className="btn btn-primary" onClick={copytxt}>CopyText</button>
        <button className="btn btn-primary" onClick={removeSpc}>Remove Spaces</button> 
        <button className="btn btn-primary" onClick={lighttheme}>Enable light theme</button> 
        <button className="btn btn-primary" onClick={darktheme}>Enable dark theme</button> 
         
        <h1>Text Counter</h1>
         <p>{
            text.split(' ').filter((f)=>{
              return f.length !==0;
            }).length
         }
        Words{' '}
        {text.length}Characters </p> 
        <h1>Read Time</h1>
        <p>{0.008*
        text.split(' ').filter((f)=>{
              return f.length !==0;
            }).length}
        </p>      
        <h1>Preview</h1>
        <p>{text.length > 0 ? text :"Write Anything"}</p>
      </div>
      
      <ToastContainer />
    </>
  );
}
export default Home02;
