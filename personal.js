let favoritesIndex = 0;
let foodsIndex = 0;

function moveFavorites(direction) {
  const track = document.getElementById('favorites-track');
  const items = track.getElementsByClassName('carousel-item');
  const totalItems = items.length;
  const itemsPerView = getItemsPerView();

  // Update index
  favoritesIndex += direction;

  // Loop around
  if (favoritesIndex < 0) {
    favoritesIndex = Math.max(0, totalItems - itemsPerView);
  }
  if (favoritesIndex > totalItems - itemsPerView) {
    favoritesIndex = 0;
  }

  // Show/hide items
  updateCarouselView(items, favoritesIndex, itemsPerView);
}

function moveFoods(direction) {
  const track = document.getElementById('foods-track');
  const items = track.getElementsByClassName('carousel-item');
  const totalItems = items.length;
  const itemsPerView = getItemsPerView();

  // Update index
  foodsIndex += direction;

  // Loop around
  if (foodsIndex < 0) {
    foodsIndex = Math.max(0, totalItems - itemsPerView);
  }
  if (foodsIndex > totalItems - itemsPerView) {
    foodsIndex = 0;
  }

  // Show/hide items
  updateCarouselView(items, foodsIndex, itemsPerView);
}

function updateCarouselView(items, startIndex, itemsPerView) {
  for (let i = 0; i < items.length; i++) {
    if (i >= startIndex && i < startIndex + itemsPerView) {
      items[i].classList.remove('hidden');
    } else {
      items[i].classList.add('hidden');
    }
  }
}

function getItemsPerView() {
  const width = window.innerWidth;
  if (width <= 600) return 2;
  if (width <= 900) return 3;
  return 4;
}

// Initialize carousels on page load
window.addEventListener('load', () => {
  const favTrack = document.getElementById('favorites-track');
  const foodTrack = document.getElementById('foods-track');
  
  if (favTrack) {
    const favItems = favTrack.getElementsByClassName('carousel-item');
    updateCarouselView(favItems, 0, getItemsPerView());
  }
  
  if (foodTrack) {
    const foodItems = foodTrack.getElementsByClassName('carousel-item');
    updateCarouselView(foodItems, 0, getItemsPerView());
  }
});

// Update on window resize
window.addEventListener('resize', () => {
  const favTrack = document.getElementById('favorites-track');
  const foodTrack = document.getElementById('foods-track');
  
  if (favTrack) {
    const favItems = favTrack.getElementsByClassName('carousel-item');
    updateCarouselView(favItems, favoritesIndex, getItemsPerView());
  }
  
  if (foodTrack) {
    const foodItems = foodTrack.getElementsByClassName('carousel-item');
    updateCarouselView(foodItems, foodsIndex, getItemsPerView());
  }
});