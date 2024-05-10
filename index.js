let region = 'cet';
function updateClock() {
  
  const now = new Date();
  let hours = now.getHours();

  switch(region){
     case 'pakistan':
      hours = (hours + 3) % 24;
      break;

     case 'usa':
      hours = (hours - 6) % 24;
      break;

     case 'ksa':
      hours = (hours + 1) % 24;
      break;

     case 'gmt':
      hours = (hours - 2) % 24;
      break;

     case 'cet':
      hours = (hours) % 24;
      break;

     default:
      break;
  }

  hours = hours.toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

document.getElementById("pk").addEventListener("click", function() {
  region = 'pakistan';
  updateClock();
});

document.getElementById("usa").addEventListener("click", function() {
  region = 'usa';
  updateClock();
});

document.getElementById("ksa").addEventListener("click", function() {
  region = 'ksa';
  updateClock();
});

document.getElementById("gmt").addEventListener("click", function() {
  region = 'gmt';
  updateClock();
});

document.getElementById("cet").addEventListener("click", function() {
  region = 'cet';
  updateClock();
});

updateClock();
setInterval(updateClock, 1000);
