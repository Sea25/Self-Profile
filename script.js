// Contact Form Submission Handler
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Stop the default form submission

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const message = form.message.value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Example placeholder logic
        console.log("Form Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Message:", message);

        // Clear form
        form.reset();

        // Feedback to user
        alert("Thank you for reaching out! I’ll get back to you soon.");
    });
});
