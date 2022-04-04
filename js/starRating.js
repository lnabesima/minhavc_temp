const starContainer = document.querySelector('.suggestions__form-rating');
const stars = document.querySelectorAll('.suggestions__form-stars');
let rating = 0;

function getRating() {
  return rating;
}

function changeRating(newRating) {
  rating = newRating;
}

function renderChanges(rating) {
  for (let i = 0; i < rating; i++) {
    starContainer.children[i].classList.add('full');
  }

  for (let i = rating; i < stars.length; i++) {
    starContainer.children[i].classList.remove('full');
  }
}

function onMouseClick(ev) {
  let star = ev.target;
  console.log(star);
  let isStar = star.classList.contains('suggestions__form-stars');
  console.log(isStar);
  if (isStar) {
    let { rating } = star.dataset;
    console.log(rating);
    rating = rating === getRating() ? 0 : rating;
    changeRating(rating);
    renderChanges(rating);
  }
}

function onMouseOver() {
  console.log('move');
}

function onMouseLeave() {
  console.log('out');
}

function starRating() {
  starContainer.addEventListener('mousemove', onMouseOver);
  starContainer.addEventListener('mouseleave', onMouseLeave);
  starContainer.addEventListener('click', onMouseClick);
}

starRating();
