const form = document.querySelector("form");
const input = document.getElementById("descricao");
const img = document.querySelector("img");

// criar loading
const loading = document.createElement("p");
loading.textContent = "Gerando imagem...";
loading.style.display = "none";
form.appendChild(loading);

// evento do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const prompt = input.value;

  loading.style.display = "block";
  img.src = "";

  const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(prompt)}/400`;

  setTimeout(() => {
    img.src = imageUrl;
    loading.style.display = "none";
  }, 800);
});
