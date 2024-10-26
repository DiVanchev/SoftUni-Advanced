function validate() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const companyCheckbox = document.getElementById('company');
    const companyInfoFieldset = document.getElementById('companyInfo');
    const companyNumberInput = document.getElementById('companyNumber');
    const submitButton = document.getElementById('submit');
    const validDiv = document.getElementById('valid');

    const invalidBorder = '2px solid red';

    companyCheckbox.addEventListener('change', () => {
        companyInfoFieldset.style.display = companyCheckbox.checked ? 'block' : 'none';
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        let isValid = true;

        const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
        if (!usernamePattern.test(usernameInput.value)) {
            usernameInput.style.border = invalidBorder;
            isValid = false;
        } else {
            usernameInput.style.border = ''; // Reset to default if valid
        }

        const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.border = invalidBorder;
            isValid = false;
        } else {
            emailInput.style.border = '';
        }

        const passwordPattern = /^\w{5,15}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            passwordInput.style.border = invalidBorder;
            isValid = false;
        } else {
            passwordInput.style.border = '';
        }

        if (
            !passwordPattern.test(confirmPasswordInput.value) ||
            passwordInput.value !== confirmPasswordInput.value
        ) {
            confirmPasswordInput.style.border = invalidBorder;
            isValid = false;
        } else {
            confirmPasswordInput.style.border = '';
        }

        if (companyCheckbox.checked) {
            const companyNumber = Number(companyNumberInput.value);
            if (
                !companyNumberInput.value ||
                companyNumber < 1000 ||
                companyNumber > 9999
            ) {
                companyNumberInput.style.border = invalidBorder;
                isValid = false;
            } else {
                companyNumberInput.style.border = '';
            }
        }

        validDiv.style.display = isValid ? 'block' : 'none';
    });
}
