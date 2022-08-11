const array = [1,2,3,4,5,6,7,8,9,10];

const dobro = array.map(item => item*2);
console.log(dobro);

/* 
const preco = array.map(funcDobro);
function funcDobro(x){
    return x*2;
}
*/
const preco = array.map(item => 'R$' + item);
console.log(preco);

const soma = array.reduce(function(resu, item){
    return resu+item;
}, 0);
console.log(`valores do array somados:  ${soma}`);

const par = array.filter(item => item % 2==0);
console.log(par);