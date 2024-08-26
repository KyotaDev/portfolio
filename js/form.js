const form = document.getElementById('contactForm');
const loadingModal = document.getElementById('loadingModal');
const successMessage = document.getElementById('successMessage');

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    disableScroll();

    loadingModal.classList.add('show');

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
    .then(response => response.ok)
    .then(() => {
        setTimeout(() => {
            loadingModal.classList.remove('show');
            successMessage.classList.add('show');

            setTimeout(() => {
                successMessage.classList.remove('show');
                enableScroll();
                form.reset();
            }, 3000);
        }, 3000);
    })
    .catch(error => {
        loadingModal.classList.remove('show');
        enableScroll();
        alert('Something went wrong. Please try again later.');
    });
});
