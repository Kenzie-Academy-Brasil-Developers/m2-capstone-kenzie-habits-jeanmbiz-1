import RequisicoesHabitos from "./habitos.controller.js"


export default class CriarHabito {

    static modalHabito() {
        const body = document.querySelector("body")

        const div = document.createElement("div")
        div.classList.add("divHabito")

        const container = document.createElement("div")
        container.classList.add("divHabito__container", "animate__animated", "animate__flipOutY")

        const modal = document.createElement("div")
        modal.classList.add("divHabito__modal")

        const divModalHeader = document.createElement("div")
        divModalHeader.classList.add("divModalHeader")

        const h2 = document.createElement("h2")
        h2.classList.add("divHabito__h2")
        h2.innerText = "Criar hábito"

        const p = document.createElement("p")
        p.classList.add("divHabito__p")
        p.href = "./paginaPrincipal.views.html"
        p.innerText = "X"
        p.addEventListener("click", (event) => {
            window.location.reload(true)
        })

        const form = document.createElement("form")
        form.classList.add("divHabito__form")
        form.id = "criaForm"

        const divDeTitulo = document.createElement("div")

        const titulo = document.createElement("label")
        titulo.for = "titulo"
        titulo.innerText = "Título"

        const inputDeTitulo = document.createElement("input")
        inputDeTitulo.type = "text"
        inputDeTitulo.id = "titulo"
        inputDeTitulo.placeholder = "Digitar título"
        inputDeTitulo.required = true

        const divDeDescricao = document.createElement("div")

        const descricao = document.createElement("label")
        descricao.for = "descricao"
        descricao.innerText = "Descrição"

        const textearea = document.createElement("textarea")
        textearea.name = "textarea"
        textearea.style.resize = "none"
        textearea.id = "descricaoCriarHabito"
        textearea.rows = "3"
        textearea.cols = "5"
        textearea.placeholder = "Digitar descrição"
        textearea.required = true

        const divDeCategoria = document.createElement("div")
        divDeCategoria.classList.add("divHabito__categoria")

        const categoria = document.createElement("label")
        categoria.for = "categoria"
        categoria.innerText = "Categoria"

        const selectCategoria = document.createElement("select")
        selectCategoria.name = "categoria"
        selectCategoria.id = "categoria"
        selectCategoria.placeholder = "SElecionar categoria"

        const opcao1 = document.createElement("option")
        opcao1.value = "casa"
        opcao1.innerText = "&#127968; Casa"

        const opcao2 = document.createElement("option")
        opcao2.value = "estudos"
        opcao2.innerText = "&#128218; Estudos"

        const opcao3 = document.createElement("option")
        opcao3.value = "lazer"
        opcao3.innerText = "&#9917; Lazer"

        const opcao4 = document.createElement("option")
        opcao4.value = "saude"
        opcao4.innerText = "&#128153; Saúde"

        const opcao5 = document.createElement("option")
        opcao5.value = "trabalho"
        opcao5.innerText = "&#9874; Trabalho"

        const botaoInserir = document.createElement("button")
        botaoInserir.type = "submit"
        botaoInserir.innerText = "Inserir"
        botaoInserir.addEventListener("click", async (event) => {
            event.preventDefault()
            const data = {  
                "habit_title": inputDeTitulo.value,
                "habit_description": textearea.value,
                "habit_category": selectCategoria.value
                }
            await RequisicoesHabitos.criarHabito(data)
            window.location.reload(true)    
        })

        div.append(container)
        container.append(modal)
        modal.append(divModalHeader, form)
        divModalHeader.append(h2, p)
        form.append(divDeTitulo, divDeDescricao, divDeCategoria, botaoInserir)
        divDeTitulo.append(titulo, inputDeTitulo)
        divDeDescricao.append(descricao, textearea)
        divDeCategoria.append(categoria, selectCategoria)
        selectCategoria.append(opcao1, opcao2, opcao3, opcao4, opcao5)
        body.append(div)
    }

    static criaDadosFormulario(){
        const titulo = document.getElementById("titulo")
        const descricao = document.getElementById("descricao")
        const categoria = document.getElementById("categoria")

        return {  
        "habit_title": titulo.value,
        "habit_description": descricao.value,
        "habit_category": categoria.value
        }
    }

    static criaHabito(){
        const form = document.getElementById("criaForm")
        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const habitos = this.criaDadosFormulario()
            await RequisicoesHabitos.criarHabito(habitos)
            window.location.reload(true)
        })
         
    }
}

