function pyramid(patternChar, numRows, isInverted) {
  let lines = [];

  for (let i = 0; i < numRows; i++) {
    let spacesCount, charsCount;

    if (!isInverted) {
      spacesCount = numRows - i - 1;
      charsCount = 1 + i * 2;
    } else {
      spacesCount = i;
      charsCount = 1 + (numRows - i - 1) * 2;
    }

    let spaces = " ".repeat(spacesCount);
    let chars = patternChar.repeat(charsCount);

    lines.push(spaces + chars);
  }

  return "\n" + lines.join("\n") + "\n";
}
