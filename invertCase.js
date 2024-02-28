const invertCase = (text) => {
  let i = 0;
  let result = '';
  
  while (i < text.length) {
    if (text[i] === undefined) {
      result += text[i];
    } else if (text[i] === text[i].toUpperCase()) {
      result += text[i].toLowerCase();
    } else {
      result += text[i].toUpperCase();
    }
    
    i++;
  }
  
  return result;
};
