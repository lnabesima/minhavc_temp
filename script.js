const listItems = document.querySelectorAll('.sidebar__list-items');
const sublistItems = document.querySelectorAll('.sidebar__sublist-items');

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
