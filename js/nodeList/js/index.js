const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
//funcao para pegar o estilo da pagina
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff'
}

