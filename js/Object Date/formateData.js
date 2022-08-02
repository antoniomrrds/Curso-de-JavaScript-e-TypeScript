const zeroLeft = num => num<10?`0${num}`:num;
const formatTheDate = (date) => {
    const day = zeroLeft(date.getDate());
    const month = zeroLeft(date.getMonth() + 1);
    const year = zeroLeft(date.getFullYear());
    const hour = zeroLeft(date.getHours());
    const min = zeroLeft(date.getMinutes());
    const sec = zeroLeft(date.getSeconds());
    return `${day}/${month}/${year} ${hour}: ${min}:${sec}`;
}

const date = new Date();
const dateBrazil = formatTheDate(date);
console.log(dateBrazil);