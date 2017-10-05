export function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false; 
    }
    
    let dict = {};
    
    for (let i = 0; i < str1.length; i++) {
       if (dict[str1[i]]) {
          dict[str1[i]] += 1; 
       } else {
          dict[str1[i]] = 1; 
       }
    }
    
    for (let k = 0; k < str2.length; k++) {
      if (dict[str2[k]]) {
        dict[str2[k]] -= 1; 
      } else {
        return false;
      }
    }
    
    return true;
};