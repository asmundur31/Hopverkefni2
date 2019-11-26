import empty, { getLectures, createListElement } from './helpers';
import loadLecture from './display-lecture';


export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  /**
   *
   * @param {Array} types
   * Birtir lectures af flokkum í type.
   * Ef type er empty loadast allir lectures.
   */
  load(types) {
    empty(this.container);
    //Listi yfir öll lecture elements
    getLectures().then((data) => {
      const lectures = data.lectures;
      //Leitum yfir öll lecture element og birtum þau sem beðið er um
      for (let i = 0; i < lectures.length; i += 1) {
        if (!(Array.isArray(types)) || types.length === 0 || types.includes(lectures[i].category) ) {
          const lecture = createListElement(
            lectures[i].thumbnail, lectures[i].title, lectures[i].category, lectures[i].slug,
          );
          lecture.addEventListener('click', function() {loadLecture(i);});
          this.container.appendChild(lecture);
        }
      }
    }).catch(() => {});
  }
}
