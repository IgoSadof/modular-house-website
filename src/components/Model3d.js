import React,{ Fragment} from "react";
import { jsonMock } from "../assets/model/mockData";
// import '@google/model-viewer'
// import loadable from '@loadable/component'
// loadable(() => import('@google/model-viewer'))

const Model3d = ({index}) => {
    console.log(index)

  return (
    <Fragment>
      <model-viewer
        ar
        modes="scene-viewer quick-look webxr"
        src={jsonMock.linksGLB[index]} // AR Android/Web
        ios-src={jsonMock.linksUSDZ[index]} // AR iOS
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "100%"}}
      >
      </model-viewer>
    </Fragment>
  );
};

export default Model3d;