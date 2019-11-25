
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  
  // for(let i=0; i<arr.length; i++){
  //   for(let inner=i+1; inner<arr.length; inner++){
  //     if(arr[inner] < arr[i]){
  //       let first = arr[inner]
  //       let second = arr[i]
  //       arr[inner]=second
  //       arr[i]=first
  //     }
  //   }
  function selectionSort(arr) {
    // iterate through arr
    // compare number from first loop to number from second loop
    // if number from second loop is smaller place it in the front of the array
       for(let i = 0; i < arr.length; i++){
         for(let a = i + 1; a < arr.length; a++){
           if (arr[a] < arr[i]){
             const first = arr[i]
             const second = arr[a]
             arr[i] = second
             arr[a] = first
           }
         }
       }
       return arr
   }

