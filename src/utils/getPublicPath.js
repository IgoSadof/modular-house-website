
const getPublicPath = (data, path) => {
    return (data.allFile.edges.find(
        (item) => item.node.relativePath === path.substr(7)))?.node.publicURL
    }

  export default getPublicPath;