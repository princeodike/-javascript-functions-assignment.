// Create an array of five students
const students = [
    { firstName: "John", lastName: "Smith", score: 85, location: "Port Harcourt" },
    { firstName: "Mary", lastName: "James", score: 65, location: "Lagos" },
    { firstName: "David", lastName: "Brown", score: 90, location: "Port Harcourt" },
    { firstName: "Grace", lastName: "Wilson", score: 72, location: "Abuja" },
    { firstName: "Peter", lastName: "Johnson", score: 55, location: "Port Harcourt" }
];

// 1. Students who scored 70 or above
const highScores = students.filter((student) => {
    return student.score >= 70;
});

console.log("Students who scored 70 or above:");
highScores.forEach((student) => {
    console.log(`${student.firstName} ${student.lastName} - ${student.score}`);
});

// 2. Students who live in Port Harcourt
const portHarcourtStudents = students.filter((student) => {
    return student.location === "Port Harcourt";
});

console.log("Students living in Port Harcourt:");
portHarcourtStudents.forEach((student) => {
    console.log(`${student.firstName} ${student.lastName} - ${student.location}`);
});

// 3. Students whose first name is David
const davidStudents = students.filter((student) => {
    return student.firstName === "David";
});

console.log("Students whose first name is David:");
davidStudents.forEach((student) => {
    console.log(`${student.firstName} ${student.lastName}`);
});
