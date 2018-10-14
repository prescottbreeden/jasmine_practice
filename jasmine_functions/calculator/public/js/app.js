class Calculator {
    constructor(input) {
        this.input = input.split("");
        this.stack = new Stack();
    }

    evaluate(a, b, operand) {
        a = parseInt(a);
        b = parseInt(b);
        switch (operand) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            default:
                return undefined;
        }
    }

    postfix() {
        let a;
        let b;
        let ans;
        try {
            console.log("Evaluating: ", this.input);
            for (let i = 0; i < this.input.length; i++) {
                switch (this.input[i]) {
                    case "+":
                        a = this.stack.pop();
                        b = this.stack.pop();
                        if (a === "Underflow" || b === "Underflow") {
                            throw("Underflow error, input at least 2 values before operand")
                        }
                        else {
                            a = parseInt(a);
                            b = parseInt(b)
                            ans = this.evaluate(a,b,"+") 
                        }
                        break;
                
                    case "-":
                        a = this.stack.pop();
                        b = this.stack.pop();
                        if (a === "Underflow" || b === "Underflow") {
                            throw("Underflow error, input at least 2 values before operand")
                        }
                        else {
                            a = parseInt(a);
                            b = parseInt(b)
                            ans = a - b;
                        }
                        break;

                    case "*":
                        a = this.stack.pop();
                        b = this.stack.pop();
                        if (a === "Underflow" || b === "Underflow") {
                            throw("Underflow error, input at least 2 values before operand")
                        }
                        else {
                            a = parseInt(a);
                            b = parseInt(b)
                            ans = a * b;
                        }
                        break;

                    case "/":
                        a = this.stack.pop();
                        b = this.stack.pop();
                        if (a === "Underflow" || b === "Underflow") {
                            throw("Underflow error, input at least 2 values before operand")
                        }
                        else {
                            a = parseInt(a);
                            b = parseInt(b)
                            ans = a / b;
                        }
                        break;

                    default:
                        this.stack.push(this.input[i]);
                        break;
                }
            }
            this.stack.push(ans);
        } catch (error) {
            console.log(error);
        }
        return this.stack.peek();
    }
}