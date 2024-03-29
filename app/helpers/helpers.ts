

export function getFormattedDate(date: Date): string {
  return date.toISOString();
}

export function authStringValidator(email: string, password:string){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const emailValid = emailRegex.test(email);
    const passwordValid = passwordRegex.test(password);

    return emailValid && passwordValid;
}