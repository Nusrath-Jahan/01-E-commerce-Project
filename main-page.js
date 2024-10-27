// Example array of products
const products = [
  {
    id: 1,
    name: "Faywa Dress",
    price: "$100.99",
    description: " A stunning designer dress, perfect for special occasions.",
    image: "/Product Image/Faywa Dress.jpeg",
  },
  {
    id: 2,
    name: "Superfast Laptop",
    price: "$899.99",
    description: " High-performance laptop for all your work and gaming needs.",
    image: "/Product Image/Superfast Laptop.jpeg",
  },
  {
    id: 3,
    name: "Glow Beauty Cream",
    price: "$29.99",
    description: "A nourishing cream that gives your skin a radiant glow.",
    image: "/Product Image/Glow Beauty Cream.jpeg",
  },
  {
    id: 4,
    name: "Running Sneakers",
    price: "$29.99",
    description: "  Comfortable and stylish sneakers for your daily runs.",
    image: "/Product Image/Running Sneakers.jpeg",
  },
  {
    id: 5,
    name: "Casual T-shirt",
    price: "$19.99",
    description: "   A comfy, casual t-shirt for everyday wear.",
    image: "/Product Image/Casual T-shirt.jpeg",
  },
  {
    id: 6,
    name: "Smartwatch Pro",
    price: "$199.99",
    description: "A sleek smartwatch with fitness tracking and notifications.",
    image: "/Product Image/Smartwatch Pro.jpeg",
  },
  {
    id: 7,
    name: "Casual T-shirt",
    price: "$19.99",
    description: "  A comfy, casual t-shirt for everyday wear.",
    image: "/Product Image/Casual T-shirt.jpeg",
  },
  {
    id: 8,
    name: "Smartwatch Pro",
    price: "$149.99",
    description: " Stay connected with style using this sleek smartwatch.",
    image: "/Product Image/Smartwatch Pro.jpeg",
  },
  {
    id: 9,
    name: "Matte Lipstick",
    price: "$12.99",
    description: " Long-lasting matte lipstick in various shades.",
    image: "/Product Image/Matte Lipstick.jpeg",
  },
  {
    id: 10,
    name: "Classic High Heels",
    price: "$59.99",
    description: " Elevate your look with these stylish high heels.",
    image: "/Product Image/Classic High Heels.jpeg",
  }
];

// Function to generate product elements
function generateProductElements() {
  const productContainer = document.querySelector(".product-list");

  products.forEach((product) => {
    const productElement = document.createElement("li");
    // Add a class to the productElement
    productElement.classList.add("product-item");

    productElement.innerHTML = `
        <div>
        <img src="${product.image}" alt="${product.name}" />
        <h1 class="product-name">${product.name}</h1>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
        </div>
      `;

    productContainer.appendChild(productElement);
  });
}

// Call the function to generate product elements when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateProductElements);
