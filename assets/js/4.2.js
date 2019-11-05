// mySort

Array.prototype.mySort = function (callback) {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i; j++) {
            if (callback) {
                if (callback(this[j], this[j + 1]) > 0) {
                    const t = this[j + 1];
                    this[j + 1] = this[j];
                    this[j] = t;
                }
            } else if (String(this[j + 1]) < String(this[j])) {
                const t = this[j + 1];
                this[j + 1] = this[j];
                this[j] = t;
            }
        }
    }
    return this;
};

// let scores = [1, 7, 2, 10, 21, 5];
// console.log(scores.mySort((a, b) => a - b));
// console.log(scores.mySort((a, b) => b - a));
// console.log(scores.mySort());


// myForEach

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, Array);
    }
};

// let array1 = ['a', 'b', 'c'];
// array1.myForEach(function (element) {
//     console.log(element);
// });


// myMap

Array.prototype.myMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, Array));
    }
    return newArr;
};


// let numbers = [1, 4, 9];
// let test = numbers.myMap((item) => {
//     return item + 'test'
// });
//
// console.log(test);