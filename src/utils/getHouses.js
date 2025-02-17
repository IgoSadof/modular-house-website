import isJsonObject from './isJsonObject';

export default function getHouses(data, lang) {
  const housesData = lang === 'EN' && data.allMysqlHousesEn?.nodes  ? data.allMysqlHousesEn.nodes : data.allMysqlHouses.nodes;
  const elements = housesData;
  const houses = {};

  elements.forEach((item) => {
    if (houses[item.alias]) {
      houses[item.alias][item.name] = isJsonObject(item.value)
        ? JSON.parse(item.value)
        : item.value;
      houses[item.alias]['position'] = item.position;
      houses[item.alias]['published'] = item.published;

      if (item.name === 'modules') {
        houses[item.alias][item.name].forEach((module, index) => {
          if (module.rooms) {
            houses[item.alias][item.name][index].rooms = JSON.parse(
              houses[item.alias][item.name][index].rooms
            );
          }
          if (module.module_options) {
            houses[item.alias][item.name][index].module_options = JSON.parse(
              houses[item.alias][item.name][index].module_options
            );
          }
        });
        
      }
    } else {
      houses[item.alias] = {};

      houses[item.alias][item.name] = isJsonObject(item.value)
        ? JSON.parse(item.value)
        : item.value;
      if (item.name === 'modules') {
        houses[item.alias][item.name].forEach((module, index) => {
          if (module.rooms) {
            houses[item.alias][item.name][index].rooms = JSON.parse(
              houses[item.alias][item.name][index].rooms
            );
          }
        });
      }

      houses[item.alias]['id'] = item.contentID;
    }
  });

  let houseArr = [];

  for (let key in houses) {
    houses[key]['alias'] = key;
    houseArr.push(houses[key]);
    houses[key]['countArea'] = (arr, field) => {
      let sum = 0;
      if (arr?.length > 0) {
        arr.forEach(
          (item) =>
            (sum += +(item[field] ? item[field].replace(',', '.') : 0))
        );
      }
      return sum.toFixed(2);
    };
    houses[key]['takeFromBaseModule'] = (arr, field) => {
      if (arr?.length > 0) {
        let value = arr[0]?.[field];
        if (value) {
          value = value.replace(',', '.');
        }
        return value;
      }
    };
  }
  houseArr.sort((a, b) => +a.position - +b.position);
  houseArr = houseArr.filter((item) => +item.published>0);
  // console.log(houseArr);

  return houseArr;
}
