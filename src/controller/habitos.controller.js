export default class RequisicoesHabitos {
  static url_base = "https://habits-kenzie.herokuapp.com/api/habits";
  static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"));

  static async criarHabito(dados_habito) {
    return await fetch(`${this.url_base}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(dados_habito),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  static async mostrarTodosHabitos() {
    return await fetch(`${this.url_base}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  static async mostrarPorCategoria(categoria) {
    return await fetch(`${this.url_base}/category/${categoria}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  static async editarHabito(id_habito, dados_editados) {
    return await fetch(`${this.url_base}/${id_habito}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(dados_editados),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  static async marcarComoFeito(id_habito) {
    return await fetch(`${this.url_base}/complete/${id_habito}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  static async deletarHabito(id_habito) {
    return await fetch(`${this.url_base}/${id_habito}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}
