// JavaScript code for any interactivity or functionality can be added here

// Function to fetch product details from API or use pre-defined data
function getProductDetails(productId) {
    // Replace this with your own logic to fetch product details from an API
    // For demonstration purposes, we're using a switch statement with pre-defined data
    switch (productId) {
      case 1:
        return {
          name: "Product 1",
          price: 10,
          description: "This is the first product.",
          image: "product1.jpg"
        };
      case 2:
        return {
          name: "Product 2",
          price: 15,
          description: "This is the second product.",
          image: "product2.jpg"
        };
      default:
        return null;
    }
  }
  
  function openModal(productId) {
    // Fetch product details from API or use pre-defined data
    const product = getProductDetails(productId);
    
    // Update the modal content with product details
    document.getElementById("productImg").src = product.image;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = "$" + product.price;
    document.getElementById("productDescription").textContent = product.description;
    
    // Show the modal
    document.getElementById("productModal").style.display = "block";
  }
  
  function closeModal() {
    // Hide the modal
    document.getElementById("productModal").style.display = "none";
  }
  