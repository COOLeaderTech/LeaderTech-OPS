document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('demo-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('.js-open-demo');
  const closeBtn = modal.querySelector('.demo-modal-close');
  const overlay = modal.querySelector('.demo-modal-overlay');
  const form = document.getElementById('demo-form');

  // 🔑 FILL THESE FROM EMAILJS DASHBOARD
  const serviceID = 'service_cmbatf9';
  const templateID = 'template_p9k8v7p';

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

      // 👇 These keys (name, email, company) must match your template variables
      const templateParams = {
        NAME: NAME,
        BUSINESS EMAIL: BUSINESS EMAIL,
        COMPANY: COMPANY 
      };

      // Send via EmailJS
      emailjs.send(serviceID, templateID, templateParams)
        .then(function () {
          form.reset();
          closeModal();
          alert('Thank you. Your demo request has been sent.');
        })
        .catch(function (error) {
          console.error('EmailJS error:', error);
          alert('There was a problem sending your request. Please try again later.');
        });
    });
  }
});

