document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var dob = new Date(document.getElementById('dob').value);
    var college = document.getElementById('college').value;
    var totalScore = calculateTotalScore(dob);
    var percentage = calculatePercentage(totalScore);
    displayResults(name, college, totalScore, percentage);
});

function calculateTotalScore(dob) {
    // Logic to calculate total score based on date of birth
    // This is just a placeholder, replace it with your actual logic
    var randomScore = Math.floor(Math.random() * (410 - 250 + 1)) + 250;
    return randomScore;
}

function calculatePercentage(totalScore) {
    // Logic to calculate percentage based on total score
    // This is just a placeholder, replace it with your actual logic
    var percentage = ((totalScore - 250) / (410 - 250)) * 100;
    return Math.round(percentage * 100) / 100;
}

function displayResults(name, college, totalScore, percentage) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>توقع مجموع الثانوية العامة لـ ${name}:</h2>
                            <p>الكلية الموصى بها: ${college}</p>
                            <p>المجموع المتوقع: ${totalScore}</p>
                            <p>النسبة المئوية: ${percentage}%</p>
                            <p>هنيئًا لك! وفقًا لتقديراتنا، ستنجح بكل تأكيد!</p>`;
}
function displayResults(name, college, totalScore, percentage) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>توقع مجموع الثانوية العامة لـ ${name}:</h2>
                            <p>الكلية الموصى بها: ${college}</p>
                            <p>المجموع المتوقع: ${totalScore}</p>
                            <p>النسبة المئوية: ${percentage}%</p>
                            <p>هنيئًا لك! وفقًا لتقديراتنا، ستنجح بكل تأكيد!</p>
                            <p>مع تحيات التركي جو</p>`;
}
