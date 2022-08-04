import React from 'react'
import './style.css';
import { Pannellum } from "pannellum-react";


function VRBox(props) {
    
  return (
    <div className="vr">
    <Pannellum
      width={window.width}
      height={"100vh"}
      image={props.image}
      pitch={10}
      yaw={180}
      hfov={500}
      autoLoad
      author=""
      title=""
      orientationOnByDefault={false}
      draggable
      keyboardZoom
      mouseZoom
      preview=""      
      previewAuthor=""
      previewTitle=""
      showControls
      showFullscreenCtrl
      showZoomCtrl
      onLoad={()=>{console.log("panorama loaded");}}
      onScenechange={(id)=>{console.log("Scene has change on " + id);}}
      onScenechangefadedone={()=>{console.log("panorama loaded");}}
      onError={(err)=>{console.log("Error" , err);}}
      onErrorcleared={()=>{console.log("Error Cleared");}}
      onMousedown={(evt)=>{console.log("Mouse Down" , evt);}}
      onMouseup={(evt)=>{console.log("Mouse Up", evt);}}
      onTouchstart={(evt)=>{console.log("Touch Start", evt);}}
      onTouchend={(evt)=>{console.log("Touch End", evt);}}
      hotspotDebug={false}
  >
  </Pannellum>
  </div>
  )
}

export default VRBox