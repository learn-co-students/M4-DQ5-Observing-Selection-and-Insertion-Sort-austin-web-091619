function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
for(let i=1; i<arr.length;i++){
  for(let inner = i-1; inner>=0 ;inner--){
    if(arr[inner]>arr[inner+1] ){
      
      let oldInner = arr[inner]
      let oldI =arr[inner+1]
      arr[inner+1]=oldInner
      arr[inner]=oldI
    } else {break}
  }
}
 return arr
}
