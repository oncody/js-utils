// todo: this doesn't round. it truncates
export function toPercent(number) {
    let decimal = number.toFixed(2);
    return Math.round(decimal * 100);
}

export function sum(array) {
    return array.reduce((sum, value) => sum + value, 0);
}

export function removeCommasFromNumber(number) {
    return Number(number.replace(/,/g, ''));
}