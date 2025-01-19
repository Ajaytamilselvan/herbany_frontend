import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css"; 

const Product_page = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="container">
            <h1 className="title">Our Products</h1>
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="product-card" key={product.id}>
                            {product.image_url && <img src={product.image_url} alt={product.name} className="product-image" />}
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <h4>₹{product.price}</h4>
                            <button className="buy-button">Buy Now</button>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default Product_page;
