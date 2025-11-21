document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('demo-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('.js-open-demo');
  const closeBtn = modal.querySelector('.demo-modal-close');
  const overlay = modal.querySelector('.demo-modal-overlay');
  const form = document.getElementById('demo-form');

  // 👉 Replace this with your real endpoint (Formspree or your backend)
  const endpoint = 'https://your-backend-or-formspree-endpoint-here';

  function openModal(event) {
    if (event) event.preventDefault();
    modal.classList.add('is-open');
    const nameInput = document.getElementById('demo-name');
    if (nameInput) nameInput.focus();
  }

  function closeModal(event) {
    if (event) event.preventDefault();
    modal.classList.remove('is-open');
  }

  openButtons.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('demo-name').value.trim();
      const email = document.getElementById('demo-email').value.trim();
      const company = document.getElementById('demo-company').value.trim();

      if (!name || !email || !company) {
        alert('Please fill in all fields.');
        return;
      }

      // Payload that will be sent to your endpoint
      const payload = {
        name,
        email,
        company,
        to: 'coo@leader-tech.ai'
      };

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          // You can customize success condition based on your backend
          if (!res.ok) throw new Error('Network response was not ok');
          // Success: close modal + reset form + (optional) toast
          form.reset();
          closeModal();
          alert('Thank you. Your demo request has been sent.');
        })
        .catch(function () {
          alert('There was a problem sending your request. Please try again later.');
        });
    });
  }
});
