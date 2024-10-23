const generateProducts = () => {
    let products = [];
    for (let i = 1; i <= 100000; i++) {
      products.push({
        id: i,
        name: `Product ${i}`,
        price: (Math.random() * 100).toFixed(2),
        description: `Description for Product ${i}`,
        imageUrl: `https://example.com/product${i}.jpg`,
      });
    }
    return products;
  };
  
  
const getProducts = (req, res) => {
    const products = generateProducts();
    
    // Express automatically compresses the response
    res.json(products);
  };
export default getProducts;