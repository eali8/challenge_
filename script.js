document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");
  const template = document.getElementById("product-template");
  const showMoreBtn = document.getElementById("show-more-btn");

  // Product data with different images, titles, and prices
  const products = [
    {
      id: 1,
      image: "img/image_1.png",
      hoverImage: "img/image_2.png",
      title: "Outside Vibes T-Shirt Sunshine",
      price: "$104.95",
      reviews: 1234
    },
    {
      id: 2,
      image: "img/image_2.png",
      hoverImage: "img/image_3.png",
      title: "Mountain Adventure Hoodie",
      price: "$89.95",
      reviews: 856
    },
    {
      id: 3,
      image: "img/image_3.png",
      hoverImage: "img/image_4.png",
      title: "Urban Explorer Jacket",
      price: "$129.95",
      reviews: 2341
    },
    {
      id: 4,
      image: "img/image_4.png",
      hoverImage: "img/image_5.png",
      title: "Weekend Warrior Shorts",
      price: "$59.95",
      reviews: 567
    },
    {
      id: 5,
      image: "img/image_5.png",
      hoverImage: "img/image_1.png",
      title: "Trail Blazer Sneakers",
      price: "$149.95",
      reviews: 3421
    },
    {
      id: 6,
      image: "img/image_6.png",
      hoverImage: "img/image_7.png",
      title: "Sunshine Wallet for Her",
      price: "$108.95",
      reviews: 789
    },
    {
      id: 7,
      image: "img/image_7.png",
      hoverImage: "img/image_8.png",
      title: "Cheeky Wallet",
      price: "$108.95",
      reviews: 1567
    },
    {
      id: 8,
      image: "img/image_8.png",
      hoverImage: "img/image_9.png",
      title: "Charcoal Wallet",
      price: "$154.95",
      reviews: 892
    },
    {
      id: 9,
      image: "img/image_9.png",
      hoverImage: "img/image_10.png",
      title: "Love is in the Air",
      price: "$94.95",
      reviews: 445
    },
    {
      id: 10,
      image: "img/image_10.png",
      hoverImage: "img/image_1.png",
      title: "Venus Charcoal",
      price: "$214.95",
      reviews: 2109
    }
  ];

  // Create products dynamically
  function createProducts() {
    productContainer.innerHTML = ''; // Clear existing products

    products.forEach(product => {
      const productElement = template.content.cloneNode(true);

      // Update image
      const img = productElement.querySelector('img');
      img.src = product.image;
      img.alt = product.title;
      img.dataset.hover = product.hoverImage;
      img.dataset.original = product.image;

      // Update title
      productElement.querySelector('p').textContent = product.title;

      // Update price
      const priceElement = productElement.querySelector('.price');
      priceElement.textContent = product.price;

      // Update reviews count
      const reviewsElement = productElement.querySelector('.reviews');
      reviewsElement.textContent = `${product.reviews} reviews`;

      productContainer.appendChild(productElement);
    });
  }

  // Add hover functionality
  function addHoverEffects() {
    const productImages = productContainer.querySelectorAll('img');

    productImages.forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.src = img.dataset.hover;
      });

      img.addEventListener('mouseleave', () => {
        img.src = img.dataset.original;
      });
    });
  }

  // Function to handle layout based on screen size
  function handleLayout() {
    const items = [...productContainer.children];

    if (window.innerWidth >= 768) {
      // Set width for each product to show 5 items
      items.forEach(item => {
        item.classList.add("flex-shrink-0");
        item.style.width = "calc(20% - 16px)"; // 5 items per view (100%/5 - gap)
        item.classList.remove("hidden");
      });
    } else {
      items.forEach(item => {
        item.classList.remove("flex-shrink-0");
      });

      // Show only 4 items initially
      items.forEach((item, index) => {
        if (index > 4) {
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
      });
    }
  }

  // Initialize everything
  createProducts();
  addHoverEffects();
  handleLayout();

  window.addEventListener("resize", handleLayout);

  // Mobile show more button functionality
  showMoreBtn.addEventListener("click", () => {
    const items = [...productContainer.children];
    items.forEach((item) => item.classList.remove("hidden"));
    showMoreBtn.style.display = "none";
  });
});
