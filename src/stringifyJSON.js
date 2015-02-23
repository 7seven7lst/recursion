// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj ===null){
    return "null";
  }
  else if (obj ===undefined) {
    return "";
  }
  else {
    var  objType= typeof obj;
    switch (objType) {
      case "number":
      case "boolean":
      case "symbol":
      return obj.toString();
      break;
      case "string":
      return ('"'+obj+'"');
      break;
      case "object":
        if (Array.isArray(obj)){ // if it's array
          var str="[";
          for (var i=0; i<obj.length; i++) {
            str+=stringifyJSON(obj[i]);
            if (i!= obj.length-1){
              str+=",";
            }
          }
          str+="]";
          return str;
        }
        else { // if it's object
          var flag=false;
          var str="{";
          for (var i in obj){
            str+=stringifyJSON(i);
            str+=":";
            str+=stringifyJSON(obj[i]);
            str+=",";
            flag=true;
          }
          if (flag===true){
            str=str.substring(0,str.length-1);
          }
          str+="}";
          return str;
        }
      break;
    }
  } 
};
