import { useStaticQuery, graphql } from "gatsby";

function useHomeData() {
  const data = useStaticQuery(graphql`
    {
      allMysqlModules {
        nodes {
          moduleName
          parameterValue
          parameterName
          parentId
          contentId
        }
      }
      allMysqlHouses {
        nodes {
          alias
          mysqlId
          name
          contentID
          value
        }
      }
    }
  `);

  const elements = data.allMysqlHouses.nodes;
  const moduleParametrs = data.allMysqlModules.nodes;
  //   console.log(elements);
  const houses = {};

  elements.forEach((item) => {
    if (houses[item.alias]) {
      houses[item.alias][item.name] = item.value;
    } else {
      houses[item.alias] = {};
      houses[item.alias][item.name] = item.value;
      houses[item.alias]["id"] = item.contentID;
      houses[item.alias]["modules"] = [];
    }
  });
//   console.log(houses);
  const houseArr = [];
  for (let key in houses) {
    houses[key]["alias"] = key;
    houseArr.push(houses[key]);
  }
  //   console.log(houseArr);

  houseArr.forEach((house) => {
    let modules = {};
    moduleParametrs.forEach((moduleParametr) => {
      if(moduleParametr.parentId === house.id){
        if (modules[moduleParametr.moduleName]) {
            modules[moduleParametr.moduleName][moduleParametr.parameterName] =
              moduleParametr.parameterValue;
          } else {
            modules[moduleParametr.moduleName] = {};
            modules[moduleParametr.moduleName][moduleParametr.parameterName] =
              moduleParametr.parameterValue;
            modules[moduleParametr.moduleName]["id"] = moduleParametr.contentId;
            modules[moduleParametr.moduleName]["rooms"] = [];
          }
      }
    });
    let modulesArr = [];
    for (let key in modules) {
        modules[key]["name"] = key;
        modulesArr.push(modules[key]);
      }
    house['modules'] = modulesArr;
    modules = {}
  });
//   добавляем методы для модулей

//   houseArr.forEach((house) => {
//     house[count]

//   }




  //   houseArr.forEach((item) => {
  //     modules.forEach((module) => {
  //         if(item.id===module.parentId){
  //             if(item['modules'][module.moduleName]){
  //                 item['modules'][module.moduleName] = module.parameterName;
  //             }
  //             item['modules'][module.moduleName][module.parameterName] = module.parameterName;
  //         }
  //     })
  //   })
//   console.log(houseArr);

  //   modules.forEach((item) => {
  //     if (item.contentId in houses) {
  //       if (houses[item.contentId]["modules"]) {
  //         houses[item.contentId]["modules"] = [
  //           ...houses[item.contentId]["modules"],
  //           item,
  //         ];
  //       } else {
  //         houses[item.contentId]["modules"] = [item];
  //       }
  //     }
  //     // console.log("houses", houses);
  //   });

  return houseArr;
}
export default useHomeData;
