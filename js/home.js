
    // Your code here
    let slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
  
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
  












    // function fetchData() {
    //     fetch('https://fakestoreapi.com/products/')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.length)
    //         console.log(data)
    //     //console.log(data.products.length);
    //     for(let i=0; i<data.length; i++){
            
    //     }
    //     })

        
    // }
    const apiUrl = 'https://fakestoreapi.com/products/'; // Replace with your API endpoint

    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const categoriesContainer = document.getElementById('categories');
        let currentRow;
    
        // Loop through the data and generate carts
        data.forEach((item, index) => {
          if (index % 3 === 0) {
            currentRow = document.createElement('div');
            currentRow.classList.add('row');
            categoriesContainer.appendChild(currentRow);
          }
    
          const category = item.category;
          const picture = item.image;
          const description = item.description;
          const price = item.price;
    
          // Create the cart element
          const cart = document.createElement('div');
          cart.classList.add('cart');
    
          // Create the cart content
          const cartContent = `
            <img src="${picture}" alt="${category}">
            <h3>${category}</h3>
            <p>${description}</p>
            <p>Price: $${price}</p>
            <button class="add-to-cart">Add to Cart</button>
          `;
    
          // Set the cart content
          cart.innerHTML = cartContent;
    
          // Append the cart to the current row
          currentRow.appendChild(cart);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });






      function scrollToProduct() {
        const productSection = document.getElementById('categories');
        productSection.scrollIntoView({ behavior: 'smooth' });
      }