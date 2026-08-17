// ======================================
// JAVASCRIPT — SITE INSTITUCIONAL ESSA
// ======================================


// ======================================
// MENU — FECHAR AO CLICAR NO LINK
// ======================================

const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        linksMenu.forEach(function(item) {
            item.classList.remove("ativo");
        });

        this.classList.add("ativo");

    });

});


// ======================================
// ANO AUTOMÁTICO DO RODAPÉ
// ======================================

const anoAtual = new Date().getFullYear();

const rodape = document.querySelector("footer");

if (rodape) {

    const paragrafoAno = rodape.querySelector(".ano");

    if (paragrafoAno) {
        paragrafoAno.textContent =
            "© " + anoAtual +
            " ESSA. Todos os direitos reservados.";
    }

}


// ======================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ======================================

const elementos = document.querySelectorAll(
    ".card, .projeto, .contato-box, .foto"
);

const observador = new IntersectionObserver(
    function(entradas) {

        entradas.forEach(function(entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function(elemento) {

    observador.observe(elemento);

});


// ======================================
// BOTÃO VOLTAR AO TOPO
// ======================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "voltarTopo";

botaoTopo.title = "Voltar ao topo";

document.body.appendChild(botaoTopo);


// Mostrar botão depois de rolar

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        botaoTopo.classList.add("visivel");

    } else {

        botaoTopo.classList.remove("visivel");

    }

});


// Voltar ao topo

botaoTopo.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================================
// LINK DE E-MAIL
// ======================================

const email = "sociedadeessa@gmail.com";

const linksEmail = document.querySelectorAll(".email");

linksEmail.forEach(function(link) {

    link.href = "mailto:" + email;

});


// ======================================
// LINK PARA WHATSAPP
// ======================================

const telefoneWhatsApp = "5579981375273";

const linksWhatsApp =
    document.querySelectorAll(".whatsapp");

linksWhatsApp.forEach(function(link) {

    const mensagem =
        "Olá! Gostaria de conhecer melhor o trabalho da ESSA.";

    link.href =
        "https://wa.me/" +
        telefoneWhatsApp +
        "?text=" +
        encodeURIComponent(mensagem);

    link.target = "_blank";

});


// ======================================
// GALERIA — ABRIR IMAGEM
// ======================================

const fotos = document.querySelectorAll(".foto img");

fotos.forEach(function(foto) {

    foto.addEventListener("click", function() {

        const imagemAberta =
            document.createElement("div");

        imagemAberta.classList.add("imagem-modal");

        imagemAberta.innerHTML = `
            <div class="modal-conteudo">

                <span class="fechar-modal">&times;</span>

                <img src="${this.src}" alt="${this.alt}">

                <p>${this.alt}</p>

            </div>
        `;

        document.body.appendChild(imagemAberta);


        const fechar =
            imagemAberta.querySelector(".fechar-modal");

        fechar.addEventListener("click", function() {

            imagemAberta.remove();

        });


        imagemAberta.addEventListener(
            "click",
            function(event) {

                if (event.target === imagemAberta) {
                    imagemAberta.remove();
                }

            }
        );

    });

});
