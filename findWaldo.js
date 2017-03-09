// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element,i){
    if (element === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(position) {
  console.log(`Found Waldo at position ${position}`);
}

findWaldo(["Alice", "Bob", "Julius" ,"Waldo", "Winston"], actionWhenFound);