let num = 0;
async function increment() {
  num += await 2; //when this line set/defined, num = 0
  console.log(num);
}

increment();
num += 1;
console.log(num);

/*
What is the resulting output ?
2,3
1,3
1,2
2,1
*/
