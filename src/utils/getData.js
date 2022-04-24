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
  return dataObj;
}
