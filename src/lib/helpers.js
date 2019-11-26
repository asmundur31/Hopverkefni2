export default function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el(name, className, ...children) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

/**
 * @returns {Promise}
 */
export async function getLectures() {
  return fetch('../../lectures.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Villa við að sækja gögn');
    });
}

/**
 *
 * @param {string} img
 * @param {string} title
 * @param {string} category
 */
export function createListElement(img, title, category) {
  const listEl = el('div', 'lectures__col', el('div', 'lecture', el('img', 'lecture__img'), el('div', 'lecture__header', el('div', 'lecture__text', el('div', 'lecture__text__category'), el('div', 'lecture__text__title'), el('div', 'lecture__checked--done')))));
  const imgEl = listEl.querySelector('.lecture__img');
  imgEl.src = img;
  const catEl = listEl.el('.lecture__text__category');
  catEl.appendChild(document.createTextNode(category));
  const titleEl = listEl.el('.lecture__text__title');
  titleEl.appendChild(document.createTextNode(title));

  return listEl;
}
