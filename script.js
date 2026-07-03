const nome = document.getElementById("username");
nome.innerText = "Daiane";

const botoes = document.querySelectorAll(".buttonlist");

const links = [
  "https://www.alura.com.br/cursos-online-front-end/html-css",
  "https://linktr.ee/careers", 
  "https://linktr.ee/support", 
  "https://lnwy.com", 
  "https://linktr.ee" 
];

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = links[index];
    a.target = "_blank";
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
  });
});
