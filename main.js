$(document).ready(function () {
  const endpoint = "https://api.github.com/users/SantosJI4";
  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const reposElement = document.querySelector("#repository");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");

  fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      nameElement.innerText = data.name;
      usernameElement.innerText = `@${data.login}`;
      avatarElement.src = data.avatar_url;
      reposElement.innerText = data.public_repos;
      followersElement.innerText = data.followers;
      followingElement.innerText = data.following;
      linkElement.href = data.html_url;
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert(
        "Ocorreu um erro ao buscar os dados do usuário. Tente novamente mais tarde."
      );
    })
    .finally(() => {
      console.log("Requisição finalizada.");
    });
});
