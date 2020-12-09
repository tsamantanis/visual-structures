class StackArray {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    printItems() {
        this.items.forEach((item, i) => {
            console.log("Position " + i + ": " + item);
        });
    }
}

const stack = new StackArray();
stack.push(3);
stack.push(2);
stack.push(1);
stack.pop();

export default StackArray;
