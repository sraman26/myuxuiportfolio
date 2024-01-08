document.addEventListener('DOMContentLoaded', function () {
    const portfolioLink = document.querySelector('.portfolio-link');
    const portfolioZoom = document.querySelector('.portfolio-zoom');

    portfolioZoom.addEventListener('click', function (event) {
        event.preventDefault();
        const imgSrc = portfolioLink.getAttribute('href');
        const lightbox = `<div class="lightbox"><a href="${imgSrc}"><img src="${imgSrc}" alt=""></a></div>`;
        document.body.insertAdjacentHTML('beforeend', lightbox);
    });
});
