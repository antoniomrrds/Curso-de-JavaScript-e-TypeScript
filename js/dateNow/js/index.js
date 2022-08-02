// const createParagraph = () => {
//     const p = document.createElement('p');
//     return p;
// }
// const setResult = (msg) => {
//     const result = document.querySelector("#result");
//     result.innerHTML = '';
//     const p = createParagraph();
//     p.innerHTML = msg;
//     result.appendChild(p);
// }

// const getDayWeekText = (dayTheWeek) => {
//     let dayWeekText;
//     switch (dayTheWeek) {
//         case 0:
//             dayWeekText = 'Domingo';
//             return dayWeekText;
//         case 1:
//             dayWeekText = 'Segunda-feira';
//             return dayWeekText;
//         case 2:
//             dayWeekText = 'Terça-feira';
//             return dayWeekText;
//         case 3:
//             dayWeekText = 'Quarta-feira';
//             return dayWeekText;
//         case 4:
//             dayWeekText = 'Quinta-feira';
//             return dayWeekText;
//         case 5:
//             dayWeekText = 'Sexta-feira';
//             return dayWeekText;
//         case 6:
//             dayWeekText = 'Sábado';
//             return dayWeekText;
//         default:
//             dayWeekText = ''
//             return dayWeekText;
//     }
// }

// const getMonthText = (monthNumber) => {
//     let monthInWriting;
//     switch (monthNumber) {
//         case 1:
//             monthInWriting = 'Janeiro';
//             return monthInWriting;
//         case 2:
//             monthInWriting = 'fevereiro';
//             return monthInWriting;
//         case 3:
//             monthInWriting = 'março';
//             return monthInWriting;
//         case 4:
//             monthInWriting = 'abril';
//             return monthInWriting;
//         case 5:
//             monthInWriting = 'maio';
//             return monthInWriting;
//         case 6:
//             monthInWriting = 'junho';
//             return monthInWriting;
//         case 7:
//             monthInWriting = 'julho';
//             return monthInWriting;
//         case 8:
//             monthInWriting = 'agosto';
//             return monthInWriting;
//         case 9:
//             monthInWriting = 'setembro';
//             return monthInWriting;
//         case 10:
//             monthInWriting = 'outubro';
//             return monthInWriting;
//         case 11:
//             monthInWriting = 'novembro';
//             return monthInWriting;
//         case 12:
//             monthInWriting = 'dezembro';
//             return monthInWriting;
//         default:
//             monthInWriting = ''
//             return monthInWriting;
//     }
// }

// const zeroLeft = num => num < 10 ? `0${num}` : num;
// const formatTheDate = (date) => {
//     const dayWeekText = getDayWeekText(date.getDate());
//     const day = date.getDate();
//     const month = getMonthText(date.getMonth() + 1);
//     const year = zeroLeft(date.getFullYear());
//     const hour = zeroLeft(date.getHours());
//     const min = zeroLeft(date.getMinutes());
//     return `${dayWeekText},${day} de ${month} de ${year} ${hour}:${min}`;
// }

// const currentDate = new Date()
// const date = formatTheDate(currentDate);
// setResult(date)

//forma resumida 
const result = document.querySelector('#result' );
const data = new Date();
result.innerHTML = data.toLocaleString('pt-BR' , { dateStyle: 'full' ,timeStyle:'short' });

