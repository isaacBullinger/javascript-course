import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    return deliveryOption;
}

export function calculateDeliveryDate(deliveryOption) {
    let daysLeft = deliveryOption.deliveryDays;
    let deliveryDate = dayjs();

    while (daysLeft > 0) {
        deliveryDate = deliveryDate.add(1, 'day');

        if (!isWeekend(deliveryDate)) {
            daysLeft--;
        }
    }

    const dateString = deliveryDate.format(
        'dddd, MMMM D'
    );

    return dateString;
}

export function isWeekend(date) {
    const weekDay = date.format('dddd');
    if (weekDay === 'Saturday' || weekDay === 'Sunday') {
        return true;
    } else {
        return false;
    }
}