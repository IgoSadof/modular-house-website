const findDataFromCategory = (resources,resourcestv,categoryNumber) => {
    return resources.filter((item)=>(resourcestv.find(elem=>elem.id === item.tmplvarid)).category === categoryNumber);
}

export default findDataFromCategory