function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length <= 2) {
    return email;
  }

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const masked = "*".repeat(username.length - 2);

  return firstChar + masked + lastChar + domain;
}
let email = "freecodecamp@example.com";
console.log(maskEmail(email));