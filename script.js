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

        answerButton.textContent = "👁 Show Answer";

        currentLesson = null;

        return;
    }

    currentLesson = lessons[id];

    lessonTitle.textContent = currentLesson.title;

    lessonContent.innerHTML = currentLesson.content;

    setupCopyButtons();

    exerciseContent.innerHTML = currentLesson.exercise;

    answerContent.innerHTML = currentLesson.answer;

    answerContent.hidden = true;

    answerButton.textContent = "👁 Show Answer";

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

        answerButton.textContent = "🙈 Hide Answer";

    }

    else {

        answerContent.hidden = true;

        answerButton.textContent = "👁 Show Answer";

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

/* ===========================================
   Copy Code Buttons
===========================================*/

function setupCopyButtons() {

    const codeBlocks = document.querySelectorAll("#lesson-content pre");

    codeBlocks.forEach(pre => {

                // Don't create another header if one already exists
        if (
            pre.previousElementSibling &&
            pre.previousElementSibling.classList.contains("code-header")
        ) {
            return;
        }

        const button = document.createElement("button");

        button.innerHTML = "📋 <span>Copy</span>";

        button.className = "copy-btn";

        button.addEventListener("click", () => {

            const code = pre.innerText;

            navigator.clipboard.writeText(code);

            button.innerHTML = "✅ <span>Copied</span>";

            setTimeout(() => {

               button.innerHTML = "📋 <span>Copy</span>";

            }, 2000);

        });

        const header = document.createElement("div");

        header.className = "code-header";

        const title = document.createElement("span");

        title.textContent = `${currentLesson.title} Example`;

        header.appendChild(title);

        header.appendChild(button);

        pre.parentNode.insertBefore(header, pre);

    });

}
/* ===========================================
   Random HTML Tip
===========================================*/

const tips = [

"💡 Always use semantic HTML whenever possible.",

"💡 Use only one <h1> on a webpage.",

"💡 Every image should have an alt attribute.",

"💡 Indent your HTML code to keep it readable.",

"💡 Comments help developers understand code.",

"💡 Use lowercase tag names for better consistency.",

"💡 Validate your HTML to avoid hidden errors.",

"💡 Keep your HTML structure clean before adding CSS."

];

const tipBox = document.getElementById("daily-tip");

tipBox.textContent = tips[Math.floor(Math.random()*tips.length)];
/* ===========================================
   Reading Progress
===========================================*/

const progressBar = document.getElementById("progress-bar");

const content = document.getElementById("content");

content.addEventListener("scroll", () => {

    const scrollTop = content.scrollTop;

    const height = content.scrollHeight - content.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

console.log("HTML Learning Engine Loaded Successfully");
