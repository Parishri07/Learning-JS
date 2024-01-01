// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

const arr = [1, 6, 7, 7, 7, 8, 8, 3, 4, 2];
const darr = [];

for(let i=0 ; i<arr.length; i++){
  if((arr[i] == arr[i+1]) && (arr[i] == arr[i+2])){
    darr[i] = arr[i];
    darr[i+1] = 2*arr[i+1];
    i++;
  }
  else if(arr[i] == arr[i+1]){
    darr[i] = 2*arr[i];
  }
  else{
    darr[i]= arr[i];
  }
}

console.log(darr);