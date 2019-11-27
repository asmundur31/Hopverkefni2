/**
 * Sækir og vistar í localStorage
 */

// Fast sem skilgreinir heiti á lykli sem vistað er undir í localStorage
const LOCALSTORAGE_KEY = 'finished_lectures';

/**
 * Sækir gögn úr localStorage. Skilað sem lista á forminu:
 * [{ slug },
 *  { slug },
 *  ...,
 *  { slug }]
 *
 * @returns {boolean} True ef fyrirlestur er búinn annars false
 */
export function isDone(slug) {
  const slugs = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY));
  if(slugs !== null && slugs.includes(slug)) return true;
  return false;
}

/**
 * 
 * @param {string} slug vistar slug gildi á kláruðum fyrirlestri
 */
export default function save(slug) {
  let listi;
  if (window.localStorage.getItem(LOCALSTORAGE_KEY)) {
    listi = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY));
    listi.push({
      slug
    });
  } else {
    listi = Array({
      slug
    });
  }
  window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(listi));
}


/**
 * Hreinsar öll slugs úr localStorage
 */
export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
