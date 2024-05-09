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