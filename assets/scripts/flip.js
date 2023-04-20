const flipImage = document.getElementById('flip');

flipImage.addEventListener('click', function() {
  const flipContainer = document.querySelector('.flip-container');
  flipContainer.classList.toggle('flipped');
});

