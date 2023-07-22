function showBackgroundImage(area) {
  const backgroundImageContainer = document.getElementById('background-image-container');
  const backgroundImage = area.getAttribute('data-background-image');
  backgroundImageContainer.style.backgroundImage = `url('${backgroundImage}')`;
  backgroundImageContainer.style.display = 'block';
}

function hideBackgroundImage() {
  const backgroundImageContainer = document.getElementById('background-image-container');
  backgroundImageContainer.style.display = 'none';
}

function changeBackgroundImage(imagePath) {
  const backgroundImage = document.querySelector('.background-image');
  backgroundImage.style.backgroundImage = `url(${imagePath})`;
}

function resetBackgroundImage() {
  const backgroundImage = document.querySelector('.background-image');
  backgroundImage.style.backgroundImage = '';
}