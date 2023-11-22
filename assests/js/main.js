console.log('JavaScript is running!');
document.addEventListener('DOMContentLoaded', function () {
  const currentHour = new Date().getHours();
  const welcomeMessage = document.getElementById('welcome-message');
  const loaderWrapper = document.querySelector('.loader-wrapper');

  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  welcomeMessage.textContent = `${greeting}`;

  window.addEventListener('load', function () {
    loaderWrapper.style.display = 'none';
  });
});
