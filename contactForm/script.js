document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Basic validation
        if (!validateForm(formData)) {
            showMessage(errorMessage, 'Please fill in all fields correctly.');
            return;
        }

        try {
            // Simulate form submission (you can replace this with actual API call)
            await simulateFormSubmission(formData);
            
            // Show success message
            showMessage(successMessage, 'Message sent successfully!');
            contactForm.reset();
        } catch (error) {
            showMessage(errorMessage, 'Failed to send message. Please try again.');
        }
    });

    function validateForm(data) {
        // Check if all fields are filled
        if (Object.values(data).some(value => value === '')) {
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return false;
        }

        return true;
    }

    function showMessage(element, message) {
        // Hide both messages first
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Show the relevant message
        element.textContent = message;
        element.style.display = 'block';

        // Hide message after 3 seconds
        setTimeout(() => {
            element.style.display = 'none';
        }, 3000);
    }

    async function simulateFormSubmission(data) {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form submitted with data:', data);
                resolve();
            }, 1000);
        });
    }
}); 