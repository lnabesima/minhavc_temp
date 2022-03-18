const listItems = document.querySelectorAll('.sidebar__list-items');
const sublist = document.querySelectorAll('.sidebar__sublist');
const sublistItems = document.querySelectorAll('.sidebar__sublist-items');

$('.sidebar__list').on('click', 'li', function () {
  // seleciona todos os items que tem a classe 'open'
  const openList = document.querySelectorAll('.open');
  console.log(openList);

  // verifica se o item clicado contém a classe 'open'
  if (this.classList.contains('open')) {
    console.log('fecha subitems');
    // remove a classe 'open'
    this.classList.remove('open');
    // seleciona o próximo item que tem a classe 'sidebar__sublist' e faz um slideUp
    $(this).next('.sidebar__sublist').slideUp();
    // verifica se existem items no array openList e se o próximo elemento do target é uma ul
  } else if (openList.length && this.nextElementSibling.nodeName == 'UL') { 
    console.log('fecha todos os folders')
    openList.forEach(item => {
      item.classList.remove('open') //itera por todos os itens do array openList e remove a classe 'open'
      console.log('removendo classe')
    })

  } else if (this.nextElementSibling.nodeName == 'UL') { //verifica se o próximo item do target é uma ul
    console.log('abre subitens');
    // adiciona a classe 'open' ao objeto clicado
    this.classList.add('open');
    // seleciona o próximo item que tem a classe 'sidebar__sublist' e faz um slideDown
    $(this).next('.sidebar__sublist').slideDown();
  }
});

// $('.sidebar__list').on('click', 'li', function openSubmenu() {
//   let openList = document.querySelectorAll('.open');
//   console.log(openList);
//   if (
//     this.classList.contains('open') &&
//     $(this).next('.sidebar__sublist').length &&
//     !this.classList.contains('sidebar__sublist')
//   ) {
//     console.log('opção 2!');
//     this.classList.remove('open');
//     $(this).next().slideUp();
//   }
//     else if (
//     openList.length &&
//     $(this).next('.sidebar__sublist').length &&
//     !this.classList.contains('sidebar__sublist')
//   ) {
//     console.log('opção 1!');
//     Array.from(openList).forEach(item => {
//       $(item).next().slideUp();
//       item.classList.remove('open');
//     });
//     console.log('opção 1.1!');
//     this.classList.add('open');
//     $(this).next().slideDown();
//   } else {
//     console.log('opção 3!');
//     this.classList.add('open');
//     $(this).next().slideDown();
//   }
// });

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
