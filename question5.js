// 1. Function to calculate the average of three scores
function calculateAverage(score1, score2, score3) {
    let average = (score1 + score2 + score3) / 3;
    return average;
}

// Display the returned average outside the function
let average = calculateAverage(60, 70, 80);
console.log("Average:", average);


// 2. Function to determine the grade
function getGrade(average) {
    if (average >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Test the getGrade function
console.log("Grade:", getGrade(average));

// Test with another average
let average2 = calculateAverage(30, 40, 45);
console.log("Average:", average2);
console.log("Grade:", getGrade(average2));
