const validateText = (text) => {
  if(!text.match(/script|<form>/gi)){
    return text;
  }else{
    return '';
  }
  };
  export default validateText;