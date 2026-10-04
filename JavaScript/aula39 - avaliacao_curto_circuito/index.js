/* *
*   && -> false && true -> false "o valor mesmo"
*   || -> true || false -> retona "o valor verdadeiro"
    
    ! Falsy Value 
*   false
*   0 -> false
*   '', "", `` -> false
*   null / undefined -> false
*   NaN -> false
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e)




