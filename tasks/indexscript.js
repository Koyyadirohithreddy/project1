document.addEventListener("DOMContentLoaded", function () {
    window.calculateGrade = function () {
        let score = document.getElementById("score").value;
        let resultText = "";

        if (score === "" || isNaN(score) || score < 0 || score > 100) {
            resultText = "Please enter a valid score between 0 and 100.";
        } else {
            score = Number(score);
            if (score >= 90) {
                resultText = "Your grade is: A";
            } else if (score >= 80) {
                resultText = "Your grade is: B";
            } else if (score >= 70) {
                resultText = "Your grade is: C";
            } else if (score >= 60) {
                resultText = "Your grade is: D";
            } else {
                resultText = "Your grade is: F";
            }
        }

        document.getElementById("result").innerText = resultText;
    };
});
