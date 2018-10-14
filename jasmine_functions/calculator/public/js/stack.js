class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
        return this;
    }

    pop() {
        if (this.items.length == 0)
            return "Underflow"
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        let str = "Current Stack: ";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
    }
}

// function test_stack(name, input, output) {
//     let assert = require('assert');
//     console.log("================")
//     console.log(`testing: ${name}, value: ${input}`)
//     let test = assert(input == output);
//     if (!test)
//         console.log(`${name} passed`)
// }

// function run_tests() {
//     let stack = new Stack();
//     test_stack("isEmpty()", stack.isEmpty(), true);
//     stack.push(1)
//     test_stack("push()", stack.peek(), 1);
//     stack.pop()
//     test_stack("pop()", stack.isEmpty(), true);
//     stack.push('1').push('2').push('3');
//     stack.printStack();
// }

// run_tests();