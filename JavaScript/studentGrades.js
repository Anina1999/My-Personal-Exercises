// including ternary operator and reduce method
function studentGrades(input) {
    let number = Number(input.shift());
    let studentMap = new Map();

    for (let i = 0; i < number; i++) {
        let [student, grade] = input.shift().split('<->');
        grade = Number(grade);
        studentMap.set(student, [grade]);
    }

    let line;
    while ((line = input.shift()) !== 'Results') {
        let [command, data] = line.split(': ');
        let [student, value] = data.split(' - ');
        value = Number(value);

        if (!studentMap.has(student)) {
            console.log("error");
            continue;
        }

        if (command === 'Add') {
            studentMap.get(student).push(value);
        } else if (command === 'Update') {
            studentMap.set(student, [value]);
        } else if (command === 'Reset') {
            studentMap.set(student, []);
        } else {
            console.log("error");
        }
    }

    console.log("Students for the results:");
    for (let [student, grades] of studentMap.entries()) {
        let avg = grades.length > 0
            ? grades.reduce((a, b) => a + b, 0) / grades.length
            : 0;
        let gradesStr = grades.join(', ');
        console.log(`- ${student}; Grades: ${gradesStr}; Average: ${avg.toFixed(2)}`);
    }
}

/*studentGrades([
  "3",
  "Alice<->4.50",
  "Bob<->5.00",
  "Charlie<->3.25",
  "Add: Bob - 4.00",
  "Add: Alice - 5.00",
  "Update: Charlie - 4.00",
  "Reset: Bob",
  "Results"
]);*/
