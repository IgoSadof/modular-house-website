import isJsonObject from './isJsonObject';

export default function getData(data) {
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
      item.house_calendar = JSON.parse(item.house_calendar)
    }) ;
  }
  return dataObj;
}
