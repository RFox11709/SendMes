// Initialize EmailJS
(function() {
    emailjs.init('JURXlnQr4uc8icHVa'); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS
})();

function sendMessage() {
    const userInput = document.getElementById('userInput').value;

    if (userInput) {
        emailjs.send('service_ghost', 'template_mhlfw2v', {
            message: userInput,
        })
        .then((response) => {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            alert('Failed to send the message.');
            console.log('FAILED...', error);
        });
    } else {
        alert('Please type a message before sending.');
    }
}

// Allow sending message with Enter key
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
