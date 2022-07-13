export default class ComponentesModais {

    static body = document.querySelector("body");

    static modalEditarHabito() {

        const modal = document.createElement("div");
        const modalEdicao = document.createElement("div");
        const modalInfo = document.createElement("div");
        const modalTitulo = document.createElement("div");
        const h4 = document.createElement("h4");
        const btnFechar = document.createElement("button");
        const figure = document.createElement("figure");
        const imgFechar = document.createElement("img");
        const divForm = document.createElement("div");
        const form = document.createElement("form");
        const labelTit = document.createElement("label");
        const inputTit = document.createElement("input");
        const labelDesc = document.createElement("label");
        const inputDesc = document.createElement("input");
        const labelCat = document.createElement("label");
        const selectCat = document.createElement("select");
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
        const option4 = document.createElement("option");
        const option5 = document.createElement("option");
        const divStatus = document.createElement("div");
        const labelStatus = document.createElement("label");
        const inputStatus = document.createElement("input");
        const divBotoes = document.createElement("div");
        const btnExcluir = document.createElement("button");
        const btnSalvar = document.createElement("button");


        modal.classList.add("modal__background");
        modalEdicao.classList.add("modal__edicao__perfil");
        modalInfo.classList.add("modal__informacoes");
        modalTitulo.classList.add("modal__titulo");
        btnFechar.classList.add("botao__fechar");
        imgFechar.classList.add("botao__fechar", "botoes");
        divForm.classList.add("formulario__modal");
        form.classList.add("formulario__edicao__perfil");
        selectCat.setAttribute("id", "categoria");
        divStatus.classList.add("status__checkbox");
        labelStatus.classList.add("status__form");
        inputStatus.classList.add("checkbox");
        divBotoes.classList.add("botoes__edicao__perfil");
        btnExcluir.classList.add("botao__excluir", "botoes");
        btnSalvar.classList.add("botao__salvar", "botoes");


        h4.innerText = "Editar hábito";
        btnFechar.type = "button";
        imgFechar.src = "../assets/botaoFechar.svg";
        imgFechar.alt = "botão fechar";
        labelTit.innerText = "Titulo";
        inputTit.name = "titulo";
        inputTit.type = "text";
        labelDesc.innerText = "Descrição";
        inputDesc.name = "descricao";
        inputDesc.type = "text";
        labelCat.innerText = "Categoria";
        selectCat.name = "categoria";
        selectCat.id = "categoria";
        option1.value = "saude";
        option1.innerText = "Saúde"
        option2.value = "estudos";
        option2.innerText = "Estudos"
        option3.value = "casa";
        option3.innerText = "Casa"
        option4.value = "trabalho";
        option4.innerText = "Trabalho"
        option5.value = "lazer";
        option5.innerText = "Lazer";
        labelStatus.innerText = "Status";
        inputStatus.name = "status";
        inputStatus.type = "checkbox";
        btnExcluir.type = "submit";
        btnExcluir.innerText = "Excluir";
        btnSalvar.type = "submit";
        btnSalvar.innerText = "Salvar alterações";


        divBotoes.append(btnExcluir, btnSalvar);
        divStatus.append(labelStatus, inputStatus);
        selectCat.append(option1, option2, option3, option4, option5);
        form.append(labelTit, inputTit, labelDesc, inputDesc, labelCat, selectCat, divStatus, divBotoes);
        divForm.append(form);
        figure.append(imgFechar);
        modalTitulo.append(h4, btnFechar, figure, imgFechar);
        modalInfo.append(modalTitulo, divForm);
        modalEdicao.append(modalInfo);
        modal.append(modalEdicao);
        this.body.append(modal);

        modal.style.display = "none";
    }
}