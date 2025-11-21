document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('demo-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('.js-open-demo');
  const closeBtn = modal.querySelector('.demo-modal-close');
  const overlay = modal.querySelector('.demo-modal-overlay');
  const form = document.getElementById('demo-form');

  function openModal(event) {
    if (event) event.preventDefault();
    modal.classList.add('is-open');
    const firstInput = document.getElementById('demo-business');
    if (firstInput) firstInput.focus();
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
      closeModal(event);
    }
  });

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const business = document.getElementById('demo-business').value.trim();
      const email = document.getElementById('demo-email').value.trim();
      const company = document.getElementById('demo-company').value.trim();

      if (!business || !email || !company) {
        alert('Please fill in all fields.');
        return;
      }

      // No backend: just close and show confirmation
      form.reset();
      closeModal(event);
      alert('Thank you. We received your demo request.');
    });
  }
});

