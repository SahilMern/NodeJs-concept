const response = fetch("https://dummyjson.com/products");

response
  .then((data) => {
    const value = data.json();
    return value;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("errro aa gaya ", error);
  });
