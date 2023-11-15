let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

function redirecionar(botao, pagina) {
    window.location.href = pagina;
    document.addEventListener("DOMContentLoaded", function() {
        const pedidoForm = document.getElementById("pedidoForm");

        pedidoForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(pedidoForm);

            // Aqui, você pode enviar os dados do pedido para o servidor ou realizar qualquer ação necessária
            console.log("Pedido de Restaurante enviado:");
            for (let [key, value] of formData.entries()) {
                console.log(key + ": " + value);
            }

            // Limpar o formulário após o envio
            pedidoForm.reset();
        });
    });
}


