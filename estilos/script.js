window.usarPrompt = function(texto) {
  document.getElementById("prompt").value = texto;
};

const form = document.getElementById("form");
const input = document.getElementById("prompt");
const img = document.getElementById("imagem");
const loading = document.getElementById("loading");
const lista = document.getElementById("listaHistorico");
const download = document.getElementById("download");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const prompt = input.value;

  loading.style.display = "block";
  img.src = "";

  const imageUrl = "https://picsum.photos/400?random=" + Math.random();

  setTimeout(function() {
    img.src = imageUrl;
    download.href = imageUrl;

    const li = document.createElement("li");
    li.textContent = prompt;
    li.onclick = function() {
      input.value = prompt;
    };
    lista.prepend(li);

    loading.style.display = "none";
  }, 800);
});
