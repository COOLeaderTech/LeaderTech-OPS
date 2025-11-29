document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('demo-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('.js-open-demo');
  const closeBtn = modal.querySelector('.demo-modal-close');
  const overlay = modal.querySelector('.demo-modal-overlay');
  const form = document.getElementById('demo-form');
  const emailTo = 'coo@leader-tech.ai';

  function openModal(event) {
    if (event) event.preventDefault();
    modal.classList.add('is-open');
    const nameInput = document.getElementById('demo-name');
    if (nameInput) {
      nameInput.focus();
    }
  }

  function closeModal(event) {
    if (event) event.preventDefault();
    modal.classList.remove('is-open');
  }

  openButtons.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }

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

      const subject = encodeURIComponent('Demo request from ' + name);
      const bodyLines = [
        'Name: ' + name,
        'Business email: ' + email,
        'Company: ' + company
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));

      // Opens the user’s email client with prefilled content
      window.location.href = 'mailto:' + emailTo + '?subject=' + subject + '&body=' + body;

      closeModal();
    });
  }

  // --- Hero video play logic ---
  const heroVideo = document.getElementById('hero-video');
  const heroPlayButton = document.querySelector('.hero-video-play');

  if (heroVideo && heroPlayButton) {
    // Start with native controls hidden, overlay visible
    heroVideo.controls = false;

    heroPlayButton.addEventListener('click', function () {
      // On user click: show controls + enable sound
      heroVideo.controls = true;
      heroVideo.muted = false;

      if (heroVideo.paused) {
        heroVideo.play().catch(function () {
          // If browser blocks play, do nothing
        });
      } else {
        heroVideo.pause();
      }
    });

    // Hide overlay button when playing, show when paused/ended
    heroVideo.addEventListener('play', function () {
      heroPlayButton.style.display = 'none';
    });

    heroVideo.addEventListener('pause', function () {
      heroPlayButton.style.display = 'flex';
    });

    heroVideo.addEventListener('ended', function () {
      heroPlayButton.style.display = 'flex';
    });
  }
});