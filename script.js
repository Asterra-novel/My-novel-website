const openButton = document.getElementById('openBook');
const closeButton = document.getElementById('closeBook');
const insideBook = document.getElementById('insideBook');

if (openButton && insideBook) {
  openButton.addEventListener('click', () => {
    insideBook.hidden = false;
    document.body.style.overflow = 'hidden';
    closeButton?.focus();
  });
}
if (closeButton && insideBook) {
  closeButton.addEventListener('click', () => {
    insideBook.hidden = true;
    document.body.style.overflow = '';
    openButton?.focus();
  });
}
if (insideBook) {
  insideBook.addEventListener('click', (event) => {
    if (event.target === insideBook) {
      insideBook.hidden = true;
      document.body.style.overflow = '';
      openButton?.focus();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !insideBook.hidden) {
      insideBook.hidden = true;
      document.body.style.overflow = '';
      openButton?.focus();
    }
  });
}
