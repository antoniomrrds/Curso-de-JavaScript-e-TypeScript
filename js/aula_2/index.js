const Name =  'Antônio marcos'
const hour =  new Date().getHours();
let timeOfDay=(hour >=18 || hour<= 4  ) ?'Noite': 'manhä'
const StringText = `Meu nome é ${Name}. Estou aprendendo JavaScript às ${hour} da ${timeOfDay}.`
console.log(StringText)