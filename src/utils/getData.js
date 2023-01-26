import isJsonObject from './isJsonObject';

export default function getData(data) {
  if(!data){
    return null
  }
  const dataObj = {};
  data.forEach((item) => {
    dataObj[item.name] = isJsonObject(item.value)
      ? JSON.parse(item.value)
      : item.value;
  });
  if (dataObj['form-block-with-gallery']) {
    dataObj['form-block-with-gallery'][0].gallery = JSON.parse(
      dataObj['form-block-with-gallery'][0].gallery
    );
  }
  if (dataObj['arenda_houses']) {
    dataObj['arenda_houses'].forEach((item,index)=>{
      if(item.house_calendar){
        item.house_calendar = isJsonObject(item.house_calendar)?JSON.parse(item.house_calendar):item.house_calendar
      }
    }) ;
  }

  if (dataObj['arenda_houses_group']) {
    dataObj['arenda_houses_group'].forEach((item,index)=>{
      item.houses_group_list = JSON.parse(item.houses_group_list);
      item.houses_group_list.forEach((item,index)=>{
        item.house_options = isJsonObject(item.house_options)?JSON.parse(item.house_options):item.house_options;
      })
    }) ;
  }
  return dataObj;
}
