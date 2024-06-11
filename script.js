document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init('JURXlnQr4uc8icHVa'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

    document.getElementById('messageForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect the form data
        var userName = document.getElementById('userName').value;
        var userMessage = document.getElementById('userMessage').value;

        // Prepare the email parameters
        var templateParams = {
            to_name: 'Ghost',  // Replace with the recipient's name
            from_name: userName,
            message: userMessage,
            reply_to: 'herocraft11790@gmail.com' // Replace with your email
        };

        // Send the email
        emailjs.send('service_ghost', 'template_mhlfw2v', templateParams)
            .then(function(response) {
                alert('Message sent successfully!');
                document.getElementById('messageForm').reset();
            }, function(error) {
                alert('Failed to send the message. Please try again.');
            });
    });
});
