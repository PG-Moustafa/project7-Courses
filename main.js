
function showCourse(courseId) {

    const courses = document.querySelectorAll('.course');
    courses.forEach(course => course.style.display = 'none');

    if (courseId === 'full-stack') {
        document.querySelector('.course1').style.display = 'block';
    } else if (courseId === 'back-end') {
        document.querySelector('.course2').style.display = 'block';
    } else if (courseId === 'front-end') {
        document.querySelector('.course3').style.display = 'block';
    }
}

document.querySelectorAll('button[id="courseId"]').forEach(button => {
    button.addEventListener('click', function () {
        showCourse(this.value);
    });
});