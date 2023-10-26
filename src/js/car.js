function setupCarousel(carouselContainerId) {
    const carouselContainer = document.getElementById(carouselContainerId);
    const carousel = carouselContainer.querySelector(".carousel");
    const firestImg = carousel.querySelectorAll("img")[0];
    const arrowIcons = carouselContainer.querySelectorAll(".wrapper span");

    let isDragStart = false, prevPageX, prevScrollLeft;
    let firestImgWidth = firestImg.clientWidth + 14;

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id == "left" ? -firestImgWidth : firestImgWidth;
            showHideIcons();
        });
    });

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        carousel.classList.add("dragging");
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
}

// Chame a função para configurar os carrosséis desejados
setupCarousel("carousel1");
setupCarousel("carousel2");
setupCarousel("carousel");
