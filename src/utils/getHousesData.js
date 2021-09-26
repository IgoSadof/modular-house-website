function getHousesData(data) {
  // console.log('getHousesData run'); 
  const elements = data.allMysqlHouses.nodes;
  const moduleParametrs = data.allMysqlModules.nodes;
  const roomsData = data?.allMysqlRooms?.nodes;
    // console.log(moduleParametrs);
  const rooms = {};
  const roomsArr = [];


  if(roomsData){
    roomsData?.forEach((item) => {
      if (rooms[item.contentId]) {
        rooms[item.contentId][item.parameterName] = item.parameterValue;
      } else {
        rooms[item.contentId] = {};
        rooms[item.contentId][item.parameterName] = item.parameterValue;
        rooms[item.contentId]["ModuleId"] = item.parentId;
        rooms[item.contentId]["id"] = item.contentId;
      }
    });
    for (let key in rooms) {
      roomsArr.push(rooms[key]);
    }
  }
  
  // console.log(rooms)
  

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
    houses[key]['countArea'] = (arr,field)=>{
      let sum = 0;
      if(arr.length>0){
        arr.forEach((item) => sum+= +(item[field]? item[field].replace('К','000'):0))
      };
      return sum;
    };
    houses[key]['takeFromBaseModule'] = (arr,field)=>{
      if(arr.length>0){
        let value = arr.filter((module) => module["Название модуля"] === "Базовый модуль")?.[0]?.[field];
        if(value){value = value.replace('К','000')};
        return value;
      };
    };
  }
  // console.log(houseArr);

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
  // console.log(houseArr)

// add rooms in modules
  roomsArr.forEach((room)=>{
    houseArr.forEach(house=>{
      house.modules.forEach(module=>{
        if(room.ModuleId === module.id ){
          module.rooms.push(room)
        }
      })
    })
  })
  // create all rooms Arr
  houseArr.forEach((house)=>{
    house.allRooms = [];
    house.modules.forEach(module=>{
      module.rooms.forEach(room=>{
        house.allRooms.push(room) 
      })
    })
  })
  return houseArr;
}
export default getHousesData;
