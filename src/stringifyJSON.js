// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr + ']';
  }
  if (typeof obj === 'object' && obj !== null) {
    var objArr = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        objArr.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }
    return '{' + objArr + '}';
  }
  return '' + obj;
};
