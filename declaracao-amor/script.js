const text = "EU AMO MUITO VOCÊ!, Oii mia principessa feliz 1 mes juntossss!!!! e feliz dia dos casal junto, queria fazer esse bilhetinho pra você saber o quanto eu te amoo, te amo muito minha gatinha. Quero que esse namoro permaneça firme e forte como está com varias risadas, dificuldades chatas e muito amor e carinho. ❤️";
const typedText = document.getElementById("typed-text");
const startButton = document.getElementById("start-button");
const music = document.getElementById("bg-music");
const heartsContainer = document.getElementById("hearts-container");

startButton.addEventListener("click", () => {
  music.play();
  startTyping();
  startButton.style.display = "none";
  generateHearts();
});

function startTyping() {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      if (text.charAt(i) === "\n") {
        typedText.innerHTML += "<br>";
      } else {
        typedText.innerHTML += text.charAt(i);
      }
      i++;
    } else {
      clearInterval(interval);

      // Faz o texto sumir com animação
      setTimeout(() => {
        typedText.classList.add("fade-out");

        // Depois de sumir, mostra a imagem com fade-in
        setTimeout(() => {
          typedText.style.display = "none";
          showImage();
        }, 1000); // Tempo da animação de saída
      }, 3000); // Espera 3 segundos após digitação
    }
  }, 100);
}

function generateHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.innerHTML = "❤️";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}

function showImage() {
  const img = document.createElement("img");
  img.src = "eu-e-bel.jpg";
  img.alt = "Foto do casal";
  img.classList.add("fade-in-image");
  document.body.appendChild(img);
}
