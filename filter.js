angular.module("myApp").filter("userDataFormat", function(){
    return function(data){

        return (!!data) ? data.charAt(0).toUpperCase()+ data.substr(1): '';
    }

});
  