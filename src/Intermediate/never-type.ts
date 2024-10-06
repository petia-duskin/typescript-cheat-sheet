const fail = (message: string) => {
    throw new Error(message)
}

function area15(s: Shape) {
    if ('size' in s) {
        return s.size * s.size
    } else if ('width' in s) {
        return s.width * s.height
    }

    const ensureAllCasesAreHandled: never = s;
}

