
function coins_combinations(amount, coins) {
  // write your code here
  const arr1 = new Array(amount + 1).fill(0);
  arr1[0] = 1;
  for (const coin of coins){
    for (let i = coin; i <= amount; i++){
      arr1[i] += arr1[i - coin]
    }
  }
  return arr1[amount];
}

console.log(coins_combinations(11,  [5, 7]));


function stringContains(firstName, contains) {
  // write your code here
  return firstName.includes(contains)
}
console.log(stringContains("Sara", "s"));




function countWords(txt) {
  // write your code here
  const arr = txt.split(/\s+/);
  return arr.length
  };
  console.log(countWords('Nora is a very ambitious person'))

