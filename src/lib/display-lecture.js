import { getLectures } from './helpers';

/**
 * 
 * @param {int} i 
 */
function loadLecture(i){
  const data = getLectures() || [];
  const lecture = data[i];
}
