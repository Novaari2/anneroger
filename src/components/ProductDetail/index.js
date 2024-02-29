"use client"
import Reviews from "@/components/Review"
import { useState } from "react";

const { default: Image } = require("next/image")

const ProductDetail = ({ product, reviews }) => {
    const [selectedSize, setSelectedSize] = useState('');

    // Function to handle selecting a size
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const addToCart = () => {
        // Add logic to handle adding the product to the cart
        alert('Product added to cart:', {product, selectedSize});
      };
    return(
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <Image src={product.image} alt={product.name} width={500} height={500} className="w-full h-auto object-cover rounded-lg mb-4" />
                </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-800 text-lg font-semibold mb-4">Price: ${product.price}</p>
                {/* Product size options */}
                <div className="mb-4">
                <p className="text-gray-800 font-semibold mb-2">Select Size:</p>
                <div className="flex items-center">
                    <input
                    type="radio"
                    id="size-small"
                    value="Small"
                    checked={selectedSize === 'Small'}
                    onChange={handleSizeChange}
                    className="mr-2"
                    />
                    <label htmlFor="size-small" className="mr-4">Small</label>
                    <input
                    type="radio"
                    id="size-medium"
                    value="Medium"
                    checked={selectedSize === 'Medium'}
                    onChange={handleSizeChange}
                    className="mr-2"
                    />
                    <label htmlFor="size-medium" className="mr-4">Medium</label>
                    <input
                    type="radio"
                    id="size-large"
                    value="Large"
                    checked={selectedSize === 'Large'}
                    onChange={handleSizeChange}
                    className="mr-2"
                    />
                    <label htmlFor="size-large" className="mr-4">Large</label>
                    {/* Add more size options if needed */}
                </div>
                </div>

                {/* Add to cart button */}
                <button className="bg-color-button text-white rounded p-2 w-32" onClick={addToCart}>Add to Cart</button>


                {/* You can add more product details here */}
            </div>
            </div>
            <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
            {/* Render reviews here */}
            <Reviews review={reviews} />
            </div>
        </div>
    )
}

export default ProductDetail