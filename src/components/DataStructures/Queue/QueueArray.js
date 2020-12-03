class QueueArray {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        if (this.items.length > 0) {
            let k = this.items.length
            while (k > 0) {
                this.items[k] = this.items[k - 1];
                k -= 1;
            }
            this.items[0] = item;
        } else {
            this.items.push(item);
        }
        return this.items
    }

    dequeue() {
        return this.items.pop();
    }

    printItems() {
        this.items.forEach((item, i) => {
            console.log("Position " + i + ": " + item);
        });
    }

    displayQueueArray() {
    }
}

const queue = new QueueArray();
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

export default QueueArray;
