import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function isWeekend(date) {
    const weekDay = date.format('dddd');
    console.log(weekDay);
    if (weekDay === 'Saturday' || weekDay === 'Sunday') {
        return true;
    } else {
        return false;
    }
}

export default isWeekend;