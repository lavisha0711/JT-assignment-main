// Modal Controls
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');

const requestDishButton = document.getElementById('requestDishButton');
const requestModal = document.getElementById('requestModal');
const submitRequest = document.getElementById('submitRequest');
const cancelRequest = document.getElementById('cancelRequest');

cartButtonn.onclick = () => {
  cartModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

closeCart.onclick = () => {
  cartModal.style.display = 'none';
  document.body.style.overflow = '';
};

requestDishButton.onclick = () => {
  requestModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

submitRequest.onclick = cancelRequest.onclick = () => {
  requestModal.style.display = 'none';
  document.body.style.overflow = '';
};

// Carousel (Simple Scroll Left/Right)
const carouselTrack = document.querySelector('.carousel-track');
document.querySelector('.arrow.left').onclick = () => {
  carouselTrack.scrollBy({ left: -220, behavior: 'smooth' });
};
document.querySelector('.arrow.right').onclick = () => {
  carouselTrack.scrollBy({ left: 220, behavior: 'smooth' });
};

// Video Controls
const video = document.getElementById('promoVideo');
video.onclick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
