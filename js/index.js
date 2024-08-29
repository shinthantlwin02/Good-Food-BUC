// placeholder data

const mainCourses = [
  {
    name: 'Japan Takoyaki',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/Japanese-takoyaki.png',
  },
  {
    name: 'Tom Yum Rice Bowl',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/tomyum-rice-bowl.png',
  },
  {
    name: 'Japanese Ramen',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/japanese-ramen.png',
  },
  {
    name: 'Indian Curry',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/indian-curry.png',
  },
  {
    name: 'Fried Noodle',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/fried-noodle.png',
  },
  {
    name: 'Coconut Noodle',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/coconut-noodle.png',
  },
  {
    name: 'Korean Bulgogi',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/korean-bulgogi.png',
  },
  {
    name: 'Chinese Tofu',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/chinese-tofu.png',
  },
];

const appetizers = [
  {
    name: 'Chicken Nuggets',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/chicken-nugget.png',
  },
  {
    name: 'Dim-Sum Dumplings',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/dimsum-dumplings.png',
  },
  {
    name: 'Spring Rolls',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/dimsum-dumplings.png',
  },
  {
    name: 'Dim-Sum Dumplings',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/dimsum-dumplings.png',
  },
  {
    name: 'Dim-Sum Dumplings',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/dimsum-dumplings.png',
  },
  {
    name: 'Dim-Sum Dumplings',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/dimsum-dumplings.png',
  },
  {
    name: 'Dim-Sum Dumplings',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/dimsum-dumplings.png',
  },
  {
    name: 'Dim-Sum Dumplings',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/dimsum-dumplings.png',
  },
  {
    name: 'Dim-Sum Dumplings',
    desc: 'filled with tender pieces of octopus, topped with a savory drizzle of Takoyaki sauce and creamy mayonnaise',
    price: '5500',
    img: 'assets/images/dimsum-dumplings.png',
  },
];

const cartItems = [];

// placeholder data end

if (window.location.pathname.includes('menu.html')) {
  let courses = mainCourses;
  const menuItems = document.querySelector('.menu-items');

  const renderMenuItems = () => {
    const menuCards = courses.map(
      (course) => `<div class="menu-card">
     <img src=${course.img} alt=${course.name}/>
     <h2 class="tenor-sans-regular">${course.name}</h2>
     <p class="tenor-sans-regular">${course.desc}</p>
     <div>
     <span>Ks ${course.price}</span>
     <button class="btn-warning order-now-btn">Order Now</button>
     </div>
     </div>`
    );
    menuItems.innerHTML = menuCards;

    const orderNowButtons = document.querySelectorAll('.order-now-btn');

    // Add event listener to each button
    orderNowButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Push the selected item to the cartItems array
        cartItems.push(courses[index]);

        // Log for debugging, to confirm the item is added
        console.log('Cart Items:', cartItems);

        // Optionally update the cart icon or count in the navbar
        // renderNavbar();
      });
    });
  };

  renderMenuItems();

  document.querySelector('.main-course-btn').addEventListener('click', () => {
    courses = mainCourses;
    renderMenuItems();
  });

  document.querySelector('.appetizer-btn').addEventListener('click', () => {
    courses = appetizers;
    renderMenuItems();
  });

  const orderNowButton = document.querySelector('.order-now-btn');

  orderNowButton.addEventListener('click', () => {
    cartItems.push({ name: 'item1' });
  });
}

//render navbar

const navbar = `
 <nav class="navbar">
        <img src="/assets/icons/logo.svg" />
        <ul class="nav-items tenor-sans-regular">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html#contact">Contact</a>
          </li>
          <li>
            <a href="menu.html">Menu</a>
          </li>
          <li>
            <a href="reviews.html">Reviews</a>
          </li>
          <li>
            <a href="#">Order Now</a>
          </li>
        </ul>
        <a href="cart.html">
          <img src="/assets/icons/cart.svg" />
        </a>
      </nav>
`;

const transparentNavbar = `
<nav class="navbar-transparent">
          <img src="/assets/icons/logo-white.svg" />
          <ul class="nav-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="menu.html">Menu</a>
            </li>
            <li>
              <a href="reviews.html">Reviews</a>
            </li>
            <li>
              <a href="menu.html">Order Now</a>
            </li>
          </ul>
          <a href="cart.html">
            <img src="/assets/icons/cart-white.svg" />
          </a>
        </nav>`;

const renderNavbar = () => {
  const navbarContainer = document.querySelector('.navbar-container');
  navbarContainer.innerHTML = navbar;
};
const renderTransparentNavbar = () => {
  const navbarTransparentContainer = document.querySelector(
    '.navbar-transparent-container'
  );
  navbarTransparentContainer.innerHTML = transparentNavbar;
};

renderNavbar();
renderTransparentNavbar();

//rendering reviews
const reviewsData = [
  {
    name: 'Suzie',
    img: 'assets/images/avatar1.png',
    review:
      'Tucked away on a quiet street,The GOOD FOOD restaurant is a delightful gem that offers a warm and inviting atmosphere. The moment you step inside, you’re greeted by the friendly staff and the comforting scent of freshly baked bread. The decorations are phenomenal',
  },
  {
    name: 'Chen',
    img: 'assets/images/avatar2.png',
    review:
      'Tucked away on a quiet street,The GOOD FOOD restaurant is a delightful gem that offers a warm and inviting atmosphere. ',
  },
  {
    name: 'Khant',
    img: 'assets/images/avatar3.png',
    review:
      'Tucked away on a quiet street,The GOOD FOOD restaurant is a delightful gem that offers a warm and inviting atmosphere. The moment you step inside, you’re greeted by the friendly staff and the comforting scent of freshly baked bread. The decorations are phenomenal',
  },
  {
    name: 'Christ',
    img: 'assets/images/avatar4.png',
    review:
      'Tucked away on a quiet street,The GOOD FOOD restaurant is a delightful gem that offers a warm and inviting atmosphere. The moment you step inside, you’re greeted by the friendly staff and the comforting scent of freshly baked bread. The decorations are phenomenal',
  },
];

const reviews = document.querySelector('.reviews');

const renderReviews = () => {
  const reviewCards = reviewsData
    .map(
      (review) => `
    <div class="review-card">
      <img src=${review.img} alt=${review.name}/>
      <hr class="separator-y-gold-full-height"/>
      <div>
        <h1>${review.name}</h1>
        <p class="no-scrollbar">${review.review}</p>
      </div>
    </div>`
    )
    .join(''); // Use join("") to convert the array to a string

  reviews.innerHTML = reviewCards; // Set the innerHTML of the reviews element
};

renderReviews();

// scrolling review cards
const reviewsContainer = document.querySelector('.reviews');
let isDragging = false;
let startPos = 0;
let scrollLeft = 0;

reviewsContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  reviewsContainer.classList.add('grabbing');
  startPos = e.pageX - reviewsContainer.offsetLeft;
  scrollLeft = reviewsContainer.scrollLeft;
});

reviewsContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  reviewsContainer.classList.remove('grabbing');
});

reviewsContainer.addEventListener('mouseup', () => {
  isDragging = false;
  reviewsContainer.classList.remove('grabbing');
});

reviewsContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - reviewsContainer.offsetLeft;
  const walk = (x - startPos) * 2;
  reviewsContainer.scrollLeft = scrollLeft - walk;
});
