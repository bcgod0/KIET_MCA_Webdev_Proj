// Validate Name (only alphabets + spaces)
const isValidName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
};

// Validate Email Format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Show Error Message
const displayError = (inputEl, message) => {
    const errorSpan = inputEl.nextElementSibling;

    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.textContent = message;
        inputEl.classList.add('border-red-500');
        inputEl.classList.remove('border-gray-300');
    }
};

// Clear Error Message
const clearError = (inputEl) => {
    const errorSpan = inputEl.nextElementSibling;

    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.textContent = '';
        inputEl.classList.remove('border-red-500');
        inputEl.classList.add('border-gray-300');
    }
};

// Main Form Validation
export const validateForm = (form) => {
    let isValid = true;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageTextarea = form.querySelector('#message');

    // Clear old errors
    const fields = [nameInput, emailInput, messageTextarea];
    fields.forEach(field => clearError(field));

    // Name Validation
    if (!nameInput.value.trim()) {
        displayError(nameInput, 'Name is required.');
        isValid = false;
    } else if (!isValidName(nameInput.value.trim())) {
        displayError(nameInput, 'Name must contain only alphabets.');
        isValid = false;
    }

    // Email Validation
    if (!emailInput.value.trim()) {
        displayError(emailInput, 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        displayError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // Message Validation
    if (!messageTextarea.value.trim()) {
        displayError(messageTextarea, 'Message is required.');
        isValid = false;
    }

    return isValid;
};