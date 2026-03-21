document.addEventListener('DOMContentLoaded', () => {
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <img class="lightbox-img" src="" alt="">
  `;
  document.body.appendChild(lb);

  const img = lb.querySelector('.lightbox-img');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.cs-img-contained').forEach(el => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => open(el.src, el.alt));
  });

  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  lb.querySelector('.lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
});
