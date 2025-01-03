function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1,2,3];
const arr2 = [4,5, "hello"];

const result = combine(arr1, arr2);
console.log(result); //[1,2,3,4,5,"hello"]