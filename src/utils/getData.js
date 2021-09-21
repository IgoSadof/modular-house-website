
function getData(query, parent) {
  console.log('getData run')
  const parentElements = query?.allMysqlParent?.nodes.filter(
    (item) => item.mysqlParent === parent
  );
  const dataList = [];
  parentElements?.forEach((element) => {
    query.allMysqlValue.nodes.forEach((item) => {
      if (item.contentid === element.mysqlId) {
        dataList.push(item);
      }
    });
  });
  // console.log(dataList)
  //  to get Format [{id:textField,...},{...},...]
  let keys = {}
  dataList?.forEach((item)=>{
      if(`${item.contentid}` in keys){
        keys[item.contentid][item.tmplvarid] = item.value
      }else{
        keys[`${item.contentid}`] = {[item.tmplvarid]:item.value}
      }
  })
  let orderedData = []
  for(let key in keys){
    orderedData.push(keys[key])
  }
  return orderedData;
}
export default getData