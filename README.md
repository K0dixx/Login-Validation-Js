This project demonstrates form validation using JavaScript and Regular Expressions (RegEx). The form includes fields for email and password, which are validated in real time or on form submission.

Email Validation:
The email is validated against a standard pattern to ensure it follows the correct format (e.g., username@example.com). It checks for:

Valid characters before the @

A domain name after the @

A valid top-level domain (e.g., .com, .net, .org)

Regex used:
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

Password Validation:
The password is validated to ensure it meets security standards such as:

Minimum 8 characters

At least one uppercase letter

At least one lowercase letter

At least one digit

At least one special character (like @, #, $, etc.)

Regex used:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

The validation is handled in JavaScript using addEventListener for form submission or input events, and error messages are shown dynamically for invalid inputs.
