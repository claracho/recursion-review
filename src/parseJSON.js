// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // for array
  if (json[0] === '[') {
    var arr = [];
    // for empty array
    if (json.length === 2) {
      return arr;
    }
    var arrContent = json.slice(1, json.length - 1).split(/,\s*/);
    arrContent.forEach(function (item) {
      arr.push(parseJSON(item));
    });
    return arr;
  }
  // for objects
  if (json[0] === '{') {
    var obj = {};
    // for empty object
    if (json.length === 2) {
      return obj;
    }
    var objContent = json.slice(1, json.length - 1).split(/,\s*/); // array contains key:value pair
    objContent.forEach(function (item) {
      var keyValue = item.split(/:\s*/);
      obj[parseJSON(keyValue[0])] = parseJSON(keyValue[1]);
    });
    return obj;
  }
  // for string
  if (json[0] === '"') {
    // for empty string
    if (json.length === 2) {
      return '';
    }
    return json.slice(1, json.length - 1);
  }
  // case for null, false, true
  if (/^(\w|-)/.test(json)) {
    if (json === 'null') {
      return null;
    }
    if (json === 'true') {
      return true;
    }
    if (json === 'false') {
      return false;
    }
    // case for numbers
    return Number(json);
  }
};
