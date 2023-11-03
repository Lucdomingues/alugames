const alterarStatus = (id) => {
    const elementGame = document.getElementById(`game-${id}`);
    const elementGameCss = elementGame.getElementsByClassName('dashboard__item__button')[0];
    const elementImg = elementGame.getElementsByClassName('dashboard__item__img')[0];
    elementGameCss.classList.contains('dashboard__item__button--return') ? elementTrue(elementGameCss, elementImg) : elementFalse(elementGameCss, elementImg);
};

const elementTrue = (element, imgCSS) => {
    element.innerHTML = 'Alugar';
    removed(imgCSS, 'dashboard__item__img--rented');
    removed(element, 'dashboard__item__button--return');
};

const elementFalse = (element, imgCSS) => {
    element.innerHTML = 'Devolver';
    add(imgCSS, 'dashboard__item__img--rented');
    add(element, 'dashboard__item__button--return');
};

const removed = (elementDOM, stringClass) => {
    return elementDOM.classList.remove(stringClass);
};

const add = (elementDOM, stringClass) => {
    return elementDOM.classList.add(stringClass);
};