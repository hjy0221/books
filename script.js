document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery img');
  const popup = document.querySelector('.popup');
  const popupImage = document.querySelector('.popup img');
  const closeBtn = document.querySelector('.close-btn');

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      const fullImage = image.getAttribute('data-full');
      popupImage.src = fullImage;
      popup.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});
