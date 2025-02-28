document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const popup = document.getElementById("customPopup");
    const popupMessage = document.getElementById("popupMessage");
    const closeBtn = document.querySelector(".close");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                popupMessage.textContent = "Booking submitted successfully!";
                popup.style.display = "flex"; // Ensure popup appears
                form.reset();
            } else {
                popupMessage.textContent = "Something went wrong. Please try again.";
                popup.style.display = "flex"; // Ensure popup appears
            }
        }).catch(error => {
            popupMessage.textContent = "Error submitting form. Please check your connection.";
            popup.style.display = "flex"; // Ensure popup appears
        });
    });
    
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none"; // Close the popup
    });
    
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none"; // Close popup if click outside
        }
    });
});

