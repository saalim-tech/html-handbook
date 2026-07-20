/* ===========================================
   HTML Learning Engine
   Part 1
===========================================*/

/* ---------- Elements ---------- */

const lessonTitle = document.getElementById("lesson-title");

const lessonContent = document.getElementById("lesson-content");

const exerciseContent = document.getElementById("exercise-content");

const answerContent = document.getElementById("answer-content");

const answerButton = document.getElementById("answer-btn");

const searchBox = document.getElementById("search");

const editor = document.getElementById("editor");

const lessonButtons = document.querySelectorAll("aside button");


/* ---------- Variables ---------- */

let currentLesson = null;


/* ===========================================
   Load Lesson
===========================================*/

function loadLesson(id) {

    if (!lessons[id]) {

        lessonTitle.textContent = "Lesson Not Found";

        lessonContent.innerHTML =
            "<p>This lesson has not been created yet.</p>";

        exerciseContent.innerHTML = "";

        answerContent.innerHTML = "";

        answerContent.hidden = true;

        answerButton.textContent = "Show Answer";

        currentLesson = null;

        return;
    }

    currentLesson = lessons[id];

    lessonTitle.textContent = currentLesson.title;

    lessonContent.innerHTML = currentLesson.content;

    exerciseContent.innerHTML = currentLesson.exercise;

    answerContent.innerHTML = currentLesson.answer;

    answerContent.hidden = true;

    answerButton.textContent = "Show Answer";

    highlightButton(id);

    editor.value = "";
}


/* ===========================================
   Highlight Active Button
===========================================*/

function highlightButton(id) {

    lessonButtons.forEach(button => {

        button.classList.remove("active-lesson");

        if (button.dataset.lesson === id) {

            button.classList.add("active-lesson");

        }

    });

}


/* ===========================================
   Show / Hide Answer
===========================================*/

function toggleAnswer() {

    if (answerContent.hidden) {

        answerContent.hidden = false;

        answerButton.textContent = "Hide Answer";

    }

    else {

        answerContent.hidden = true;

        answerButton.textContent = "Show Answer";

    }

}


/* ===========================================
   Button Click Events
===========================================*/

lessonButtons.forEach(button => {

    button.addEventListener("click", () => {

        loadLesson(button.dataset.lesson);

    });

});


/* ===========================================
   Answer Button Event
===========================================*/

answerButton.addEventListener("click", toggleAnswer);
/* ===========================================
   Search Lessons
===========================================*/

function searchLessons() {

    const searchText = searchBox.value.toLowerCase().trim();

    lessonButtons.forEach(button => {

        const lessonName = button.textContent.toLowerCase();

        if (lessonName.includes(searchText)) {

            button.style.display = "block";

        } else {

            button.style.display = "none";

        }

    });

}


/* ===========================================
   Search Event
===========================================*/

searchBox.addEventListener("input", searchLessons);


/* ===========================================
   Load Default Lesson
===========================================*/

window.addEventListener("DOMContentLoaded", () => {

    loadLesson("browser");

});


/* ===========================================
   Keyboard Shortcut
===========================================*/

searchBox.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchBox.value = "";

        searchLessons();

    }

});


/* ===========================================
   Console Message
===========================================*/

console.log("HTML Learning Engine Loaded Successfully");