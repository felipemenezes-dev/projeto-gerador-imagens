const form = document.getElementById("form");
const input = document.getElementById("prompt");
const img = document.getElementById("imagem");
const loading = document.getElementById("loading");
const lista = document.getElementById("listaHistorico");
const download = document.getElementById("download");

// sugestões
function usarPrompt(texto) {
  input.value = texto;
}

// histórico
function adicionarHistorico(prompt) {
  const li = document.createElement("li");
  li.textContent = prompt;

  li.onclick = () => {
    input.value = prompt;
  };

  lista.prepend(li);
}

// gerar imagem
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const prompt = input.value;

  loading.style.display = "block";
  img.src = "";

  // simulação IA
  const imageUrl = `https://picsum.photos/400?random=${Math.random()}`;

  setTimeout(() => {
    img.src = imageUrl;
    download.href = imageUrl;

    adicionarHistorico(prompt);

    loading.style.display = "none";
  }, 1000);
});
