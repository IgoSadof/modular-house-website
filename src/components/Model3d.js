import React, { Fragment } from "react";
// import { jsonMock } from "../assets/model/mockData";

const Model3d = ({ srcPath, srcPathIos, newref, scaleUp }) => {
  // console.log(scaleUp)
  return (
    <Fragment>
      <model-viewer
        disable-zoom
        max-camera-orbit="Infinity 85deg auto"
        ref={newref}
        ar
        ar-modes="scene-viewer quick-look webxr"
        src={srcPath} // AR Android/Web
        ios-src={srcPathIos} // AR iOS
        // reveal='manual'
        // auto-rotate
        modelIsVisible={true}
        // poster={<div>dqwedqwdqw</div>} 
        camera-controls
        style={scaleUp ? { width: "100%", height: "100%", transform: "scale(1.5)" } : { width: "100%", height: "100%", }}
      >
      </model-viewer>
    </Fragment>
  );
};

export default Model3d;