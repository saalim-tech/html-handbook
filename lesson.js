const lessons = {
browser: {
    title: "Browser",

    content: `
        <h2>🌐 What is a Browser?</h2>

        <p>
            A browser is a software application that opens and displays websites on your computer or mobile device.
        </p>

        <p>
            It reads HTML, CSS, and JavaScript files and shows them as a webpage.
        </p>

        <h3>Popular Browsers</h3>

        <ul>
            <li>Google Chrome</li>
            <li>Microsoft Edge</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Opera</li>
        </ul>

        <p>
            Think of the browser as the road where your website travels to reach users.
        </p>
    `,

    exercise: `
        <p>Name any three web browsers.</p>
    `,

    answer: `
        <ul>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Microsoft Edge</li>
        </ul>
    `,
    quiz: {

    question: "Which software is used to open HTML files?",

    options: [

        "Web Browser",

        "Compiler",

        "Code Editor",

        "Database"

    ],

    answer: 0

}
},

html: {
    title: "What is HTML?",

    content: `
        <h2>📄 What is HTML?</h2>

        <p>
            HTML stands for <strong>HyperText Markup Language</strong>.
        </p>

        <p>
            HTML is the standard language used to create web pages.
        </p>

        <p>
            It provides the structure of a webpage by using elements called tags.
        </p>

        <h3>Car Example</h3>

        <ul>
            <li>HTML → Skeleton (Structure)</li>
            <li>CSS → Paint and Body Design</li>
            <li>JavaScript → Engine and Features</li>
            <li>Browser → Road</li>
        </ul>

        <p>
            Without HTML, a webpage cannot exist.
        </p>
    `,

    exercise: `
        <p>What does HTML stand for?</p>
    `,

    answer: `
    <p><strong>HTML stands for HyperText Markup Language.</strong></p>
`,

quiz: {

    question: "What does HTML stand for?",

    options: [

        "HyperText Markup Language",

        "HighText Machine Language",

        "Hyper Tool Markup Language",

        "Home Tool Markup Language"

    ],

    answer: 0

}
},
uses: {
    title: "Uses of HTML",

    content: `
        <h2>💻 Uses of HTML</h2>

        <p>
            HTML is used to create the structure of websites.
        </p>

        <h3>HTML is used for:</h3>

        <ul>
            <li>Creating web pages</li>
            <li>Adding headings and paragraphs</li>
            <li>Displaying images</li>
            <li>Creating links</li>
            <li>Building forms</li>
            <li>Creating tables and lists</li>
        </ul>

        <p>
            HTML works together with CSS and JavaScript to build modern websites.
        </p>
    `,

    exercise: `
        <p>Write any four uses of HTML.</p>
    `,

    answer: `
        <ul>
            <li>Create web pages</li>
            <li>Add images</li>
            <li>Create links</li>
            <li>Build forms</li>
        </ul>
    `,
    quiz: {

    question: "HTML is mainly used to create?",

    options: [

        "Web Pages",

        "Games",

        "Operating Systems",

        "Databases"

    ],

    answer: 0

}
},
    roadmap: {
    title: "HTML Learning Roadmap",

    content: `
        <h2>🗺️ HTML Learning Roadmap</h2>

        <p>Follow this order while learning HTML:</p>

        <ol>
            <li>Browser</li>
            <li>What is HTML?</li>
            <li>HTML Boilerplate</li>
            <li>Head Tag</li>
            <li>Body Tag</li>
            <li>Headings</li>
            <li>Paragraph</li>
            <li>Text Formatting</li>
            <li>Comments</li>
            <li>Links</li>
            <li>Images</li>
            <li>Lists</li>
            <li>Tables</li>
            <li>Forms</li>
            <li>Semantic Tags</li>
        </ol>

        <p>
            Learn each topic one by one and practice after every lesson.
        </p>
    `,

    exercise: `
        <p>Which topic should you learn after HTML Boilerplate?</p>
    `,

    answer: `
        <p><strong>Head Tag</strong></p>
    `,
    quiz: {

    question: "After learning HTML, what should you learn next?",

    options: [

        "CSS",

        "Python",

        "Java",

        "C"

    ],

    answer: 0

}
},

    boilerplate: {
    title: "HTML Boilerplate",

    content: `
        <h2>📄 HTML Boilerplate</h2>

        <p>
            Every HTML document starts with a basic structure called the <strong>HTML Boilerplate</strong>.
        </p>

        <p>
            It tells the browser that this file is an HTML document and provides the basic layout required for every webpage.
        </p>

        <h3>Basic HTML Boilerplate</h3>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre>

        <p>
            Every HTML webpage begins with this structure before adding any content.
        </p>
    `,

    exercise: `
        <p>Create a new HTML file and write the complete HTML boilerplate.</p>
    `,

    answer: `
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre>
    `,
    quiz: {question: "Which tag contains all the HTML code?",

  options: [

    "&lt;html&gt;",

    "&lt;head&gt;",

    "&lt;body&gt;",

    "&lt;title&gt;"

],

    answer: 0}
},

head: {
    title: "Head Tag",

    content: `
        <h2>🧠 Head Tag</h2>

        <p>
            The <strong>&lt;head&gt;</strong> tag contains information about the webpage that is not directly shown on the screen.
        </p>

        <p>
            It helps the browser understand the page.
        </p>

        <h3>Common elements inside the Head tag</h3>

        <ul>
            <li>&lt;title&gt;</li>
            <li>&lt;meta&gt;</li>
            <li>&lt;link&gt;</li>
            <li>&lt;style&gt;</li>
            <li>&lt;script&gt;</li>
        </ul>

<pre><code>&lt;head&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
</code></pre>

        <p>
            Everything inside the Head tag helps the browser but is usually not visible on the webpage.
        </p>
    `,

    exercise: `
        <p>Which tag is used to change the name shown on the browser tab?</p>
    `,

    answer: `
        <p><strong>&lt;title&gt;</strong> tag.</p>
    `,
    quiz: {

    question: "Which tag stores metadata like the page title and CSS links?",

    options: [

        "&lt;body&gt;",

        "&lt;meta",

        "&lt;head",
        
        "&lt;header",

    ],

    answer: 2

}
},

body: {
    title: "Body Tag",

    content: `
        <h2>🖥️ Body Tag</h2>

        <p>
            The <strong>&lt;body&gt;</strong> tag contains everything that the user can see on the webpage.
        </p>

        <p>
            Text, images, buttons, links, tables and forms are all placed inside the Body tag.
        </p>

<pre><code>&lt;body&gt;

    &lt;h1&gt;Welcome&lt;/h1&gt;

    &lt;p&gt;This is my first webpage.&lt;/p&gt;

&lt;/body&gt;
</code></pre>

        <h3>Examples of elements inside Body</h3>

        <ul>
            <li>Headings</li>
            <li>Paragraphs</li>
            <li>Images</li>
            <li>Lists</li>
            <li>Tables</li>
            <li>Forms</li>
        </ul>

        <p>
            Everything visible on the webpage is usually placed inside the Body tag.
        </p>
    `,

    exercise: `
        <p>Where should visible webpage content be written?</p>
    `,

    answer: `
        <p>Inside the <strong>&lt;body&gt;</strong> tag.</p>
    `,
    quiz: {

    question: "Which tag contains the visible content of a webpage?",

    options: [

        "&lt;head>",

        "&lt;body>",

        "&lt;html>",

        "&lt;main>",

    ],

    answer: 1

}
},

headings: {
    title: "Headings",

    content: `
        <h2>📝 HTML Headings</h2>

        <p>
            HTML provides six heading tags, from <strong>&lt;h1&gt;</strong> to <strong>&lt;h6&gt;</strong>.
        </p>

        <p>
            <strong>&lt;h1&gt;</strong> is the largest and most important heading, while <strong>&lt;h6&gt;</strong> is the smallest.
        </p>

<pre><code>&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Sub Heading&lt;/h2&gt;
&lt;h3&gt;Section Heading&lt;/h3&gt;
&lt;h4&gt;Small Heading&lt;/h4&gt;
&lt;h5&gt;Smaller Heading&lt;/h5&gt;
&lt;h6&gt;Smallest Heading&lt;/h6&gt;
</code></pre>

        <p>
            Use only one <strong>&lt;h1&gt;</strong> on a webpage for the main title.
        </p>
    `,

    exercise: `
        <p>Create all six heading tags from h1 to h6.</p>
    `,

    answer: `
<pre><code>&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;
&lt;h4&gt;Heading 4&lt;/h4&gt;
&lt;h5&gt;Heading 5&lt;/h5&gt;
&lt;h6&gt;Heading 6&lt;/h6&gt;
</code></pre>
    `,
    quiz: {

    question: "Which is the largest heading tag in HTML?",

    options: [

        "&lt;h6>",

        "&lt;heading>",

        "&lt;h1>",

        "&lt;head>",

    ],

    answer: 2

}
},

 paragraph: {
    title: "Paragraph",

    content: `
        <h2>📄 Paragraph Tag</h2>

        <p>
            The <strong>&lt;p&gt;</strong> tag is used to write paragraphs on a webpage.
        </p>

        <p>
            Browsers automatically add space before and after every paragraph.
        </p>

<pre><code>&lt;p&gt;This is my first paragraph.&lt;/p&gt;

&lt;p&gt;This is another paragraph.&lt;/p&gt;
</code></pre>

        <p>
            Paragraphs make your content easy to read.
        </p>
    `,

    exercise: `
        <p>Create two paragraphs about yourself.</p>
    `,

    answer: `
<pre><code>&lt;p&gt;My name is Alex.&lt;/p&gt;

&lt;p&gt;I am learning HTML.&lt;/p&gt;
</code></pre>
    `,
    quiz: {

    question: "Which HTML tag is used to create a paragraph?",

    options: [

        "&lt;text>",

        "&lt;paragraph>",

        "&lt;p>",

        "&lt;para>",

    ],

    answer: 2

}
},

formatting: {
    title: "Text Formatting",

    content: `
        <h2>✨ Text Formatting</h2>

        <p>
            HTML provides tags to make text bold, italic, highlighted and more.
        </p>

        <table>
            <tr>
                <th>Tag</th>
                <th>Purpose</th>
            </tr>

            <tr>
                <td>&lt;b&gt;</td>
                <td>Bold Text</td>
            </tr>

            <tr>
                <td>&lt;i&gt;</td>
                <td>Italic Text</td>
            </tr>

            <tr>
                <td>&lt;u&gt;</td>
                <td>Underline</td>
            </tr>

            <tr>
                <td>&lt;mark&gt;</td>
                <td>Highlight</td>
            </tr>

            <tr>
                <td>&lt;small&gt;</td>
                <td>Small Text</td>
            </tr>

            <tr>
                <td>&lt;del&gt;</td>
                <td>Deleted Text</td>
            </tr>
        </table>

<pre><code>&lt;b&gt;Bold&lt;/b&gt;
&lt;i&gt;Italic&lt;/i&gt;
&lt;u&gt;Underline&lt;/u&gt;
&lt;mark&gt;Highlight&lt;/mark&gt;
</code></pre>
    `,

    exercise: `
        <p>Write your name using Bold, Italic and Underline tags.</p>
    `,

    answer: `
<pre><code>&lt;b&gt;John&lt;/b&gt;
&lt;i&gt;John&lt;/i&gt;
&lt;u&gt;John&lt;/u&gt;
</code></pre>
    `,
    quiz: {

    question: "Which tag makes text bold with semantic importance?",

    options: [

        "&lt;b>",

        "&lt;strong>",

        "&lt;bold>",

        "&lt;em>"

    ],

    answer: 1

}
},

comments: {
    title: "Comments",

    content: `
        <h2>💬 HTML Comments</h2>

        <p>
            Comments are notes written inside HTML code.
        </p>

        <p>
            Browsers ignore comments, so they are not shown on the webpage.
        </p>

        <p>
            Comments help developers understand and organize their code.
        </p>

<pre><code>&lt;!-- This is a comment --&gt;
</code></pre>

        <p>
            You can use comments to explain your code or temporarily hide parts of it.
        </p>
    `,

    exercise: `
        <p>Create one HTML comment.</p>
    `,

    answer: `
<pre><code>&lt;!-- This is my first HTML comment --&gt;
</code></pre>
    `,
    quiz: {

    question: "Which syntax is used to write an HTML comment?",

    options: [

        "// Comment",

        "/* Comment */",

        "&lt;!-- Comment -->",

        "# Comment"

    ],

    answer: 2

}
},

anchor: {
    title: "Anchor Tag",

    content: `
        <h2>🔗 Anchor Tag</h2>

        <p>
            The <strong>&lt;a&gt;</strong> tag is used to create hyperlinks in HTML.
        </p>

        <p>
            Hyperlinks allow users to move from one webpage to another by clicking on text or images.
        </p>

        <h3>Syntax</h3>

<pre><code>&lt;a href="https://www.google.com"&gt;
    Visit Google
&lt;/a&gt;
</code></pre>

        <h3>Important Attribute</h3>

        <ul>
            <li><strong>href</strong> → Specifies the destination of the link.</li>
        </ul>

        <p>
            Clicking a hyperlink opens another webpage or website.
        </p>
    `,

    exercise: `
        <p>Create a hyperlink that opens https://www.wikipedia.org</p>
    `,

    answer: `
<pre><code>&lt;a href="https://www.wikipedia.org"&gt;
    Wikipedia
&lt;/a&gt;
</code></pre>
    `,
    quiz: {

    question: "Which attribute specifies the destination of a link?",

    options: [

        "src",

        "href",

        "link",

        "target"

    ],

    answer: 1

}
},

image: {
    title: "Image Tag",

    content: `
        <h2>🖼️ Image Tag</h2>

        <p>
            The <strong>&lt;img&gt;</strong> tag is used to display images on a webpage.
        </p>

        <p>
            Unlike most HTML tags, the image tag does not have a closing tag.
        </p>

        <h3>Syntax</h3>

<pre><code>&lt;img src="cat.jpg" alt="Cute Cat"&gt;
</code></pre>

        <h3>Important Attributes</h3>

        <ul>
            <li><strong>src</strong> → Location of the image.</li>
            <li><strong>alt</strong> → Alternative text shown if the image cannot load.</li>
            <li><strong>width</strong> → Width of the image.</li>
            <li><strong>height</strong> → Height of the image.</li>
        </ul>

<pre><code>&lt;img src="flower.jpg"
     alt="Beautiful Flower"
     width="300"&gt;
</code></pre>

        <p>
            Always use the <strong>alt</strong> attribute because it improves accessibility and helps if the image cannot be displayed.
        </p>
    `,

    exercise: `
        <p>Display an image named <strong>nature.jpg</strong> with a width of 250 pixels.</p>
    `,

    answer: `
<pre><code>&lt;img src="nature.jpg"
     alt="Nature"
     width="250"&gt;
</code></pre>
    `,
    quiz: {

    question: "Which HTML tag is used to display an image?",

    options: [

        "&lt;picture>",

        "&lt;img>",

        "&lt;image>",

        "&lt;src>"

    ],

    answer: 1

}
},
"ordered-list": {
    title: "Ordered List",

    content: `
        <h2>🔢 Ordered List</h2>

        <p>
            An ordered list displays items in a numbered sequence.
        </p>

        <p>
            The <strong>&lt;ol&gt;</strong> tag creates the list, and each item is written inside the <strong>&lt;li&gt;</strong> tag.
        </p>

<pre><code>&lt;ol&gt;
    &lt;li&gt;Wake Up&lt;/li&gt;
    &lt;li&gt;Brush Teeth&lt;/li&gt;
    &lt;li&gt;Go to School&lt;/li&gt;
&lt;/ol&gt;
</code></pre>

        <p>
            Ordered lists are useful for steps, rankings and instructions.
        </p>
    `,

    exercise: `
        <p>Create an ordered list showing your three favourite subjects.</p>
    `,

    answer: `
<pre><code>&lt;ol&gt;
    &lt;li&gt;Computer&lt;/li&gt;
    &lt;li&gt;Math&lt;/li&gt;
    &lt;li&gt;Physics&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
    `,
    quiz: {

    question: "Which tag creates a numbered list?",

    options: [

        "&lt;ul>",

        "&lt;dl>",

        "&lt;ol>",

        "&lt;li>"

    ],

    answer: 2

}
},
"unordered-list": {
    title: "Unordered List",

    content: `
        <h2>📋 Unordered List</h2>

        <p>
            An unordered list displays items using bullet points instead of numbers.
        </p>

        <p>
            It uses the <strong>&lt;ul&gt;</strong> tag with <strong>&lt;li&gt;</strong> for each item.
        </p>

<pre><code>&lt;ul&gt;
    &lt;li&gt;Apple&lt;/li&gt;
    &lt;li&gt;Banana&lt;/li&gt;
    &lt;li&gt;Orange&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

        <p>
            Use unordered lists when the order of items does not matter.
        </p>
    `,

    exercise: `
        <p>Create an unordered list of four fruits.</p>
    `,

    answer: `
<pre><code>&lt;ul&gt;
    &lt;li&gt;Apple&lt;/li&gt;
    &lt;li&gt;Banana&lt;/li&gt;
    &lt;li&gt;Orange&lt;/li&gt;
    &lt;li&gt;Mango&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
    `,
    quiz: {

    question: "Which tag creates a bulleted list?",

    options: [

        "&lt;ol>",

        "&lt;ul>",

        "&lt;li>",

        "&lt;list>"

    ],

    answer: 1

}
},
"description-list": {
    title: "Description List",

    content: `
        <h2>📚 Description List</h2>

        <p>
            A description list is used to display terms and their descriptions.
        </p>

        <p>
            It uses three tags:
        </p>

        <ul>
            <li><strong>&lt;dl&gt;</strong> - Description List</li>
            <li><strong>&lt;dt&gt;</strong> - Description Term</li>
            <li><strong>&lt;dd&gt;</strong> - Description Details</li>
        </ul>

<pre><code>&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;Structure of a webpage&lt;/dd&gt;

    &lt;dt&gt;CSS&lt;/dt&gt;
    &lt;dd&gt;Styles the webpage&lt;/dd&gt;
&lt;/dl&gt;
</code></pre>

        <p>
            Description lists are commonly used in glossaries and dictionaries.
        </p>
    `,

    exercise: `
        <p>Create a description list for HTML and CSS.</p>
    `,

    answer: `
<pre><code>&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;Creates webpage structure&lt;/dd&gt;

    &lt;dt&gt;CSS&lt;/dt&gt;
    &lt;dd&gt;Styles webpage design&lt;/dd&gt;
&lt;/dl&gt;
</code></pre>
    `,
    quiz: {

    question: "Which tag is used to create a description list?",

    options: [

        "&lt;dl>",

        "&lt;ol>",

        "&lt;ul>",

        "&lt;dt>"

    ],

    answer: 0

}
},
table: {
    title: "HTML Table",

    content: `
        <h2>📊 HTML Table</h2>

        <p>
            Tables are used to organize information into rows and columns.
        </p>

        <p>
            Common table tags:
        </p>

        <ul>
            <li><strong>&lt;table&gt;</strong> - Creates the table</li>
            <li><strong>&lt;tr&gt;</strong> - Table Row</li>
            <li><strong>&lt;th&gt;</strong> - Table Heading</li>
            <li><strong>&lt;td&gt;</strong> - Table Data</li>
        </ul>

<pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;

    &lt;tr&gt;
        &lt;td&gt;Alex&lt;/td&gt;
        &lt;td&gt;17&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</code></pre>

        <p>
            Tables are useful for displaying structured data.
        </p>
    `,

    exercise: `
        <p>Create a table with Name and Marks columns.</p>
    `,

    answer: `
<pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Marks&lt;/th&gt;
    &lt;/tr&gt;

    &lt;tr&gt;
        &lt;td&gt;John&lt;/td&gt;
        &lt;td&gt;95&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
    `,
    quiz: {

    question: "Which HTML tag is used to create a table?",

    options: [

        "&lt;table>",

        "&lt;tr>",

        "&lt;td>",

        "&lt;th>"

    ],

    answer: 0

}
},
form: {
    title: "HTML Form",

    content: `
        <h2>📝 HTML Forms</h2>

        <p>
            HTML forms are used to collect information from users.
        </p>

        <p>
            Forms can collect names, email addresses, passwords, phone numbers, feedback, and much more.
        </p>

        <h3>Common Form Tags</h3>

        <table>
            <tr>
                <th>Tag</th>
                <th>Purpose</th>
            </tr>

            <tr>
                <td>&lt;form&gt;</td>
                <td>Creates a form</td>
            </tr>

            <tr>
                <td>&lt;label&gt;</td>
                <td>Label for an input</td>
            </tr>

            <tr>
                <td>&lt;input&gt;</td>
                <td>User input</td>
            </tr>

            <tr>
                <td>&lt;button&gt;</td>
                <td>Button</td>
            </tr>
        </table>

<pre><code>&lt;form&gt;

    &lt;label&gt;Name:&lt;/label&gt;

    &lt;input type="text"&gt;

    &lt;button&gt;Submit&lt;/button&gt;

&lt;/form&gt;
</code></pre>

        <p>
            Forms are used in login pages, registration pages, contact pages, surveys and many other websites.
        </p>
    `,

    exercise: `
        <p>Create a form with one text input and one Submit button.</p>
    `,

    answer: `
<pre><code>&lt;form&gt;

    &lt;label&gt;Name&lt;/label&gt;

    &lt;input type="text"&gt;

    &lt;button&gt;Submit&lt;/button&gt;

&lt;/form&gt;
</code></pre>
    `,
    quiz: {

    question: "Which HTML tag is used to create a form?",

    options: [

        "&lt;input>",

        "&lt;form>",

        "&lt;label>",

        "&lt;fieldset>"

    ],

    answer: 1

}
},
header: {
    title: "Header Tag",

    content: `
        <h2>🏷️ Header Tag</h2>

        <p>
            The <strong>&lt;header&gt;</strong> tag represents the top section of a webpage or a section.
        </p>

        <p>
            It usually contains the website logo, title and navigation menu.
        </p>

<pre><code>&lt;header&gt;
    &lt;h1&gt;My Website&lt;/h1&gt;
&lt;/header&gt;
</code></pre>

        <p>
            Every webpage usually has one main header.
        </p>
    `,

    exercise: `
        <p>Create a header with a website title.</p>
    `,

    answer: `
<pre><code>&lt;header&gt;
    &lt;h1&gt;My Website&lt;/h1&gt;
&lt;/header&gt;
</code></pre>
    `,
     quiz: {

    question: "What is the main purpose of the &lt;header> tag?",

    options: [

        "To create a table header",

        "To contain introductory content of a page or section",

        "To make text larger",

        "To create navigation links",

    ],

    answer: 1

}
},
nav: {
    title: "Navigation Tag",

    content: `
        <h2>🧭 Nav Tag</h2>

        <p>
            The <strong>&lt;nav&gt;</strong> tag contains navigation links.
        </p>

<pre><code>&lt;nav&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;About&lt;/a&gt;
    &lt;a href="#"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;
</code></pre>

        <p>
            It helps users move between different pages of a website.
        </p>
    `,

    exercise: `
        <p>Create a navigation menu with Home, About and Contact links.</p>
    `,

    answer: `
<pre><code>&lt;nav&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;About&lt;/a&gt;
    &lt;a href="#"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;
</code></pre>
    `,
    quiz: {

    question: "Which semantic tag is used to contain navigation links?",

    options: [

        "&lt;menu>",

        "&lt;navigation>",

        "&lt;nav>",

        "&lt;aside>"

    ],

    answer: 2

}
    
},
main: {
    title: "Main Tag",

    content: `
        <h2>📄 Main Tag</h2>

        <p>
            The <strong>&lt;main&gt;</strong> tag contains the main content of the webpage.
        </p>

<pre><code>&lt;main&gt;
    &lt;h2&gt;Welcome&lt;/h2&gt;
    &lt;p&gt;Main content goes here.&lt;/p&gt;
&lt;/main&gt;
</code></pre>

        <p>
            There should normally be only one main tag on a webpage.
        </p>
    `,

    exercise: `
        <p>Create a main section with a heading and paragraph.</p>
    `,

    answer: `
<pre><code>&lt;main&gt;
    &lt;h2&gt;Welcome&lt;/h2&gt;
    &lt;p&gt;Main content&lt;/p&gt;
&lt;/main&gt;
</code></pre>
    `,
    quiz: {

    question: "What is the purpose of the &lt;section&gt; tag?",

    options: [

        "To store metadata",

        "To contain the main content of the webpage",

        "To create the page title",

        "To display images"

    ],

    answer: 1

}
},
section: {
    title: "Section Tag",

    content: `
        <h2>📑 Section Tag</h2>

        <p>
            The <strong>&lt;section&gt;</strong> tag groups related content together.
        </p>

<pre><code>&lt;section&gt;
    &lt;h2&gt;About Us&lt;/h2&gt;
    &lt;p&gt;Information about our company.&lt;/p&gt;
&lt;/section&gt;
</code></pre>

        <p>
            A webpage can contain multiple sections.
        </p>
    `,

    exercise: `
        <p>Create a section about your school.</p>
    `,

    answer: `
<pre><code>&lt;section&gt;
    &lt;h2&gt;My School&lt;/h2&gt;
    &lt;p&gt;Welcome to my school.&lt;/p&gt;
&lt;/section&gt;
</code></pre>
    `,
    quiz: {

    question: "Which tag contains the complete HTML document?",

    options: [,

        "&lt;html&gt;",

        "&lt;head&gt;",

        "&lt;body&gt;",

        "&lt;title&gt;",

    ],

    answer: 0

},
},
article: {
    title: "Article Tag",

    content: `
        <h2>📰 Article Tag</h2>

        <p>
            The <strong>&lt;article&gt;</strong> tag represents independent content such as blog posts, news articles or forum posts.
        </p>

<pre><code>&lt;article&gt;
    &lt;h2&gt;HTML Basics&lt;/h2&gt;
    &lt;p&gt;HTML is easy to learn.&lt;/p&gt;
&lt;/article&gt;
</code></pre>

        <p>
            An article should make sense on its own.
        </p>
    `,

    exercise: `
        <p>Create an article with a title and paragraph.</p>
    `,

    answer: `
<pre><code>&lt;article&gt;
    &lt;h2&gt;News&lt;/h2&gt;
    &lt;p&gt;Today's news...&lt;/p&gt;
&lt;/article&gt;
</code></pre>
    `,
    quiz: {

    question: "Which tag is best used for an independent blog post or news article?",

    options: [

        "&lt;section&gt;",

        "&lt;div&gt;",

        "&lt;article&gt;",

        "&lt;main"

    ],

    answer: 2

}
},
aside: {
    title: "Aside Tag",

    content: `
        <h2>📌 Aside Tag</h2>

        <p>
            The <strong>&lt;aside&gt;</strong> tag contains additional information related to the main content.
        </p>

<pre><code>&lt;aside&gt;
    &lt;h3&gt;Tip&lt;/h3&gt;
    &lt;p&gt;Practice HTML every day.&lt;/p&gt;
&lt;/aside&gt;
</code></pre>

        <p>
            It is often used for tips, advertisements or related links.
        </p>
    `,

    exercise: `
        <p>Create an aside containing one study tip.</p>
    `,

    answer: `
<pre><code>&lt;aside&gt;
    &lt;h3&gt;Tip&lt;/h3&gt;
    &lt;p&gt;Practice daily.&lt;/p&gt;
&lt;/aside&gt;
</code></pre>
    `,
    quiz: {

    question: "The &lt;aside&gt; tag is mainly used for?",

    options: [

        "Main page content",

        "Navigation links",

        "Content related to the main content, like a sidebar",

        "Creating forms"

    ],

    answer: 2

}
},
footer: {
    title: "Footer Tag",

    content: `
        <h2>📍 Footer Tag</h2>

        <p>
            The <strong>&lt;footer&gt;</strong> tag represents the bottom section of a webpage.
        </p>

        <p>
            It usually contains copyright information, contact details and useful links.
        </p>

<pre><code>&lt;footer&gt;
    &lt;p&gt;© 2026 My Website&lt;/p&gt;
&lt;/footer&gt;
</code></pre>

        <p>
            Most websites have one footer at the bottom of the page.
        </p>
    `,

    exercise: `
        <p>Create a footer with your name and the current year.</p>
    `,

    answer: `
<pre><code>&lt;footer&gt;
    &lt;p&gt;© 2026 John&lt;/p&gt;
&lt;/footer&gt;
</code></pre>
    `,quiz: {

    question: "What information is commonly placed inside a &lt;footer&gt;?",

    options: [

        "The page title",

        "Navigation menu",

        "Copyright and contact information",

        "The main article"

    ],

    answer: 2

}
},


};
