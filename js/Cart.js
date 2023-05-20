
var navLinks = document.getElementsByClassName("nav-link");

// Add click event listener to each navigation link
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    // Remove active class from all navigation links
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    
    // Add active class to the clicked navigation link
    this.classList.add("active");
  });
}




var storedUserNumDataJSON = localStorage.getItem("currentuser");
// var storedRegistrationDataJSON = localStorage.getItem("registrationData");
var storedRegistrationDataJSON = JSON.parse(localStorage.getItem('registrationData'));

var nameContainer = document.getElementById("name-container");
// var storedRegistrationData = JSON.parse(storedRegistrationDataJSON);




nameContainer.textContent = storedRegistrationDataJSON[storedUserNumDataJSON].username;





var ProductInCart = JSON.parse(localStorage.getItem("data"))
console.log(ProductInCart)



function addToCart(product) {
    ProductInCart.push(product);
    console.log('Added to cart:', product);
  }
  
  // Generate cart items on the cart page
  function generateCartItems() {
    const cartContainer = document.getElementById('cart-products');
    cartContainer.innerHTML = '';
  
    ProductInCart.forEach((item) => {

        
        
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      const productContent = `
        <img src="${item.picture}" />
        <p>${item.description}</p>
        <div class="product-info">
          <p>
            <b>${item.category}</b>
            
          </p>
          <div class="counter">
            <button class="counter-btn increase">+</button>
            <div class="count">${item.quantity}</div>
            <button class="counter-btn decrease">-</button>
          </div>
          <div class="price">
            <div class="amount">$${(item.price*item.quantity).toFixed(2)}</div>
          </div>
        </div>
      `;
      productElement.innerHTML = productContent;
      cartContainer.appendChild(productElement);
    });
  
    // Attach event listeners to the quantity buttons
    const increaseButtons = document.querySelectorAll('.counter-btn.increase');
    const decreaseButtons = document.querySelectorAll('.counter-btn.decrease');

    

    increaseButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        increaseQuantity(index);
      });
    });

    

    decreaseButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        decreaseQuantity(index);
      });
    });
  }

  

  // Increase quantity of an item
  function increaseQuantity(index) {
    ProductInCart[index].quantity++;
    generateCartItems();
    total1();
  }

  
  // Decrease quantity of an item
  function decreaseQuantity(index) {
    if (ProductInCart[index].quantity > 1) {
        ProductInCart[index].quantity--;
      generateCartItems();
      total1();
    }
    else{
        ProductInCart.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(ProductInCart));
        location.reload();
        console.log(ProductInCart)
    }
  }
  let total =0;
  function total1(){
  for (var i=0;i<ProductInCart.length;i++){
    total =( total + ((ProductInCart[i].price)*(ProductInCart[i].quantity)))
  } 
  const tot= document.getElementById("total");
    tot.textContent  = "$"+ total.toFixed(1);
}
total1();
  // Initial generation of cart items
  generateCartItems();