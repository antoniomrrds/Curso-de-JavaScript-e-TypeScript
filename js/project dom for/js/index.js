const elementos = [
    { tag: 'p', texto: 'Frase 1 ' }, // 0
    { tag: 'div', texto: ' Frase 2' }, //
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const createElement = (tag) => document.createElement(tag);

const setResult = (() => {
    const result = document.querySelector("#result");
    result.innerHTML = '';
    elementos.map(el => {
        const element = createElement(el.tag);
        element.classList.add('tag')
        element.innerHTML = `${el.tag} = ${el.texto}`;
        result.appendChild(element);
    })
})();

