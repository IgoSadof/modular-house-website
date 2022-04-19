
import isJsonObject from './isJsonObject';



export default function getAboutUsData(data){
  const dataObj = {};
  data.allMysqlAboutUs.nodes.forEach(item => {
    dataObj[item.name] = isJsonObject(item.value)?JSON.parse(item.value):item.value;
  })
  dataObj.Creators.forEach((item,index)=>{
    dataObj.Creators[index].desc = item.desc.split('\n\n');
  })
  dataObj.articles.forEach((item,index)=>{
    dataObj.articles[index].article_text = item.article_text.split('\n\n');
  })
  dataObj.aboutus_form = dataObj.aboutus_form[0]
  
  return dataObj
}