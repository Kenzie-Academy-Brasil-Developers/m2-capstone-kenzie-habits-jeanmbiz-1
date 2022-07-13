import RequisicoesHabitos from "./habitos.controller.js";

const usuario = JSON.parse(localStorage.getItem("@kenzie-habits:user"))

fazerHeader()

function fazerHeader(){
    const cabecalhoSuperior = document.querySelector('.cabecalho__superior--perfil');

    const imgSuperior = document.createElement('img')
    imgSuperior.classList.add('menu__perfil')
    imgSuperior.src = usuario.usr_image

    const cabecalhoInferior = document.querySelector('.cabecalho__inferior--foto')

    const imgInferior = document.createElement('img')
    imgInferior.classList.add('foto__perfil')
    imgInferior.src = usuario.usr_image

    const nomeUsuario = document.querySelector('.nome__usuario')
    nomeUsuario.innerText = usuario.usr_name

    cabecalhoSuperior.appendChild(imgSuperior)
    cabecalhoInferior.appendChild(imgInferior)
}

const sairPerfil = document.querySelector('.sair__perfil')
sairPerfil.addEventListener('click', logout)

function logout(evento){
    localStorage.removeItem('@kenzie-habits:user')
    localStorage.removeItem('@kenzie-habits:token')
    location.href = '/index.html'
}




