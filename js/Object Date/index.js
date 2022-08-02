//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60*60* 3 *1000;
// const umDia = 60* 60* 24* 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3); // a, m, d, h, M , s, ms
const data = new Date('2019-04-20T20:20:59.100');
console.log('Dia' , data.getDate());
console.log('Mês' , data.getMonth() + 1);// Mês começa do zero
console.log('Ano' , data.getFullYear());
console.log('Hora' , data.getHours());
console.log('Min' , data.getMinutes());
console.log('Seg' , data.getSeconds())
console.log('ms', data.getMilliseconds());
console.log('Dia semana' , data.getDay());//0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now())// desde do inicio ate agora em milisegundos
