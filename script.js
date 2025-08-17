let cart = [];

// Fetch products.json
fetch("products.json")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
      productList.appendChild(card);
    });

    // Add event listeners to Add to Cart buttons
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        cart.push(id);
        document.getElementById(
          "cartBtn"
        ).textContent = `Cart (${cart.length})`;
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    });
  })
  .catch((error) => console.error("Error loading products:", error));
