let name = document.getElementById('name');
let age = document.getElementById('age');
let course = document.getElementById('course');
let grade = document.getElementById('grade');

let btn = document.getElementById('btn');
let container = document.getElementById('students-container');

let students = [];

function addStudent() {

    if (
        name.value.trim() === '' ||
        age.value.trim() === '' ||
        course.value.trim() === '' ||
        grade.value.trim() === ''
    ) {
        alert('Please fill all inputs');
        return;
    }

    if (grade.value < 0 || grade.value > 100) {
        alert('Grade must be between 0 and 100');
        return;
    }

    let student = {
        name: name.value,
        age: age.value,
        course: course.value,
        grade: grade.value,
        status: grade.value >= 50 ? 'Passed' : 'Failed'
    };

    students.push(student);

    container.innerHTML += `
        <div class="card">
            <p>Student Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>Course: ${student.course}</p>
            <p>Grade: ${student.grade}</p>
            <p>Status: ${student.status}</p>
        </div>
    `;

    name.value = '';
    age.value = '';
    course.value = '';
    grade.value = '';
}

btn.onclick = addStudent;