// Array of five students
const students = [
    { firstName: "John", lastName: "Smith", score: 85 },
    { firstName: "Mary", lastName: "James", score: 72 },
    { firstName: "David", lastName: "Brown", score: 90 },
    { firstName: "Grace", lastName: "Wilson", score: 65 },
    { firstName: "Peter", lastName: "Johnson", score: 48 }
];

// 1. forEach() 
students.forEach((student) => {
    console.log(student.firstName + " " + student.lastName + ": " + student.score);
});

// 2. map()
const studentDetails = students.map((student) => {
    return {
        fullName: student.firstName + " " + student.lastName,
        score: student.score
    };
});

// 3. Display the new array
console.log(studentDetails);
