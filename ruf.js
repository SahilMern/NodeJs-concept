let data = 1
if (true) {
  let data = 10; // Block-scoped, so different from the outer y
  console.log(data); // 10
}

console.log(data);
