import RequisicoesUsuario from "./usuario.controller.js";

const botaoLogin = document.querySelector('.celular__botao');

botaoLogin.addEventListener('click', efetuarLogin );

export default efetuarLogin
async function efetuarLogin(evento){
    evento.preventDefault();

    const usuario = document.querySelector('.email').value;
    const senha = document.querySelector('.senha').value;

    const dados = {
        email: usuario,
        password: senha
    }

    const resposta = await RequisicoesUsuario.login(dados)
    if ('token' in resposta){
        location.href = 'https://www.youtube.com/'
    }
}
