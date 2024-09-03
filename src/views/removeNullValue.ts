// @ts-nocheck
function removeNullValues(obj: Object) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const cleanedObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = removeNullValues(obj[key]);

      if (value !== null && value !== undefined) {
        if (Array.isArray(cleanedObj)) {
          cleanedObj.push(value);
        } else {
          cleanedObj[key] = value;
        }
      }
    }
  }

  return cleanedObj;
}

export { removeNullValues };
