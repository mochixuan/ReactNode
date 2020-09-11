// import {join} from 'lodash-es'

// function add(x, y) {
//     return x + y + 'jiafa';
// }

// function increase(x, y) {
//     window.a = 'wang'
//     return x - y + 'jianfa' + join([1, 2]);
// }
const W = require('./wx')

function A () {
    setTimeout(() => {
        console.log('age2', W.age , W.logger())
    }, 3000)
}

export {
    A
};

