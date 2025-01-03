async function fetchDataInParallel() {
  try {
    const [response1, response2] = await Promise.all([
      fetch("https://dummyjson.com/products"),
      fetch("https://dummyjson.com/users"),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log("Products data:", data1);
    console.log("Users data:", data2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataInParallel();

async function fetchDataSequentially() {
  try {
    const response1 = await fetch("https://dummyjson.com/products");
    const data1 = await response1.json();
    console.log("Products data:", data1);

    const response2 = await fetch("https://dummyjson.com/users");
    const data2 = await response2.json();
    console.log("Users data:", data2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataSequentially();
