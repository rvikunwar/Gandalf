//password validation
function validatePassword(password: string): true | string {
  
    // Regular expressions for each password requirement
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasDigit = /\d/;
    const hasSpecialChar = /[!@#$%^&*]/;
  
    // Check if password meets all requirements
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
  
    if (!hasUppercase.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
  
    if (!hasLowercase.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
  
    if (!hasDigit.test(password)) {
        return "Password must contain at least one digit.";
    }
  
    if (!hasSpecialChar.test(password)) {
        return "Password must contain at least one special character (!@#$%^&*).";
    }
    
    return true;
    
}


//email validation
function validateEmail(email: string): boolean {

    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailRegex.test(email);
}

export { validatePassword, validateEmail }