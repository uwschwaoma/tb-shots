document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      showPopup('Thank you for your submission! We will get back to you soon.');
      this.reset();
    } else {
      showPopup('Oops! There was a problem submitting your form.');
    }
  }).catch(error => {
    showPopup('Oops! There was a problem submitting your form.');
  });
});

function showPopup(message) {
  document.getElementById('popupMessage').textContent = message;
  document.getElementById('customPopup').style.display = 'block';
}

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('customPopup').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('customPopup')) {
    document.getElementById('customPopup').style.display = 'none';
  }
});
