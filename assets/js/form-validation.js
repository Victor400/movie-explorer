document.addEventListener("DOMContentLoaded", () => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });

        form.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', () => {
                if (input.checkValidity()) {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                } else {
                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                }
            });

            input.addEventListener('blur', () => {
                if (input.checkValidity()) {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                } else {
                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                }
            });
        });
    });

    const subscribeForm = document.getElementById('subscribe-form');
    const newsletterModalEl = document.getElementById('newsletter-modal');

    if (subscribeForm && newsletterModalEl) {
        const newsletterModal = bootstrap.Modal.getOrCreateInstance(newsletterModalEl);

        subscribeForm.addEventListener('submit', event => {
            event.preventDefault();

            if (!subscribeForm.checkValidity()) {
                event.stopPropagation();
                subscribeForm.classList.add('was-validated');
            } else {
                newsletterModal.hide();

                newsletterModalEl.addEventListener('hidden.bs.modal', () => {
                    window.location.href = 'success-page.html';
                }, { once: true });
            }
        });
    }
});
