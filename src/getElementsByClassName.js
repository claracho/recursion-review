// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // use document.body, element.childNodes, and element.classList
  var node = arguments[1] || document.body;
  var result = arguments[2] || [];

  // if the node.classList contains className, then push node
  if (node.classList && node.classList.contains(className)) {
    result.push(node);
  }
  // if node.childNodes exist, run getElementsByClassName(childNodes) for each child
  if (node.hasChildNodes()) {
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      getElementsByClassName(className, children[i], result);
    }
  }

  return result;
};
