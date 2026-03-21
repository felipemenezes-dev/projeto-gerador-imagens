const form = document.getElementById("form");
const input = document.getElementById("prompt");
const img = document.getElementById("imagem");
const loading = document.getElementById("loading");
const download = document.getElementById("download");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const prompt = input.value;

  loading.style.display = "block";
  img.src = "";

  try {
    // 🔥 AQUI tu coloca tua API atual
    // Exemplo genérico:
    const response = await fetch(`https://api.example.com/generate?prompt=${prompt}`);
    const data = await response.json();

    const imageUrl = data.image;

    img.src = imageUrl;
    download.href = imageUrl;

  } catch (error) {
    alert("Erro ao gerar imagem");
  }

  loading.style.display = "none";
});
