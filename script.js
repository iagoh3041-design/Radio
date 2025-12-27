const baseURL = "https://iagoh3041-design.github.io/radio/musicas/";

const musicas = [
    "harry_brega_do_bruxo.mp3",
    "reggae_funk_remix_2026.mp3",
    "outra_musica.mp3"
];

const audio = document.getElementById("audio");
const lista = document.getElementById("lista");

musicas.forEach((musica) => {
    const li = document.createElement("li");
    li.textContent = musica.replace(".mp3", "").replace(/_/g, " ");
    li.onclick = () => {
        audio.src = baseURL + musica;
        audio.play();
    };
    lista.appendChild(li);
});

// toca a primeira automaticamente
audio.src = baseURL + musicas[0];
