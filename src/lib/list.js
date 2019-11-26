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
    empty(this.container);
    //Listi yfir öll lecture elements
    getLectures().then((data) => {
      const lectures = data.lectures;
      //Leitum yfir öll lecture element og birtum þau sem beðið er um
      for(var i = 0; i < lectures.length; i += 1) {
        if(lectures[i].category === type || !type) {
          const lecture = createListElement(lectures[i].thumbnail, lectures[i].title, lectures[i].category);
          lecture.addEventListener('click', loadLecture(i));
          this.container.appendChild(lecture);
        }
      }
    }).catch(()=>{}); 

  }

}

