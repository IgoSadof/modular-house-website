import { useStaticQuery, graphql } from "gatsby";

function useHome(parent) {
  const data = useStaticQuery(graphql`
    {
      allMysqlParent {
        nodes {
          mysqlId
          pagetitle
          alias
          mysqlParent
        }
      }
      allMysqlValue {
        nodes {
          mysqlId
          tmplvarid
          contentid
          value
        }
      }
    }
  `);
  const parentElements = data.allMysqlParent.nodes.filter(
    (item) => item.mysqlParent === parent
  );

  const houseElements = data.allMysqlParent.nodes.filter(
    (item) => item.alias === "a192"
  );
  console.log("houseElements= ", houseElements);

  const foldersList = {};

  houseElements.forEach((item) => {
    if (item.mysqlParent in foldersList) {
      foldersList[item.mysqlParent] = [
        ...foldersList[item.mysqlParent],
        item.mysqlId,
      ];
    } else {
      foldersList[item.mysqlParent] = [item.mysqlId];
    }
  });

  // const foldersList = new Map();

  // houseElements.forEach(item=>{
  //   if(foldersList.has(item.mysqlParent)){
  //     foldersList.set([item.mysqlParent],[...foldersList.get(item.mysqlParent), item.mysqlId])

  //   }else{
  //     foldersList.set([item.mysqlParent],[item.mysqlId])
  //   }
  // })

  console.log(foldersList);
  for (let key in foldersList) {
    foldersList[key].forEach((item, index) => {
      if (item in foldersList) {
        let obj = houseElements.find((elem) => elem.mysqlId === item);
        // let k = obj[pagetitle]
        // console.log(obj)
        foldersList[key][index] = { [item]: foldersList[item] };
      }
    });
  }

  let myList = foldersList[parent];
  let orderedList = myList[0];
  console.log(orderedList);

  const newObj = {};
  const getMap = (obj) => {
    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        getMap(item);
      });
    } else {
      for (let key in obj) {
        if (Array.isArray(obj[key])) {
          let el = houseElements.find((item) => item.mysqlId === +key);
          newObj[el.pagetitle] = obj[key];
          getMap(obj[key]);
        }
      }
    }
  };
  getMap(orderedList);
  console.log(newObj);

  // let map = new Map()

  // const getMap = (obj) => {

  //   for (let key in obj){
  //     // console.log(Array.isArray(obj[key]))
  //     if(!Array.isArray(obj[key])){
  //       console.log(obj[key])

  //       if(map.get(key)){
  //         // console.log('mapIs==',map.get(key))
  //         map.set(map.get(key),obj[key])

  //       }else{
  //         map.set(key, obj[key])
  //       }
  //       getMap(obj[key])
  //     }
  //   }
  // }
  // getMap(orderedList)
  // console.log(map)

  /** 

  const dataList = [];
  houseElements.forEach((element) => {
    data.allMysqlValue.nodes.forEach((item) => {
      if (item.contentid === element.mysqlId) {
        // let el = {}
        //  el[element['pagetitle']] = {...item,name:element['pagetitle']}
        dataList.push({...item,name:element['pagetitle']});
        // console.log(el)
      }
    });
  });
  // console.log('dataList', dataList)





  //  to get Format [{id:textField,...},{...},...]
  let keys = {}
  dataList.forEach((item)=>{
      if(`${item.contentid}` in keys){
        keys[item.contentid][item.tmplvarid] = item.value
      }else{
        keys[`${item.contentid}`] = {[item.tmplvarid]:item.value}
      }
  })
  const nameKeys = {}

  for(let key in keys){
    // console.log(key)
    dataList.find((item)=>{
      // console.log(item)
      if(item.contentid === +key){
        houseElements.forEach(element => { 
          if(element.mysqlId === item.contentid){

          }
          
        });


        // console.log(item.name)
        nameKeys[item.name] = keys[key]
      }
    })
  }
  // console.log(nameKeys)

  

  // console.log(keys)
  let orderedData = []

  for(let key in keys){
    orderedData.push(keys[key])
  }
  // console.log(orderedData)
  return orderedData;

  **/
}
export default useHome;
