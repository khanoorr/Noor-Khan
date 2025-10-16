document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Show success message
      document.querySelector(".form__reply").style.display = "block";
      form.reset();
      
      // Optional: Scroll to success message
      document.querySelector(".form__reply").scrollIntoView({ behavior: 'smooth' });
    } else {
      alert("Failed to send message. Please try again.");
    }
  })
  .catch(error => {
    alert("There was an error sending your message.");
    console.error(error);
  });
});