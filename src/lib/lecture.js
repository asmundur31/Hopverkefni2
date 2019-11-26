function setHeader(img) {
  
}

export default function createLecture(efni) {
  const haus = document.querySelector('.header');
  if (efni.image) {
    haus.style.backgroundImage = `url(${efni.image})`;
  } else {
    haus.style.backgroundImage = 'none';
    haus.style.backgroundColor = '#ccc';
  }
  haus.querySelector('.header__subtitle').innerHTML = efni.category;
  haus.querySelector('.header__title').innerHTML = efni.title;
  /*for(let i = 0; i < efni.length; i += 1) {
    const el = element(efni[i]);
  }*/
}
