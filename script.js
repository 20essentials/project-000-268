document.addEventListener('click', e => {
  if (e.target.matches('*')) {
    document.querySelector('.container').classList.toggle('pause');
  }
});
