import React from 'react';

export default function TextToHtml({text}) {


  //  const newtext= text.replace('<br>','\n')
   const newtext = text.split('<br>');
   let elementArr;
   if(newtext.length>0){
    elementArr = newtext.map((item,index)=>{

      if(index != newtext.length-1 ){
        return(<><span key={index}>{item}</span><br/></>)

        
      }else{
        return(<span key={index}>{{item}}</span>)
      }
    })

    console.log(elementArr)

   }

  return <span>{elementArr}</span>;
}
