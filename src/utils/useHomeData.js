// import { useStaticQuery, graphql } from "gatsby";

// function useHomeData(parent) {
//     const data = useStaticQuery(graphql`
//     {
//       allMysqlValue {
//         nodes {
//           contentid
//           value
//           tmplvarid
//         }
//       }
//       allMysqlParent {
//         nodes {
//           mysqlId
//           mysqlParent
//         }
//       }
//     }
//   `);

//   const findAllwithSameParent = (parentElement) => {
//     return data.allMysqlParent.nodes.filter(
//       (item) => item.mysqlParent === parentElement
//     );
//   }
//   const parentElements = findAllwithSameParent(parent)
//   // console.log('parentElements',parentElements)
  
//   const FirstdataList = [];

//   const findAllinValueDAta = (listElementsWithSameParent,list) => {
//     listElementsWithSameParent.forEach((element) => {
//       data.allMysqlValue.nodes.forEach((item) => {
//         if (item.contentid === element.mysqlId) {
//           list.push(item);
//         }
//       });
//     });
//   }
//   findAllinValueDAta(parentElements,FirstdataList)



//   // console.log('FirstdataList=',FirstdataList)
//   //  to get Format [{id:textField,...},{...},...]
//   let keys = {}
//   FirstdataList.forEach((item)=>{
//       if(`${item.contentid}` in keys){
//         keys[item.contentid][item.tmplvarid] = item.value
//       }else{
//         keys[`${item.contentid}`] = {[item.tmplvarid]:item.value}
//       }
//   })
//   // console.log('id=',keys)

//   const houseFoldersId = [];
  
//   for(let key in keys){
//     houseFoldersId.push(findAllwithSameParent(+key))
//   }
//   console.log('houseFoldersId', houseFoldersId)

//   const foldersElements = [];

//   houseFoldersId.forEach((item, index)=>{
//     console.log('item',item[0].mysqlId)
//     foldersElements.push(findAllwithSameParent(item[0].mysqlId))
//     findAllinValueDAta(parentElements, FirstdataList)
//   })
//   console.log(foldersElements)



  
//   let orderedData = []
//   for(let key in keys){
//     orderedData.push(keys[key])
//   }
//   return orderedData;
// }
// export default useHomeData