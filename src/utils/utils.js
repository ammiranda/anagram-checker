/**
 * Function that determines whether the two strings are anagrams of each other through comparing 
 * char frequency counting and decrementing
 * @param {String} str1 
 * @param {String} str2
 * @return {boolean} - Determines if the two strings are anagrams (true) or not (false)
 */
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