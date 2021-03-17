export const arrObjFindElem = function (arrObj, attrName, attrVal) {
  for (let i = 0; i < arrObj.length; i++) {
    if (arrObj[i][attrName] === attrVal) {
      return i;
    }
  }
  return -1;
};
