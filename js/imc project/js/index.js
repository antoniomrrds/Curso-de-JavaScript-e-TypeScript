const form = document.imcForm.onsubmit = e => {
    e.preventDefault();

    const inputWeight = e.target.querySelector("#weight")
    const inputHeight = e.target.querySelector("#height")
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);
    if (!weight) {
        setResult('Peso Inválido', false);
        return
    }
    if (!height) {
        setResult('Altura Inválida', false);
        return
    }

    const imc = getImc(weight, height);
    const bodyIndex = getBodyIndex(imc);
    const msg = `Seu IMC é ${imc} ${bodyIndex}).` 
    setResult(msg,true)
}

const getImc = (weight, height) => {
    const imc = weight / height ** 2
    return imc.toFixed(2)
}

function getBodyIndex (imc) {
    const bodyIndex = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
    if (imc >= 39.9) return bodyIndex[5];
    if (imc >= 34.9) return bodyIndex[4];
    if (imc >= 29.9) return bodyIndex[3];
    if (imc >= 24.9) return bodyIndex[2];
    if (imc >= 18.5) return bodyIndex[1];
    if (imc < 18.5) return bodyIndex[0];
  }


const createParagraph = () => {
    const p = document.createElement('p');
    return p;
}
const setResult = (msg, isValid) => {
    const result = document.querySelector("#result");
    result.innerHTML = '';
    const p = createParagraph();
    (isValid)?p.classList.add('paragraph-result'):p.classList.add('bad')
    p.innerHTML = msg;
    result.appendChild(p);
}


