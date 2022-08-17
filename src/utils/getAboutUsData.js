
import isJsonObject from './isJsonObject';



export default function getAboutUsData(data, lang){
  const dataObj = {};
  const currentDataObj = lang === 'EN' &&  data.allMysqlAboutUsEn?.nodes ? data.allMysqlAboutUsEn.nodes :  data.allMysqlAboutUs.nodes;
  currentDataObj.forEach(item => {
    dataObj[item.name] = isJsonObject(item.value)?JSON.parse(item.value):item.value;
  })
  dataObj.Creators.forEach((item,index)=>{
    dataObj.Creators[index].desc = item.desc.split('\n\n');
  })
  dataObj.articles.forEach((item,index)=>{
    dataObj.articles[index].article_text = item.article_text.split('\n\n');
  })
  // console.log(dataObj)
  dataObj['form-block'] = dataObj['form-block'][0]
  
  return dataObj
}