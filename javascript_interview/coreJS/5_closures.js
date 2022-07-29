// Create a counter which has increment and getValue functionality.

const countOfsoldBMWiSeries = () => {
    let count = 0;
    return {
        increment : () => {
            count++;
        },
        getValue : () => {
            return count;
        },
    };
};

let counter = countOfsoldBMWiSeries();
console.log(counter.getValue());
counter.increment();
counter.increment();
console.log(counter.getValue());
