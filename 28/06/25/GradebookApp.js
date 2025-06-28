function getAverage(scores) {
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(scores, studentScore) {
  const avg = getAverage(scores);
  const avgFixed = avg.toFixed(3).replace(/0+$/,"").replace(/\.$/,""); // Remove trailing zeros
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  const passText = passed ? "You passed the course." : "You failed the course.";

  return `Class average: ${avgFixed}. Your grade: ${grade}. ${passText}`;
}
