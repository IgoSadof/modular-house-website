

const createSVG = (data, path) => {
  const svg = data.allFile.edges.find(
    (item) => item.node.relativePath === path.substr(7)
  )?.node.publicURL;
  return svg
};

export default createSVG;
