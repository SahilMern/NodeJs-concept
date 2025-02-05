// Dummy data (products collection)
const products = [
    { name: "Smartwatch", price: 199.99, category: "Electronics", stock: 200 },
    { name: "Laptop", price: 899.99, category: "Electronics", stock: 50 },
    { name: "Shirt", price: 29.99, category: "Clothing", stock: 500 },
    { name: "Jeans", price: 49.99, category: "Clothing", stock: 150 },
    { name: "Headphones", price: 49.99, category: "Audio", stock: 300 },
    { name: "Monitor", price: 199.99, category: "Electronics", stock: 100 },
    { name: "Tablet", price: 299.99, category: "Electronics", stock: 150 }
  ];
  

  const data = async(req, res) => {
    const limitedProducts = await Product.find({}).limit(3);
    limitedProducts.forEach(doc => {
      console.log(doc);
    });
    
  }
  data()

  // Dummy data (products collection)
const products = [
  { name: "Smartwatch", price: 199.99, category: "Electronics", stock: 200 },
  { name: "Laptop", price: 899.99, category: "Electronics", stock: 50 },
  { name: "Shirt", price: 29.99, category: "Clothing", stock: 500 },
  { name: "Jeans", price: 49.99, category: "Clothing", stock: 150 },
  { name: "Headphones", price: 49.99, category: "Audio", stock: 300 },
  { name: "Monitor", price: 199.99, category: "Electronics", stock: 100 },
  { name: "Tablet", price: 299.99, category: "Electronics", stock: 150 }
];


const data = async(req, res) => {
  const limitedProducts = await Product.find({}).limit(3);
  limitedProducts.forEach(doc => {
    console.log(doc);
  });
  
}
data()