// ===============================
// EFEITO MÁQUINA DE ESCREVER
// ===============================

const nome = document.querySelector(".home h1 span");

if (nome) {
    const texto = "MATHEUS";
    let i = 0;

    nome.textContent = "";

    function escrever() {
        if (i < texto.length) {
            nome.textContent += texto.charAt(i);
            i++;
            setTimeout(escrever, 180);
        }
    }

    window.addEventListener("load", escrever);
}


// ===============================
// PARTÍCULAS
// ===============================

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "none";

const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

resize();
addEventListener("resize", resize);

const particulas = [];

for (let i = 0; i < 60; i++) {

    particulas.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - .5) * .4,
        dy: (Math.random() - .5) * .4,
        cor: Math.random() > .5 ? "#ff4fd8" : "#7a5cff"

    });

}

function animarParticulas(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particulas.forEach(p=>{

        p.x += p.dx;
        p.y += p.dy;

        if(p.x<0) p.x = canvas.width;
        if(p.x>canvas.width) p.x = 0;
        if(p.y<0) p.y = canvas.height;
        if(p.y>canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fillStyle = p.cor;
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.cor;
        ctx.fill();

    });

    requestAnimationFrame(animarParticulas);

}

animarParticulas();


// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

const elementos = document.querySelectorAll(
".projeto-card, .habilidade, .sobre-texto, .imagem-placeholder"
);

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="1s";

});

const reveal = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.2});

elementos.forEach(el=>reveal.observe(el));


// ===============================
// BARRAS DE HABILIDADES
// ===============================

const barras = document.querySelectorAll(".progresso");

barras.forEach(bar=>{

    const largura = bar.style.width;

    bar.style.width="0";

    const obs = new IntersectionObserver((entries)=>{

        if(entries[0].isIntersecting){

            setTimeout(()=>{

                bar.style.width = largura;

            },200);

        }

    },{threshold:.5});

    obs.observe(bar);

});


// ===============================
// FORMULÁRIO
// ===============================




document.getElementById("btnMindCat")?.addEventListener("click",()=>{

    window.open("https://mindcat.com.br/","_blank");

});

document.getElementById("btnBraco")?.addEventListener("click",()=>{

    window.open("https://github.com/Mussi162/Robotic-Arm-Controller---Arduino-Simulation-","_blank");

});

document.getElementById("btnSemaforo")?.addEventListener("click",()=>{

    window.open("https://github.com/SEU-LINK","_blank");

});

document.getElementById("btnPiano")?.addEventListener("click",()=>{

    window.open("https://github.com/Mussi162/Piano-Arduino","_blank");

});