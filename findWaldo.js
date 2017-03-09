// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(position) {
  console.log(`Found Waldo at position${position}`);
}

findWaldo(["Alice", "Bob", "Julius" ,"Waldo", "Winston"], actionWhenFound);