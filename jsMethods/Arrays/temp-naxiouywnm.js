
var arr = [1,2,3]


function times(num){
  sum = 0
for(var i = 0; i < num.length; i++){
   num += num[i] * 2
  console.log(num)
}
return num
}
times(arr)