var myarray=[25, 8, 7, 41]
myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
  console.log(`a is ${a} and b is ${b} : a-b = ${a-b}`)
    return a - b
})