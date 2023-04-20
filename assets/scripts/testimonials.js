const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    event.preventDefault();
    const hiddenText = button.previousElementSibling;
    hiddenText.classList.toggle('hidden-text');
    button.textContent = hiddenText.classList.contains('hidden-text') ? 'Read More' : 'Read Less';
  });
});