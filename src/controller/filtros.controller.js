import RequisicoesHabitos from './habitos.controller.js'

const containerCards   = document.querySelector('.container__cards')


export default class Habito {
    static criarCardHabito (habito) {

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
    
        divEditar.title  = habito.habit_id;
        editar_1.title   = habito.habit_id;
        editar_2.title   = habito.habit_id;
        editar_3.title   = habito.habit_id;

        checkbox.type = 'checkbox';
        
        titulo   .innerText = habito.habit_title;
        descricao.innerText = habito.habit_description;
        categoria.innerText = habito.habit_category;
        checkbox .checked   = habito.habit_status;

        if(checkbox.checked) {
            titulo.style      = 'text-decoration: line-through';
            divCard.style     = 'background-color: var(--cor-cinza-4)';
            checkbox.style    = 'cursor: not-allowed;'
            checkbox.disabled = true;
        } else {
            checkbox.addEventListener('change', () =>  ConcluirHabito(habito, checkbox, titulo, divCard));
        }

        divEditar.addEventListener('click', (evento) => {
            localStorage.setItem("@kenzie-habit:habit_id", evento.target.title);
        });

        divTitulo     .append(titulo);
        divDescricao  .append(descricao);
        divEditar     .append(editar_1, editar_2, editar_3);
        divCard       .append(checkbox, divTitulo, divDescricao, categoria, divEditar);
        containerCards.append(divCard);
    }
}

MostrarTodos()


const todos = document.querySelector('.todos');
todos.addEventListener('click', MostrarTodos);

export async function MostrarTodos () {
    containerCards.innerHTML = '';

    const listaHabitos = await RequisicoesHabitos.mostrarTodosHabitos();

    listaHabitos.forEach(habito => Habito.criarCardHabito(habito));
}


export function ConcluirHabito (habito, checkbox, titulo, divCard) {

    titulo.style   = 'text-decoration: line-through';
    divCard.style  = 'background-color: var(--cor-cinza-4)';
    checkbox.style = 'cursor: not-allowed;'

    checkbox.title = 'Bloquado'

    checkbox.disabled = true;

    RequisicoesHabitos.marcarComoFeito(habito.habit_id);
}


const concluidos = document.querySelector('.concluido');
concluidos.addEventListener('click', MostrarConcluidos);

export async function MostrarConcluidos () {
    containerCards.innerHTML = '';

    const todosHabitos = await RequisicoesHabitos.mostrarTodosHabitos();

    todosHabitos.forEach(habito => {if(habito.habit_status === true) {
            Habito.criarCardHabito(habito)
        }}
    );
}

