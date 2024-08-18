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
