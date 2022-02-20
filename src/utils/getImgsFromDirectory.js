import { getImage } from 'gatsby-plugin-image';

const getImagesFromDirectory = (data, directory) => {
  let regExp = new RegExp(`^${directory}`);
  let imagesArr = [];
  data.allFile.edges.forEach((item) => {
    if (!!item.node.relativeDirectory.match(regExp)) {
      imagesArr.push(getImage(item.node));
    }
  });
  return imagesArr;
};

export default getImagesFromDirectory;
