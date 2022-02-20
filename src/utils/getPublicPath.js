const getPublicPath = (data, path) => {
  if (path?.length > 0) {
    return data.allFile.edges.find(
      (item) => item.node.relativePath === path.substr(7)
    )?.node.publicURL;
  }else{return null}
};

export default getPublicPath;
