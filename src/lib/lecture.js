import { el } from './helpers';

/**
 *
 * @param {Set} content
 */
function createElement(content) {
  let element;
  if (content.type === 'youtube') {
    element = el('iframe', 'video');
    element.src = content.data;
    element.setAttribute('framborder', '0');
    element.setAttribute('allowfullscreen', '0');
  } else if (content.type === 'text') {
    element = el('div', 'text');
    let index = 0;
    let before = 0;
    while (index < content.data.length) {
      if (content.data[index] === '\n') {
        const p = el('p', 'text__p');
        p.appendChild(document.createTextNode(content.data.slice(before, index)));
        element.appendChild(p);
        before = index + 1;
      }
      index += 1;
    }
    const p = el('p', 'text__p');
    p.appendChild(document.createTextNode(content.data.slice(before, index)));
    element.appendChild(p);
  } else if (content.type === 'quote') {
    element = el('div', 'quote', el('blockquote', 'quote__data'));
    element.querySelector('.quote__data').appendChild(document.createTextNode(content.data));
    if (content.attribute) {
      const attr = el('cite', 'quote__attribute');
      attr.appendChild(document.createTextNode(content.attribute));
      element.querySelector('.quote__data').appendChild(attr);
    }
  } else if (content.type === 'image') {
    element = el('div', 'image', el('img', 'image__img'), el('p', 'image__caption'));
    element.querySelector('.image__img').src = content.data;
    if (content.caption) {
      element.querySelector('.image__caption').appendChild(document.createTextNode(content.caption));
    }
  } else if (content.type === 'heading') {
    element = el('h2', 'haus');
    element.appendChild(document.createTextNode(content.data));
  } else if (content.type === 'list') {
    element = el('ul', 'tags');
    for (let i = 0; i < content.data.length; i += 1) {
      const e = el('li', 'tags__tag');
      e.appendChild(document.createTextNode(content.data[i]));
      element.appendChild(e);
    }
  } else if (content.type === 'code') {
    element = el('div', 'code');
    element.appendChild(document.createTextNode(content.data));
  }
  const col = el('div', 'content__col');
  col.appendChild(element);
  return col;
}

export default function createLecture(fyrirlestur) {
  const haus = document.querySelector('.header');
  if (fyrirlestur.image) {
    haus.style.backgroundImage = `url(${fyrirlestur.image})`;
  } else {
    haus.style.backgroundImage = 'none';
    haus.style.backgroundColor = '#ccc';
  }
  haus.querySelector('.header__subtitle').innerHTML = fyrirlestur.category;
  haus.querySelector('.header__title').innerHTML = fyrirlestur.title;
  // haus klár
  const efni = fyrirlestur.content;
  // meginmál
  const row = el('div', 'content__row');
  for (let i = 0; i < efni.length; i += 1) {
    const e = createElement(efni[i]);
    row.appendChild(e);
  }
  const content = el('div', 'content', row);
  return content;
}
