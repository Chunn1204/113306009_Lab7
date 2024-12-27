const mathInput = document.getElementById('mathInput');
const englishInput = document.getElementById('englishInput');
const submitButton = document.getElementById('submitButton');
const gradesTableBody = document.getElementById('gradesTableBody');
const mathColumnAverage = document.getElementById('mathColumnAverage');
const englishColumnAverage = document.getElementById('englishColumnAverage');
const overallAverage = document.getElementById('overallAverage');

let grades = [];

function calculateAverages() {
    let mathTotal = 0, englishTotal = 0, overallTotal = 0;
    grades.forEach(row => {
        mathTotal += row.math;
        englishTotal += row.english;
        overallTotal += row.average;
    });

    const rowCount = grades.length;
    mathColumnAverage.textContent = (mathTotal / rowCount).toFixed(2);
    englishColumnAverage.textContent = (englishTotal / rowCount).toFixed(2);
    overallAverage.textContent = (overallTotal / rowCount).toFixed(2);
    }

function addRow(math, english) {
    const average = (math + english) / 2;
    grades.push({ math, english, average });

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${grades.length}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${average.toFixed(2)}</td>
    `;
    gradesTableBody.appendChild(newRow);

    calculateAverages();
}

submitButton.addEventListener('click', () => {
    const mathValue = parseFloat(mathInput.value);
    const englishValue = parseFloat(englishInput.value);

    if (isNaN(mathValue) || isNaN(englishValue)) {
        alert('Please enter valid numbers for both Math and English grades.');
        return;
    }

    addRow(mathValue, englishValue);

    mathInput.value = '';
    englishInput.value = '';
});