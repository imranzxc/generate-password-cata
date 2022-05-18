function generatePassword(length, difficult, passcount) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols =
    "!#$%&()*+,-./:;<=>?@[]^_{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let arr = []
  
for(let i = 0; i < (!passcount ? 1 : passcount) ; i++){
  let newPassword = "";
  for (let i = 0; i < length; i++) {
    if (difficult === "easy") {
      newPassword += alphabet[Math.round(Math.random() * alphabet.length)];
    } else if (difficult === "medium") {
      newPassword += digits[Math.round(Math.random() * digits.length)];
    } else if (difficult === "hard") {
      newPassword += symbols[Math.round(Math.random() * symbols.length)];
    }
  }
  arr.push(newPassword)
  newPassword = ''
}
  if(!passcount){
    return arr.join('')
  }
  return arr
}

