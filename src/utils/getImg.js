
import {getImage } from "gatsby-plugin-image";

const getImg = (data,path) => {
  console.log(data)
    return getImage(
      data.allFile.edges.find(
        (item) => item.node.relativePath === path.substr(7)
      )?.node
    );
  };
  export default getImg