import empty,{getLectures, createListElement} from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    
  }

  /**
   * 
   * @param {string} type
   * Birtir lectures af flokknum type.
   * Ef type er empty loadast allir lectures. 
   */
  load(type) {
    //Listi yfir öll lecture elements
    getLectures().then((response) => {
      const lectures = response;
      //Leitum yfir öll lecture element og birtum þau sem beðið er um
      for(var i = 0; i < lectures.length; i += 1) {
        if(lectures[i].category === type) {
          const lecture = createListElement(lectures[i].image, lectures[i].title, lectures[i].category);
          this.container.appendChild(lecture);
        }
      }
    }).catch(()=>{}); 

  }

}

