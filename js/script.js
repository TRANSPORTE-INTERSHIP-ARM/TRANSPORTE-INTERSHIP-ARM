document.addEventListener("DOMContentLoaded", function() {
    const btns = document.querySelectorAll(".portfolioBtns li");
    const cards = document.querySelectorAll(".portfolioGallery .card");
    const popupBox = document.querySelector(".portfolioPopupBox");
    const popupImage = document.querySelector(".portfolioPopupBox img");
    const closePopupBtn = document.querySelector(".portfolioPopupBox span");

    // Filtrar las tarjetas al hacer clic en los botones
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            btns.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            const filter = this.getAttribute("data-filter");

            cards.forEach(card => {
                const category = card.getAttribute("data-item");
                if (filter === "all" || filter === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Mostrar la ventana emergente al hacer clic en una tarjeta
    cards.forEach(card => {
        card.addEventListener("click", function() {
            popupImage.src = this.querySelector("img").src;
            popupBox.style.display = "flex";
        });
    });

    // Cerrar la ventana emergente al hacer clic en el botón de cierre
    closePopupBtn.addEventListener("click", function() {
        popupBox.style.display = "none";
    });
});
