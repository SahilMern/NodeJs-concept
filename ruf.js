{ $expr: { <operator>: [ <expression1>, <expression2> ] } }


// Example:






const discountedProducts = await db.products.find({
    $expr: { $lt: ["$discountPrice", "$price"] }
}).toArray();


// Output:
