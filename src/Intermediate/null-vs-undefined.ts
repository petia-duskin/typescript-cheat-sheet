console.log(null == null) // true
console.log(undefined == undefined) // true
console.log(undefined == null) // true

function decorate(value: string | null | undefined) {
    if (value == null) {
        throw new Error('Invalid input')
    }

    return `--${value.trim()}--`
}