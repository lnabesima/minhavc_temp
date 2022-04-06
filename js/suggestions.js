let suggestionsInfo = {};
const inputButton = document.querySelector('.suggestions__form-submit');
const suggestionsBox = document.querySelector('.suggestions__form-box');

/* ---- STAR RATING COMPONENT ----*/
// Adaptado de https://blog.lakbychance.com/implementing-a-star-rating-component-in-vanilla-js
// Talvez adaptado seja um eufemismo; foi praticamente copiado mesmo. 🤷‍♂️️🤦‍♂️️
const starContainer = document.querySelector('.suggestions__form-rating'); //seleciona o container
const stars = document.querySelectorAll('.suggestions__form-stars'); // seleciona as estrelas
let rating = 0; // define a avaliação inicial para 0

// função auxiliar para comparação da avaliação inicial com a avaliação selecionada
function getRating() {
  return rating;
}

// função auxiliar para salvar a nova avaliação
function changeRating(newRating) {
  rating = newRating;
}

// renderiza as mudanças na tela
function renderChanges(rating) {
  // enquanto i for menor que a avaliação (que é extraída do dataset do item clicado)
  // faz um loop por todos os filhos do 'starContainer' e adiciona a classe 'full'
  for (let i = 0; i < rating; i++) {
    starContainer.children[i].classList.add('full');
  }

  // define o índice 'i' com o valor da avaliação e, enquanto 'i' for menor que a
  // quantidade de estrelas, remove a classe 'full'
  for (let i = rating; i < stars.length; i++) {
    starContainer.children[i].classList.remove('full');
  }
}

function onMouseClick(ev) {
  // seleciona o target do evento
  let star = ev.target;
  // verifica se o target tem a classe de estrela
  let isStar = star.classList.contains('suggestions__form-stars');
  if (isStar) {
    // se tiver:
    let { rating } = star.dataset; //pega o rating do dataset do target
    // verifica se é igual ao retorno da função getRating
    // se for, seta o rating em 0. se não, mantém o rating
    rating = rating === getRating() ? 0 : rating;
    /*
    ↑ é a mesma coisa que isso ⬇
    if (rating === getRating()) {
      rating = 0;
    } else {
      rating;
    }
    */
    changeRating(rating); //muda o rating de acordo com rating do target
    renderChanges(rating); //renderiza as mudanças na tela
  }
}

// aqui é a mesma coisa que a função de cima, sem a parte de salvar o rating
function onMouseOver(ev) {
  let star = ev.target;
  let isStar = star.classList.contains('suggestions__form-stars');
  if (isStar) {
    const { rating } = star.dataset;
    renderChanges(rating);
  }
}

// quando o cursor sair do campo do avaliação, retorna o rating
// para o que está salvo na variável `rating`
function onMouseLeave(ev) {
  renderChanges(rating);
}

function saveSuggestion(event){
  event.preventDefault();
  suggestionsInfo.rating = rating;
  suggestionsInfo.suggestion = suggestionsBox.value;

  changeRating(0);
  renderChanges(0);
  suggestionsBox.value = "";

}

// adiciona os eventos ao container de estrelas
function initSuggestions() {
  starContainer.addEventListener('mousemove', onMouseOver);
  starContainer.addEventListener('mouseleave', onMouseLeave);
  starContainer.addEventListener('click', onMouseClick);
  inputButton.addEventListener('click', saveSuggestion);
}

initSuggestions();
