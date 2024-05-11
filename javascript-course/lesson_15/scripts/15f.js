import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { isSatSun } from './isWeekend.js'

let date = dayjs();
date = date.add(2, 'days')
console.log(isSatSun(date));


date = date.add(1, 'days')
console.log(isSatSun(date));

date = date.add(2, 'days')
console.log(isSatSun(date));

date = date.add(2, 'days')
console.log(isSatSun(date));
