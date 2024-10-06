class CustomQueue<T> {
    data: T[] = [];
    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

const queue1 = new CustomQueue<number>();
queue1.push(123);

console.log(queue1.pop())