import { blackbox } from './blackbox.js';

export const callMethodIf = (condition) => {
    return blackbox(condition);
};
//    console.log("> callMethodIf >: " + condition) // true / false