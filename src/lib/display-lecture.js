import { getLectures } from './helpers';

/**
 *
 * @param {int} i
 */
export default function loadLecture(i) {
  console.log(i);
  const data = getLectures() || [];
  const lecture = data[i];
}
