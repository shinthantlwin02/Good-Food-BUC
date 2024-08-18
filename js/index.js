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

// placeholder data end

let courses = mainCourses;

const renderMenuItems = () => {
  const menuItems = document.querySelector('.menu-items');
  const menuCards = courses.map(
    (course) => `<div class="menu-card">
   <img src=${course.img} alt=${course.name}/>
   <h2 class="tenor-sans-regular">${course.name}</h2>
   <p class="tenor-sans-regular">${course.desc}</p>
   <div>
   <span>Ks ${course.price}</span>
   <a href="cart.html">
   <button class="btn-warning">Order Now</button>

   </a>
   </div>
   </div>`
  );
  menuItems.innerHTML = menuCards;
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
