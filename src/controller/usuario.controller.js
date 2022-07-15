export default class RequisicoesUsuario {
  static url_base = "https://habits-kenzie.herokuapp.com/api";
  static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"));

  static async login(dados_usuario) {
    return await fetch(`${this.url_base}/userLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados_usuario),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem(
          "@kenzie-habits:user",
          JSON.stringify(res.response)
        );
        localStorage.setItem("@kenzie-habits:token", JSON.stringify(res.token));
        return res;
      })
      .catch((err) => console.log(err));
  }

  static async atualizarPerfil(dado_usuario) {
    return await fetch(`${this.url_base}/user/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(dado_usuario),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("@kenzie-habits:user", JSON.stringify(res));
      })
      .catch((err) => console.log(err));
  }
}
