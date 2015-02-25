// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var status="none";
  var censor=false;
  function stringify(obj){
    console.log(status);

    if (obj ===null){
      return "null";
    }
    else if (obj ===undefined) {
      if (status === "object" || status ==="none") {
        return "";
      }
      else {
        return "null";
      }
    }
    else {
      var  objType= typeof obj;
      switch (objType) {
        case "number":
        case "boolean":
        return obj.toString();
        break;
        case "symbol":
        case "function":
        if (status!=="none"){
          censor=true;
          if (status=== "array"){
            return "null";
          }
          else {
            return "";
          }
        }
        else {
          return obj.toString();
        }
        break;
        case "string":
        return ('"'+obj+'"');
        break;
        case "object":
          if (Array.isArray(obj)){ // if it's array
            if (status ==="none") {
              status = "array";
            }
            var str="[";
            for (var i=0; i<obj.length; i++) {
              str+=stringify(obj[i]);
              if (i!= obj.length-1 && censor===false){
                str+=",";
              }
            }
            str+="]";
            return str;
          }
          else { // if it's object
            if (status === "none"){
              status ="object";
            }
            var flag=false;
            var str="{";
            for (var i in obj){
              if (!((typeof obj[i] === "function") || (typeof obj[i]=== "symbol") || obj[i]=== undefined)) {
                str+=stringify(i);
                str+=":";
                str+=stringify(obj[i]);
                str+=",";
                flag=true;
              }
              else {
                str+="";
              }
              
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
  }
  return stringify(obj);
};
