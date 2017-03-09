function map(array,fn){
  var output = [];
  array.forEach(function(element){
   output.push(fn(element));
  });
  return output;
};

var words = ["ground", "control", "to", "major", "tom"];

var result = map(words, function(word) {
  return word.length;
});

console.log(result);

