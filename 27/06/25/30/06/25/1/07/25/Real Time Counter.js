const textarea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxChars = 50;

textarea.addEventListener("input", () => {
  let text = textarea.value;

  // Prevent typing more than 50 characters
  if (text.length > maxChars) {
    text = text.slice(0, maxChars);
    textarea.value = text;
  }

  const count = text.length;

  // Update count display
  charCount.textContent = `Character Count: ${count}/${maxChars}`;

  // Change color if at limit
  if (count === maxChars) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});
