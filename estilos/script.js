const form = document.getElementById("form");
const input = document.getElementById("prompt");
const img = document.getElementById("imagem");
const loading = document.getElementById("loading");
const lista = document.getElementById("listaHistorico");
const download = document.getElementById("download");

// FUNÇÃO DAS SUGESTÕES
window.usarPrompt = function(texto) {
  input.value = texto;
}

// HISTÓRICO
function adicionarHistorico(prompt) {
  const li = document.createElement("li");
  li.textContent = prompt;

  li.onclick = () => {
    input.value = prompt;
  };

  lista.prepend(li);
}

// GERAR IMAGEM
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const prompt = input.value;

  loading.style.display = "block";
  img.src = "";

  // gera imagem baseada no texto
  const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(prompt)}/400`;

  setTimeout(() => {
    img.src = imageUrl;
    download.href = imageUrl;

    adicionarHistorico(prompt);

    loading.style.display = "none";
  }, 800);
});
