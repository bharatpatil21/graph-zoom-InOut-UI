/**
 * chart data source
 */
export let series1: Object[] = [];
let point1: Object;
let value: number = 80;
let i: number;
for (i = 1; i < 15000; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    var today = new Date();
    today.setHours(today.getDay() + i);
    for (let j = 0; j < 12; j++) {
        today.setHours(today.getHours() + j*2);
    }
    point1 = { x: today, y: value.toFixed(1) };
    series1.push(point1);
}