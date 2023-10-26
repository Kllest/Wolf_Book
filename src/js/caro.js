const carousel1Html = createCarousel();
const carousel2Html = createCarousel();

const container1 = document.getElementById("container1"); // Substitua "container1" pelo ID do primeiro container
container1.innerHTML = carousel1Html;
initializeCarousel(container1);

const container2 = document.getElementById("container2"); // Substitua "container2" pelo ID do segundo container
container2.innerHTML = carousel2Html;
initializeCarousel(container2);




function createCarousel() {
    return `
        <div class="wrapper">
                    <span class="material-symbols-outlined" id="left">
                        arrow_back_ios
                    </span>
                    <div class="carousel">
                        <a href="" download>
                            <img src="./src/img/Iracema.png"
                                alt="">
                        </a>

                        <img src="https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg"
                            alt="">
                        <img src="https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg"
                            alt="">
                        <img src="https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg"
                            alt="">
                        <img src="https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg"
                            alt="">
                        <img src="https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg"
                            alt="">
                        <img src="https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg"
                            alt="">
                    </div>
    `;
}
function initializeCarousel(carouselElement) {
    const carousel = carouselElement.querySelector(".carousel");
    const firstImg = carousel.querySelectorAll("img")[0];
    const arrowIcons = carouselElement.querySelectorAll(".wrapper span");

    let isDragStart = false;
    let prevPageX;
    let prevScrollLeft;
    const firstImgWidth = firstImg.clientWidth + 14;

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
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


