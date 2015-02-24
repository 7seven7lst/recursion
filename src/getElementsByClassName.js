// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
	var expectedArray=[];
	function getExpectedArray(node){
	 	if (node=== document.body){
	 		var found=false;
	 		for (var j in node.classList) {
	 			if (node.classList[j] === className) {
	 				expectedArray.push(node);
	 				break;
	 			}
	 		}
        }
	    if (node.firstChild) {
	        for(var i in node.childNodes) {
	            for (var j in node.childNodes[i].classList){
	               if (node.childNodes[i].classList[j]=== className)
	                 expectedArray.push(node.childNodes[i]);
	              }
	              getExpectedArray(node.childNodes[i]);
	           }
	    }    
	}   
getExpectedArray(document.body);
return expectedArray;       
  
};
