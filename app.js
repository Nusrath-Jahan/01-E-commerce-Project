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
  },
];
// Cart array to store added products
let cart = [];

// Function to generate product elements
function generateProductElements() {
  const productContainer = document.querySelector(".product-list");

  products.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.classList.add("product-item");

    productElement.innerHTML = `
      <div>
        <img src="${product.image}" alt="${product.name}" />
        <h1 class="product-name">${product.name}</h1>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;

    productContainer.appendChild(productElement);
  });

  // Add event listeners to all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}
// Function to add product to the cart
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  if (product) {
    cart.push(product); // Add product to cart array
    updateCartDisplay(); // Update cart UI
    showConfirmationMessage(product.name); // Show confirmation
  }
}

// Call the function to generate product elements when the DOM is fully loaded

//document.addEventListener("DOMContentLoaded", generateProductElements);
document.addEventListener("DOMContentLoaded", () => {
  generateProductElements();
});

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  const inputValue = searchInput.value.toLowerCase();
  const filteringProducts = products.filter((product) =>
    product.title.toLowerCase().includes(inputValue)
  );

  generateProductElements(filteringProducts);
});

// Function to sort and display products
document.addEventListener("DOMContentLoaded", () => {
  const sortDropdown = document.getElementById("sort");

  sortDropdown.addEventListener("change", () => {
    const sortOrder = sortDropdown.value;

    // Sort the original products array based on selected criteria
    const sortedProducts = products.sort((a, b) => {
      if (sortOrder === "price-asc") {
        // Sort by price, ascending
        return (
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
        );
      } else {
        // Sort by price, descending
        return (
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
        );
      }
    });

    // Clear the existing product list in the DOM
    const productContainer = document.querySelector(".product-list");
    productContainer.innerHTML = "";

    // Generate sorted product elements and append them to the product list
    sortedProducts.forEach((product) => {
      const productElement = document.createElement("li");
      productElement.classList.add("product-item");

      productElement.innerHTML = `
        <div>
          <img src="${product.image}" alt="${product.name}" />
          <h1 class="product-name">${product.name}</h1>
          <p class="product-description">${product.description}</p>
          <p class="product-price">${product.price}</p>
          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      `;

      productContainer.appendChild(productElement);
    });
  });
});

// Function to update the cart display

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear current cart items

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("product-item");
    cartItem.innerHTML = `
    <div>
        <img src="${item.image}" alt="${item.name}" />
        <h1 class="product-name">${item.name}</h1>
        <p class="product-description">${item.description}</p>
        <p class="product-price">${item.price}</p>
        
      </div>
      
    `;

    cartItemsContainer.appendChild(cartItem);
  });
}

// Function to show a confirmation message

function showConfirmationMessage(productName) {
  const elementDiv = document.createElement("div");
  elementDiv.className = "popUpCartMessage";
  elementDiv.textContent = `${productName} has been added to your cart!`;

  document.body.appendChild(elementDiv);

  setTimeout(() => {
    elementDiv.classList.add("show");
  }, 100);

  setTimeout(() => {
    elementDiv.classList.remove("show");
    setTimeout(() => {
      elementDiv.remove(); // Remove the element from DOM after animation completes
    }, 500); // Wait for the transition to finish (match transition time in CSS)
  }, 4000); // Show the popup for 4 seconds
}

////// Milestone-4

let API_URL = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", async () => {
  //step 1: fetch data from api
  let products = [];
  try {
    let response = await fetch(API_URL);
    let data = await response.json();
    products = data;
    console.log(products);

    displayProducts(products);
  } catch (error) {
    console.error("error fetching the api", error);
  }
});

function displayProducts(products) {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.classList.add("product-item");
    productElement.innerHTML = `
    <div>
        <img src="${product.image}" alt="${product.name}" />
        <h1 class="product-name">${product.title}</h1>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
			`;
    productList.appendChild(productElement);
  });
}
