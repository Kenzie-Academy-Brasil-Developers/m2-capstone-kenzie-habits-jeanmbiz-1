import RequisicoesHabitos from './habitos.controller.js'

const containerHabitos = document.querySelector('.container__habitos');

export default class NovoHabito {
    static criarCardHabito () {
        const divCard      = document.createElement('div');
        const checkbox     = document.createElement('input');
        const divTitulo    = document.createElement('div');
        const titulo       = document.createElement('h2');
        const divDescricao = document.createElement('div');
        const descricao    = document.createElement('h2');
        const categoria    = document.createElement('h2');
        const divEditar    = document.createElement('div');
        const editar_1     = document.createElement('div');
        const editar_2     = document.createElement('div');
        const editar_3     = document.createElement('div');
    
        divCard     .classList.add('container__habitos--cards');
        checkbox    .classList.add('checkbox__card');
        divTitulo   .classList.add('card__titulo');
        titulo      .classList.add('info__habitos--titulo');
        divDescricao.classList.add('card__descricao');
        descricao   .classList.add('info__habitos--descricao');
        categoria   .classList.add('info__habitos--categoria');
        divEditar   .classList.add('container__editar');
        editar_1    .classList.add('reticencias');
        editar_2    .classList.add('reticencias');
        editar_3    .classList.add('reticencias');
    
        checkbox.type = 'checkbox';
    
        titulo   .innerText = 'Fazer exercícios';
        descricao.innerText = 'Ir correr na praça próxima ao centro da cidade por 30 minutos';
        categoria.innerText = 'Saúde';
    
        divTitulo       .append(titulo);
        divDescricao    .append(descricao);
        divEditar       .append(editar_1, editar_2, editar_3);
        divCard         .append(checkbox, divTitulo, divDescricao, categoria, divEditar);
        containerHabitos.append(divCard);
    
    }
}



/* teste */

function criarCardHabitos () {
    const divCard      = document.createElement('div');
    const checkbox     = document.createElement('input');
    const divTitulo    = document.createElement('div');
    const titulo       = document.createElement('h2');
    const divDescricao = document.createElement('div');
    const descricao    = document.createElement('h2');
    const categoria    = document.createElement('h2');
    const divEditar    = document.createElement('div');
    const editar_1     = document.createElement('div');
    const editar_2     = document.createElement('div');
    const editar_3     = document.createElement('div');

    divCard     .classList.add('container__habitos--cards');
    checkbox    .classList.add('checkbox__card');
    divTitulo   .classList.add('card__titulo');
    titulo      .classList.add('info__habitos--titulo');
    divDescricao.classList.add('card__descricao');
    descricao   .classList.add('info__habitos--descricao');
    categoria   .classList.add('info__habitos--categoria');
    divEditar   .classList.add('container__editar');
    editar_1    .classList.add('reticencias');
    editar_2    .classList.add('reticencias');
    editar_3    .classList.add('reticencias');

    checkbox.type = 'checkbox';

    titulo   .innerText = 'Fazer exercícios';
    descricao.innerText = 'Ir correr na praça próxima ao centro da cidade por 30 minutos';
    categoria.innerText = 'Saúde';

    divTitulo       .append(titulo);
    divDescricao    .append(descricao);
    divEditar       .append(editar_1, editar_2, editar_3);
    divCard         .append(checkbox, divTitulo, divDescricao, categoria, divEditar);
    containerHabitos.append(divCard);

}

const criar = document.querySelector('.criar__habito');
criar.addEventListener('click', criarCardHabitos);
