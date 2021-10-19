function getMainPage(query) { 
  const data = query?.allMysqlMainPage?.nodes;
  let obj = {};
  let names = {
    Заголовок: "title",
    Текст: "subtitle",
    Иконка: "image",
  };

  data?.forEach((item) => {
    let key = item.parameterName.slice(7, 8);
    let name = item.parameterName.slice(9);

    if (obj[key]) {
      obj[key][names[name]] = item.parameterValue;
    } else {
      obj[key] = {};
      obj[key][names[name]] = item.parameterValue;
    }
  });

  let dataArr = [];
  let index = 0
  for (let key in obj) {
    obj[key].id = index;
    dataArr.push(obj[key]);
    index+=1;
  }
  return dataArr;
}

export default getMainPage;
