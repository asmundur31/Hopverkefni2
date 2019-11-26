import { getLectures } from './helpers';

/**
 *
 * @param {int} i
 */
function loadLecture(i) {
  debugger;
  console.log(i);
  const data = getLectures() || [];
  const lecture = data[i];
}
