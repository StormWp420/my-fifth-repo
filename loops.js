
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
for (const n of numbers) {
    if (n % 2 === 0) {
        console.log(n);
    }
}
let sum = 0;
for (const n of numbers) {
    sum += n;
}
console.log(sum);