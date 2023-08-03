function resultSumNums(num) {  
    sumNums(1, 2) 
   return function() {
     consle.log(result)
   }
 };
 
 function sumNums(arg1, arg2) {
     console.log(arg1 + arg2)
   };
 
 const resultFunc=resultSumNums(sumNums);