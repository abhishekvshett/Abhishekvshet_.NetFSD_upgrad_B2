

// Store marks
const marks = [78, 85, 92, 67, 70];

// Calculate total using reduce()
export const calculateTotal = (arr) =>
  arr.reduce((total, mark) => total + mark, 0);

// Calculate average
export const calculateAverage = (arr) => {
  const total = calculateTotal(arr);
  return total / arr.length;
};

// Analyze result
export const analyzeResult = (arr) => {
  const total = calculateTotal(arr);
  const average = calculateAverage(arr);
  const result = average >= 40 ? "PASS" : "FAIL";

  return `
  ===== Student Marks Report =====
  Marks: ${arr.map(mark => mark).join(", ")}
  Total: ${total}
  Average: ${average.toFixed(2)}
  Result: ${result}
  `;
};




console.log(analyzeResult(marks));