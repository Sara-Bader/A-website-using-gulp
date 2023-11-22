
document.addEventListener('DOMContentLoaded', function () {
  
    const currentHour = new Date().getHours();
  
    const welcomeMessage = document.getElementById('welcome-message');
  

    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
  
    welcomeMessage.textContent = `${greeting}`;
  });
  