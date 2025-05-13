document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.getElementById('cartButton');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const requestDishButton = document.getElementById('requestDishButton');
  const requestModal = document.getElementById('requestModal');
  const cancelRequest = document.getElementById('cancelRequest');

  if (cartButton && cartModal && closeCart) {
    cartButton.addEventListener('click', () => {
      cartModal.style.display = 'block';
    });
    closeCart.addEventListener('click', () => {
      cartModal.style.display = 'none';
    });
  }

  if (requestDishButton && requestModal && cancelRequest) {
    requestDishButton.addEventListener('click', () => {
      requestModal.style.display = 'block';
    });
    cancelRequest.addEventListener('click', () => {
      requestModal.style.display = 'none';
    });
  }
});
