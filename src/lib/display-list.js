import List from './list';

let page;
let display = Array();
let list;

export default function init(pageParam) {
  list = new List();
  list.load();
  page = pageParam;
  const buttons = page.querySelectorAll('.button--fyrirlestrar');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', toggleList);
  }
}

function toggleList(e) {
  e.preventDefault();
  const button = e.toElement;
  const category = button.firstChild.nodeValue.toLowerCase();
  if (display.includes(category)) {
    button.classList.remove('button--fyrirlestrar--active');
    const index = display.indexOf(category);
    display.splice(index, 1);
    list.load(display);
  } else {
    button.classList.add('button--fyrirlestrar--active');
    display.push(category);
    if (display.length === 3) {
      const buttons = page.querySelectorAll('.button--fyrirlestrar');
      for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].classList.remove('button--fyrirlestrar--active');
      }
      display = Array();
    }
    list.load(display);
  }
}
