const apis = Promise.all([
  fetch("https://dummyjson.com/products"),
  fetch("https://dummyjson.com/users"),
]);

apis
  .then((res) => {
    return Promise.all([
      res[0].json(), 
      res[1].json(), 
    ]);
  })
  .then((data) => {
    const productsData = data[0];
    const usersData = data[1];

    console.log({ productsData, usersData });
    return { productsData, usersData };
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
