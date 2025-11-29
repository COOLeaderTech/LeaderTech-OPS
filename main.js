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

  // --- Hero video minimal custom controls ---
  const heroVideo = document.getElementById('hero-video');
  const heroOverlayPlay = document.querySelector('.hero-video-play');
  const heroControlPlay = document.querySelector('.hero-control-play');
  const heroProgress = document.querySelector('.hero-control-progress');
  const heroFullscreen = document.querySelector('.hero-control-fullscreen');

  if (heroVideo) {
    // Toggle play / pause
    function togglePlay() {
      if (heroVideo.paused || heroVideo.ended) {
        heroVideo.play().catch(function () {
          // If browser blocks play, do nothing
        });
      } else {
        heroVideo.pause();
      }
    }

    // Overlay big play button
    if (heroOverlayPlay) {
      heroOverlayPlay.addEventListener('click', function () {
        togglePlay();
      });
    }

    // Small play button in control bar
    if (heroControlPlay) {
      heroControlPlay.addEventListener('click', function () {
        togglePlay();
      });
    }

    // Update UI when playing / paused / ended
    heroVideo.addEventListener('play', function () {
      if (heroOverlayPlay) {
        heroOverlayPlay.style.display = 'none';
      }
    });

    heroVideo.addEventListener('pause', function () {
      if (heroOverlayPlay) {
        heroOverlayPlay.style.display = 'flex';
      }
    });

    heroVideo.addEventListener('ended', function () {
      if (heroOverlayPlay) {
        heroOverlayPlay.style.display = 'flex';
      }
      if (heroProgress) {
        heroProgress.value = 0;
      }
    });

    // Progress bar: reflect current time
    if (heroProgress) {
      heroVideo.addEventListener('timeupdate', function () {
        if (!heroVideo.duration || isNaN(heroVideo.duration)) return;
        const percent = (heroVideo.currentTime / heroVideo.duration) * 100;
        heroProgress.value = percent;
      });

      // Scrub / swipe to seek
      heroProgress.addEventListener('input', function () {
        if (!heroVideo.duration || isNaN(heroVideo.duration)) return;
        const value = parseFloat(heroProgress.value) || 0;
        heroVideo.currentTime = heroVideo.duration * (value / 100);
      });
    }

    // Fullscreen toggle
    if (heroFullscreen) {
      heroFullscreen.addEventListener('click', function () {
        const elem = heroVideo;

        const isFullscreen =
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement;

        if (!isFullscreen) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      });
    }
  }
});