// Passes 1 to caesar_cypher() for direction of shift to be forwards
function encrypt() {
  caesar_cypher(1);
}

// Passes -1 to caesar_cypher() for direction of shift to be backwards
function decrypt() {
  caesar_cypher(-1);
}

// Encrypts or decrypts message by shifting letters by a given shift
function caesar_cypher(direction) {
  // Get text, shift variables
  direction = parseInt(direction);
  var cypher_text = document.getElementById("cypher_text").value;
  var cypher_shift = (parseInt(document.getElementById("cypher_shift").value)) % 26;
  // Create empty new_text and code variables
  var new_text = "";
  var code;

  // For each character in the given text, add an encrypted/decrypted
  // character to new text
  for (var i = 0; i < cypher_text.length; i++) {
    // Get ASCII code of character
    code = cypher_text.charCodeAt(i);
    // Lower-case letters:
    if (code >= 97 && code <= 122)
      // 97 is where lower-case characters start in the ASCII table
      // 26 letters in the alphabet
      // 97%26=19, which is why (code - 19) is used
      new_text += String.fromCharCode((code - 19 + (direction * cypher_shift)) % 26 + 97);
    // Upper-case letters:
    else if (code >= 65 && code <= 90)
      // 65 is where lower-case characters start in the ASCII table
      // 26 letters in the alphabet
      // 65%26=13, which is why (code - 19) is used
      new_text += String.fromCharCode((code - 13 + (direction * cypher_shift)) % 26 + 65);
    // Other characters are simply added as they are to the new text.
    else {
      new_text += cypher_text.charAt(i);
    }
  }
  document.getElementById("cypher_result").innerHTML = new_text;
}
