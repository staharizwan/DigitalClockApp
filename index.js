let region = 'cet';
function updateClock() {
  
  const now = new Date();
  let hours = now.getHours();

  switch(region){
     case 'pakistan':
      hours = (hours + 3) % 24;
      break;

     case 'usa':
      hours = (hours - 6 + 24) % 24;
      break;

     case 'ksa':
      hours = (hours + 1) % 24;
      break;

     case 'gmt':
      hours = (hours - 2 + 24) % 24;
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

/*
document.getElementById("button-container").addEventListener("click", function(){
  let selectedRegion = document.getElementById("button-container").value
  document.getElementById("region-selected").innerText = selectedRegion
})
*/

// Get the parent div containing all buttons

var buttonContainer = document.getElementById('button-container');

// Add click event listener to the parent div
buttonContainer.addEventListener('click', function(event) {
    // Check if the clicked element is a button
    if (event.target && event.target.nodeName === 'BUTTON') {
        // Get the text of the clicked button
        var buttonText = event.target.innerText;
        
        // Display the selected button text
        document.getElementById('region-selected').innerText = buttonText;
    }
});



updateClock();
setInterval(updateClock, 1000);
