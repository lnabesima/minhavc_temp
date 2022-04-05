const sidebar = document.querySelector('.sidebar');
const listItems = document.querySelectorAll('.sidebar__list-items');
const sublist = document.querySelectorAll('.sidebar__sublist');
const sublistItems = document.querySelectorAll('.sidebar__sublist-items');
const goBackArrow = document.querySelector('.sidebar__logo-back');
const footerOptions = document.querySelectorAll('.footer__mobile-options');
const footerIcon = document.querySelectorAll('.footer__mobile-icon');
const footerLabel = document.querySelectorAll('.footer__mobile-label');
const mobileMenu = document.querySelector('#mobile-menu');
const goBackButton = document.querySelector('.go-back');

/* Go Back Button */
goBackButton.addEventListener('click', () => {
  history.back();
});

$('.sidebar__list').on('click', 'li', function () {
  // seleciona todos os items que tem a classe 'open'
  const openList = document.querySelectorAll('.open');
  // verifica se o item clicado contém a classe 'open'
  if (this.classList.contains('open')) {
    // remove a classe 'open'
    this.classList.remove('open');
    // seleciona o próximo item que tem a classe 'sidebar__sublist' e faz um slideUp
    $(this).next('.sidebar__sublist').slideUp();
    // verifica se existem items no array openList e se o próximo elemento do target é uma ul
  } else if (openList.length && this.nextElementSibling.nodeName == 'UL') {
    openList.forEach(item => {
      item.classList.remove('open'); //itera por todos os itens do array openList e remove a classe 'open'
      //itera por todos os itens do array e dá um slideUp no próximo elemento com classe 'sidebar__sublist'
      $(item).next('.sidebar__sublist').slideUp();
    });
    //realiza a lógica de abrir os itens do menu
    this.classList.add('open');
    $(this).next('.sidebar__sublist').slideDown();
  } else if (this.nextElementSibling.nodeName == 'UL') {
    //verifica se o próximo item do target é uma ul
    // adiciona a classe 'open' ao objeto clicado
    this.classList.add('open');
    // seleciona o próximo item que tem a classe 'sidebar__sublist' e faz um slideDown
    $(this).next('.sidebar__sublist').slideDown();
  } else {
    // retira a classe 'opened' da sidebar
    // isso é uma 'gambiarra' 🤷‍♂️️
    sidebar.classList.remove('opened');
  }
});

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(item => {
      item.classList.remove('active');
    });
    sublistItems.forEach(subitem => {
      subitem.classList.remove('subactive');
    });
    item.classList.add('active');
    if (item.id == 'help') {
      sidebar.classList.remove('opened');
    }
  });
});

sublistItems.forEach(item => {
  item.addEventListener('click', () => {
    sublistItems.forEach(subitem => {
      subitem.classList.remove('subactive');
    });
    item.classList.add('subactive');
    sidebar.classList.remove('opened');
  });
});

/*Mobile footer*/
footerOptions.forEach(option => {
  option.addEventListener('click', () => {
    footerIcon.forEach(icon => {
      icon.classList.remove('selected');
    });

    footerLabel.forEach(label => {
      label.classList.remove('selected');
    });

    option.children[0].classList.add('selected');
    option.children[1].classList.add('selected');
  });
});

mobileMenu.addEventListener('click', () => {
  sidebar.classList.add('opened');
});

/*/Mobile footer*/
goBackArrow.addEventListener('click', () => {
  sidebar.classList.remove('opened');
});
