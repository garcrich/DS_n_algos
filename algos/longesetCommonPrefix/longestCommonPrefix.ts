const  longestCommonPrefix = (strs: string[]): string => {
  if (!strs || strs.length === 0) {
      return "";
  }

  if(strs.length === 1) {
        return strs[0];  
  }

  let prefix: string = strs[0];

  for(let i: number = 1; i < strs.length; i++) {
      let currentStr: string = strs[i];
      prefix = getCommonPrefix(currentStr, prefix);
      if (prefix === "") 
        break;
  }

  return prefix;
}

const getCommonPrefix = (str: string, prefix: string) => {
    let posOfPrefixOnStr: number = str.indexOf(prefix);
    while (posOfPrefixOnStr !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        posOfPrefixOnStr = str.indexOf(prefix);
        if (prefix === "") 
            return "";
    }
    return prefix;
}

longestCommonPrefix(["flight","flower","flow"])

export default longestCommonPrefix;