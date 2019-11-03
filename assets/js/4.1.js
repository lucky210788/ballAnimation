// Closure

function Closure() {
    let a = 0;
    let b = 0;

    function increment() {
        a++;
        b++;
        console.log(a, b);
    }

    function decrement() {
        a--;
        b--;
        console.log(a, b);
    }

    this.privateIncrement = function () {
        increment();
    };

    this.privateDecrement = function () {
        decrement();
    };
}

let closure = new Closure();
closure.privateIncrement();
closure.privateDecrement();