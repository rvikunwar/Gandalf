import moment from "moment";

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


//timestamp - Feb 27th 2023
export function formattingTimestamp(timestamp: string){
    return moment(timestamp).format('MMM Do YYYY');
}


//for fetching name acroynm
export function acronymName(str: string){
    const regular_ex=/\b(\w)/g;
    const matches = str.match(regular_ex);
    let acronym: string = "";
    if(matches){
        acronym = matches.join('');
    }
    return acronym?.toLocaleUpperCase();
}


//fetching random color based on letters
export function fetchRandomColor(initials: string){

    // Generate a random color based on the initials
    const charCode = initials.charCodeAt(0);
    let charCodev1: number = 0;
    initials.length > 1 ? charCodev1 = initials.charCodeAt(1): null
    const red = ((charCode+charCodev1) * 7) % 256;
    const green = ((charCode+charCodev1) * 13) % 256;
    const blue = ((charCode+charCodev1) * 23) % 256;
    const color = `rgb(${red}, ${green}, ${blue})`;

    // Avoid white color and return random color
    return color === '#ffffff' ? '#cccccc' : color;
}