const nome = document.getElementById("username");
nome.innerText = "Daiane";

const primeiroBotao = document.querySelector(".buttonlist");

primeiroBotao.addEventListener("click", () => {

  const string = '{"nome" : "Acesse o meu curso HTML e CSS"}';
  const json = JSON.parse(string);

  const container = document.getElementById("container_link");
  
  const link = document.createElement("a");
  link.href = "https://www.alura.com.br/cursos-online-front-end/html-css";
  link.textContent = json.nome;
  link.target = "_blank";
  link.classList.add("buttonlist"); 

  container.appendChild(link);
});
