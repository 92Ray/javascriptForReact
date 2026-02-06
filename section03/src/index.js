// java : import

import {sub, div} from './math.js';
import add from './math.js';
import randomcolor from 'randomcolor';

let color = randomcolor();
console.log(`color = ${color}`);
console.log(add(10,20));
console.log(sub(10,20));
console.log(div(10,20));
console.log('안녕 node.js');