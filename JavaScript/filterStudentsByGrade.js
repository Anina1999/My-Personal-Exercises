function filterStudentsByGrade(objectArr) {
    let gradeCategorieObject = {};

    for (let person of objectArr) {
        let gradeArr = person.grades;
        let sumOfGrades = gradeArr.reduce((a, b) => a + b, 0);
        let average = sumOfGrades / gradeArr.length;

        let category = '';
        if (average >= 5.50) {
            category = 'Excellent';
        } else if (average >= 4.50) {
            category = 'VeryGood';
        } else if (average >= 3.00) {
            category = 'Average';
        } else {
            category = 'Fail';
        }

        if (!gradeCategorieObject[category]) {
            gradeCategorieObject[category] = [];
        }

        gradeCategorieObject[category].push(person.name);
    }

    console.log(gradeCategorieObject);
}

//filterStudentsByGrade([
//  { name: "Maria", grades: [5.00, 5.50, 6.00] },
//  { name: "Ivan", grades: [4.00, 4.20, 4.80] },
//  { name: "Anna", grades: [2.00, 3.00, 2.50] },
//  { name: "Georgi", grades: [5.70, 5.60, 5.90] },
//]);
