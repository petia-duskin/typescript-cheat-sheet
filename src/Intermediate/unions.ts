
// union - помогает расширять тип входящей переменной
function formatCommandLine(input: string | string[]) {
    let line = ''
    if (typeof input === 'string') {
        line = input.trim();
    } else {
        line = input.map(x => x.trim()).join(' ')
    }

    return line;
}

type customUnion = string | string[]

