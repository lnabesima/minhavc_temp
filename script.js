const listItems = document.querySelectorAll('.sidebar__list-items');
const sublist = document.querySelectorAll('.sidebar__sublist');
const sublistItems = document.querySelectorAll('.sidebar__sublist-items');

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
  });
});

sublistItems.forEach(item => {
  item.addEventListener('click', () => {
    sublistItems.forEach(subitem => {
      subitem.classList.remove('subactive');
    });
    item.classList.add('subactive');
  });
});
