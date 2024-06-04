const textToLeet = (text) => {
    const LEET_SYNTAX = {
        A:'4', B:'13', C:'[', D:')', E:'3', F:'|=', G: '&', H: '#', I: '1', J: '_|', K: '|<',
        L: '1', M: 'JVI', N: '^/', O: '0', P: '|*', Q: '(_,)', R:'I2', S:'5', T:'7', U:'(_)',
        V: '|/', W: 'VV', X:'><', Y:'j', Z:'2'};
    return text.split('').map(item => LEET_SYNTAX[item.toUpperCase()] || item ).join('');
}

console.log(textToLeet('Hello'));