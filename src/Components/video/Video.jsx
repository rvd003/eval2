import Button from "../common/Button";
import React from 'react'
import './Video.css'




function VideoPlayer() {
  
  
  

  return (
   
   
  <div className="App">
      
     <video id="myVideo" width="320" height="176" controls>
        <source src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4" type="video/mp4"/>
     </video>
     <div>
     <button className="but" onClick={()=>{
       var vid = document.getElementById("myVideo"); 
       vid.play(); 
     }}>play</button>
     <button  className="but" onClick={()=>{
        var vid = document.getElementById("myVideo"); 
        vid.pause();
     }}>pause</button>
     <button  className="but" onClick={()=>{
        var vid = document.getElementById("myVideo");
       
    vid.currentTime += 30.0;
     }}>skip 30 </button>
     </div>
    </div>
    
  );

   //);
}

export default VideoPlayer;
