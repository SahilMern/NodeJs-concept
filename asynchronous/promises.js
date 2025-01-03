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


  

const fetchData = new Promise((resolve, reject) => {
  const isSuccess = false; 
  setTimeout(() => {
      if (isSuccess) {
          const data = { id: 1, name: 'John Doe' };
          resolve(data);
      } else {
          reject(new Error('Failed to fetch data'));
      }
  }, 2000); 
});

fetchData.then(data => {
  console.log('Data fetched successfully:', data);
}).catch(error => {
  console.error('Error occurred:', error.message);
});
