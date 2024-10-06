let regexp = new RegExp('ab+c');
let array: Array<number> = [1, 2, 3, 4, 5];
let set: Set<number> = new Set([1, 2, 3, 3, 5, 5, 5]);

// we can use custom instance to annotate the variable

class Queue<T> {
    private data: Array<T> = []

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

let queue: Queue<number> = new Queue();