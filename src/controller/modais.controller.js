import RequisicoesHabitos from "./habitos.controller.js";
import RequisicoesUsuario from "./usuario.controller.js";


export default class ComponentesModais {

    static body = document.querySelector("body");


    static modalEditarPerfil() {

        const modal         = document.createElement("div");
        const modalEdicao   = document.createElement("div");
        const modalInfo     = document.createElement("div");
        const modalTitulo   = document.createElement("div");
        const h4            = document.createElement("h4");
        const btnFechar     = document.createElement("button");
        const figure        = document.createElement("figure");
        const imgFechar     = document.createElement("img");
        const divForm       = document.createElement("div");
        const form          = document.createElement("form");
        const labelNome     = document.createElement("label");
        const inputNome     = document.createElement("input");
        const labelDes      = document.createElement("label");
        const inputDes      = document.createElement("input");
        const divBotoes     = document.createElement("div");
        const button        = document.createElement("button");


        modal.classList.add("modal__background", "modal__editar__perfil");
        modalEdicao.classList.add("modal__edicao__perfil");
        modalInfo.classList.add("modal__informacoes", "info__perfil");
        modalTitulo.classList.add("modal__titulo");
        btnFechar.classList.add("botao__fechar");
        imgFechar.classList.add("botao__fechar", "botoes");
        divForm.classList.add("formulario__modal");
        form.classList.add("formulario__edicao__perfil");
        divBotoes.classList.add("botoes__edicao__perfil");
        button.classList.add("botao__salvar", "btn__salvar", "botoes");


        h4.innerText = "Editar Perfil";
        btnFechar.type = "button";
        imgFechar.src = "../assets/botaoFechar.svg";
        imgFechar.alt = "botão fechar";

        btnFechar.addEventListener("click", () => {
            modal.style.display = "none";
        })

        labelNome.innerText = "Nome";
        inputNome.name      = "usr_name";
        inputNome.type      = "text";
        labelDes.innerText  = "URL da imagem do perfil";
        inputDes.name       = "usr_image";
        inputDes.type       = "text";
        button.type         = "submit"
        button.innerText    = "Salvar alterações";

        button.addEventListener("click", async (event) => {
            event.preventDefault();
            
            const data ={
                usr_name: form[0].value,
                usr_image: form[1].value,
            }
            
            await RequisicoesUsuario.atualizarPerfil(data);
            window.location.reload(true);
        })


        divBotoes.append(button);
        form.append(labelNome, inputNome, labelDes, inputDes, divBotoes);
        divForm.append(form);
        figure.append(imgFechar);
        btnFechar.append(figure)
        modalTitulo.append(h4, btnFechar);
        modalInfo.append(modalTitulo, divForm);
        modalEdicao.append(modalInfo);
        modal.append(modalEdicao);
        this.body.append(modal);
    }


    static async modalEditarHabito() {

        const modal         = document.createElement("div");
        const modalEdicao   = document.createElement("div");
        const modalInfo     = document.createElement("div");
        const modalTitulo   = document.createElement("div");
        const h4            = document.createElement("h4");
        const btnFechar     = document.createElement("button");
        const figure        = document.createElement("figure");
        const imgFechar     = document.createElement("img");
        const divForm       = document.createElement("div");
        const form          = document.createElement("form");
        const labelTit      = document.createElement("label");
        const inputTit      = document.createElement("input");
        const labelDesc     = document.createElement("label");
        const inputDesc     = document.createElement("input");
        const labelCat      = document.createElement("label");
        const selectCat     = document.createElement("select");
        const option1       = document.createElement("option");
        const option2       = document.createElement("option");
        const option3       = document.createElement("option");
        const option4       = document.createElement("option");
        const option5       = document.createElement("option");
        const divStatus     = document.createElement("div");
        const labelStatus   = document.createElement("label");
        const inputStatus   = document.createElement("input");
        const divBotoes     = document.createElement("div");
        const btnExcluir    = document.createElement("button");
        const btnSalvar     = document.createElement("button");


        modal.classList.add("modal__background", "modal__editar__habito");
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

        btnExcluir.addEventListener("click", (event) => {
            event.preventDefault();
            this.modalExcluirHabito();
        })
        btnSalvar.classList.add("botao__salvar", "botoes");


        h4.innerText    = "Editar hábito";
        btnFechar.type  = "button";
        imgFechar.src   = "../assets/botaoFechar.svg";
        imgFechar.alt   = "botão fechar";

        btnFechar.addEventListener("click", () => {
            modal.style.display = "none";
        })

        const habitos = await RequisicoesHabitos.mostrarTodosHabitos();
        const habito = habitos.find( hab => hab.habit_id === +JSON.parse(localStorage.getItem("@kenzie-habit:habit_id")))

        labelTit.innerText      = "Titulo";
        inputTit.name           = "habit_title";
        inputTit.type           = "text";
        inputTit.defaultValue   =  habito.habit_title;
        labelDesc.innerText     = "Descrição";
        inputDesc.name          = "habit_description";
        inputDesc.type          = "text";
        inputDesc.defaultValue  =  habito.habit_description
        labelCat.innerText      = "Categoria";
        selectCat.name          = "habit_category";
        selectCat.id            = "categoria";
        option1.value           = "saude";
        option1.innerHTML       = "&#128153;Saúde"
        option2.value           = "estudos";
        option2.innerHTML       = "&#128218;Estudos"
        option3.value           = "casa";
        option3.innerHTML       = "&#127968;Casa"
        option4.value           = "trabalho";
        option4.innerHTML       = "&#9874;Trabalho"
        option5.value           = "lazer";
        option5.innerHTML       = "&#9917;Lazer";
        labelStatus.innerText   = "Status";
        inputStatus.name        = "status";
        inputStatus.type        = "checkbox";
        btnExcluir.type         = "submit";
        btnExcluir.innerText    = "Excluir";
        btnSalvar.type          = "submit";
        btnSalvar.innerText     = "Salvar alterações";

        

        btnSalvar.addEventListener("click", async (event) => {
            event.preventDefault();
            const habitoId = JSON.parse(localStorage.getItem("@kenzie-habit:habit_id"));


            const data ={
                habit_title: form[0].value,
                habit_description: form[1].value,
                habit_category: form[2].value,
            };

            await RequisicoesHabitos.editarHabito(habitoId, data);

            if(inputStatus.checked) {
                await RequisicoesHabitos.marcarComoFeito(habitoId);
            }
            window.location.reload(true);
        })


        divBotoes.append(btnExcluir, btnSalvar);
        divStatus.append(labelStatus, inputStatus);
        selectCat.append(option1, option2, option3, option4, option5);
        form.append(labelTit, inputTit, labelDesc, inputDesc, labelCat, selectCat, divStatus, divBotoes);
        divForm.append(form);
        figure.append(imgFechar);
        btnFechar.append(figure);
        modalTitulo.append(h4, btnFechar);
        modalInfo.append(modalTitulo, divForm);
        modalEdicao.append(modalInfo);
        modal.append(modalEdicao);
        
        this.body.append(modal);

        return modal
    }


    static modalExcluirHabito() {

        const modal         = document.createElement("div");
        const modalEdicao   = document.createElement("div");
        const modalInfo     = document.createElement("div");
        const modalTitulo   = document.createElement("div");
        const h4            = document.createElement("h4");
        const btnFechar     = document.createElement("button");
        const figure        = document.createElement("figure");
        const imgFechar     = document.createElement("img");
        const divTexto      = document.createElement("div");
        const h4Texto       = document.createElement("h4");
        const p             = document.createElement("p");
        const divBotoes     = document.createElement("div");
        const btnCancelar   = document.createElement("button");
        const btnExcluir    = document.createElement("button");

    
        modal.classList.add("modal__background", "modal__excluir__habito");
        modalEdicao.classList.add("modal__edicao__perfil");
        modalInfo.classList.add("modal__informacoes", "info");
        modalTitulo.classList.add("modal__titulo");
        btnFechar.classList.add("botao__fechar", "botoes");
        imgFechar.classList.add("botao__fechar", "botoes");
        divTexto.classList.add("texto__modal");
        divBotoes.classList.add("botoes__excluir__perfil");
        btnCancelar.classList.add("botoes", "botao__excluir", "cancelar");     
        btnExcluir.classList.add("botoes", "botao__salvar", "excluir");  
        
        
        h4.innerText    = "Excluir hábito";
        btnFechar.type  = "button";
        imgFechar.src   = "../assets/botaoFechar.svg";
        imgFechar.alt   = "botão fechar";

        btnFechar.addEventListener("click", () => {
            modal.style.display = "none";
        })

        h4Texto.innerText       = "Certeza que deseja excluir este hábito?";
        p.innerText             = "Após executar essa ação não será possível desfazer.";
        btnCancelar.type        = "submit"
        btnCancelar.innerText   = "Cancelar";

        btnCancelar.addEventListener("click", (event) => {
            event.preventDefault();
            modal.parentNode.removeChild(modal)
        })

        btnExcluir.type         = "submit";
        btnExcluir.innerText    = "Sim, excluir este hábito";


        btnExcluir.addEventListener("click", async (event) => {
            event.preventDefault();
          
            const habitoId = JSON.parse(localStorage.getItem("@kenzie-habit:habit_id"));

            await RequisicoesHabitos.deletarHabito(habitoId);  
            window.location.reload(true);
        })


        figure.append(imgFechar);
        btnFechar.append(figure);
        modalTitulo.append(h4, btnFechar);
        divTexto.append(h4Texto, p);
        divBotoes.append(btnCancelar, btnExcluir);
        modalInfo.append(modalTitulo,divTexto, divBotoes);
        modalEdicao.append(modalInfo);
        modal.append(modalEdicao);
        this.body.append(modal);
    }
}