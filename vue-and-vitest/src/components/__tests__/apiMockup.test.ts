import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  http.get('https://cdn.freecodecamp.org/vuejs-quiz-qpp/quiz.json', () => {
    return HttpResponse.json(
        [
            {
              Question:
                "In CSS, Flex is a shorthand property for which of the following properties?",
              Difficulty: "medium",
              Answer: "flex-grow, flex-shrink, and flex-basis",
              Distractor1: "justify-content, align-items, and align-content",
              Distractor2: "flex-direction, flex-wrap, and flex-flow",
              Distractor3: "flex-direction, order, and flex-flow",
            },
            {
              Question:
                "Which CSS property is used to represent the transparency of an element?",
              Difficulty: "easy",
              Answer: "Opacity",
              Distractor1: "Dark",
              Distractor2: "Transparent",
              Distractor3: "Hover",
            },
            {
              Question:
                "Which of the following CSS properties represents the order of flex items in a container?",
              Difficulty: "medium",
              Answer: "order",
              Distractor1: "float",
              Distractor2: "overflow",
              Distractor3: "int",
            },
            {
              Question:
                "In HTML, which of the following is the correct way for showing how to import an external script?",
              Difficulty: "easy",
              Answer: "\x3Cscript src='index.js'>\x3C/script>",
              Distractor1: "\x3Cscript add='index.js'>\x3C/script>",
              Distractor2: "\x3Cscript adding-js='index.js'>\x3C/script>",
              Distractor3: "\x3Cscript js='index.js'>\x3C/script>",
            },
            {
              Question: "In HTML, which element is used to insert a favicon?",
              Difficulty: "medium",
              Answer: "link element",
              Distractor1: "fav element",
              Distractor2: "favicon element",
              Distractor3: "icon element",
            },
            {
              Question:
                "Which of the following is the correct way of creating an anchor element in HTML?",
              Difficulty: "easy",
              Answer: "<a href= 'www.freecodecamp.org'> freeCodeCamp </a>",
              Distractor1: "<a>www.freecodecamp.org <freeCodeCamp /a>",
              Distractor2: "<a href='www.freecodecamp.org' freeCodeCamp /a>",
              Distractor3: "<a 'link'='www.freecodecamp.org' freeCodeCamp > </a>",
            },
            {
              Question: "What is meant by an empty tag in HTML?",
              Difficulty: "medium",
              Answer: "An empty tag doesn't require a closing tag",
              Distractor1: "There is no such concept of empty tag in HTML",
              Distractor2: "An empty tag cannot having any content within it",
              Distractor3: "None of these",
            },
            {
              Question:
                "Which HTML element is used to 'link' to a 3rd party JavaScript library and make it available on your page?",
              Difficulty: "medium",
              Answer: "\x3Cscript>",
              Distractor1: "<input>",
              Distractor2: "<head>",
              Distractor3: "<html>",
            },
            {
              Question: "How many Section Heading elements are there in HTML5?",
              Difficulty: "easy",
              Answer: "6",
              Distractor1: "4",
              Distractor2: "8",
              Distractor3: "1",
            },
            {
              Question:
                "In JavaScript, if let x='Prakhar', then what will be the result for console.log(x.substring(2,5))?",
              Difficulty: "hard",
              Answer: "akh",
              Distractor1: "akaha",
              Distractor2: "aka",
              Distractor3: "akkkaha",
            },
            {
              Question:
                "In JavaScript, what is the range of numbers returned from the Math.random() method?",
              Difficulty: "hard",
              Answer: "Between 0 and 1 (including 0; not including 1).",
              Distractor1: "Between 0 and 1 (including neither 0 or 1).",
              Distractor2: "Between 0 and 1 (including 1; not including 0).",
              Distractor3: "Between 0 and 100 (including 0; not including 100).",
            },
            {
              Question:
                "In JavaScript, what is the difference between the indexOf() and search() methods?",
              Difficulty: "medium",
              Answer:
                "indexOf() can take a second parameter while search() cannot",
              Distractor1: "Both methods are the same",
              Distractor2: "indexOf() only takes regular expressions",
              Distractor3:
                "The search() method runs 4x faster than the indexOf() method",
            },
            {
              Question: "What does the 'debugger' statement in JavaScript do?",
              Difficulty: "hard",
              Answer: "It acts as a breakpoint in a program",
              Distractor1: "It will debug errors in the current statement",
              Distractor2:
                "It will debug all the errors in the program at runtime",
              Distractor3: "All of the above",
            },
            {
              Question: "What kind of programming can JavaScript be used for?",
              Difficulty: "medium",
              Answer: "Both Client and Server side programming",
              Distractor1: "Server side only",
              Distractor2: "Client side only",
              Distractor3: "None of these options",
            },
            {
              Question:
                "In JavaScript, if let x='5', then what will be the value of console.log(x==5,x===5)?",
              Difficulty: "medium",
              Answer: "true false",
              Distractor1: "true true",
              Distractor2: "false true",
              Distractor3: "false false",
            },
            {
              Question:
                "In JavaScript, which Web API is used to display a dialog box with an optional message?",
              Difficulty: "medium",
              Answer: "window.alert()",
              Distractor1: "window.alertHTML()",
              Distractor2: "window.alertContent()",
              Distractor3: "window.alertBox()",
            },
            {
              Question:
                "In JavaScript, if let word='Intelligent', then what will be the value of word.slice(2,5)?",
              Difficulty: "medium",
              Answer: "tel",
              Distractor1: "tellig",
              Distractor2: "ll",
              Distractor3: "Inigent",
            },
            {
              Question:
                "In Javascript, what keyword is used to check whether a given property in an object is valid?",
              Difficulty: "hard",
              Answer: "in",
              Distractor1: "is in",
              Distractor2: "exists",
              Distractor3: "lies",
            },
            {
              Question:
                "What is the name of the international body responsible for establishing the most common web accessibility standards?",
              Difficulty: "hard",
              Answer: "World Wide Web Consortium(W3C)",
              Distractor1: "Websites for All",
              Distractor2: "Web Accessibility Initiative (WAI)",
              Distractor3: "A11y",
            },
            {
              Question:
                "Why is it important to use semantic elements when writing HTML?",
              Difficulty: "medium",
              Answer:
                "Semantic code clearly describes the code's meaning to both the browser and the developer",
              Distractor1: "Semantic code is prettier.",
              Distractor2: "Semantic code decreases site readability.",
              Distractor3:
                "Semantic code can improve comprehension for hearing-impaired individuals.",
            },
            {
              Question:
                "Which one is the correct HTML element used to identify the main language of an entire page?",
              Difficulty: "medium",
              Answer: "<html>",
              Distractor1: "<!DOCTYPE>",
              Distractor2: "<body>",
              Distractor3: "<img>",
            },
            {
              Question:
                "In Git, how can you stage a file that ends with a *.txt extension?",
              Difficulty: "medium",
              Answer: "git add *.txt",
              Distractor1: "git add *.text",
              Distractor2: "git add -a .txt",
              Distractor3: "git add - *.txt",
            },
            {
              Question:
                "In Git, how can you save uncommitted changes on your local machine so you can work on it later?",
              Difficulty: "hard",
              Answer: "git stash",
              Distractor1: "git copy into notepad.exe",
              Distractor2: "git save code",
              Distractor3: "git clone --for later",
            },
            {
              Question: "In Git, how can you check your configuration?",
              Difficulty: "hard",
              Answer: "git config -l",
              Distractor1: "git config -check",
              Distractor2: "git checkconfig -l",
              Distractor3: "git checkconfig -m",
            },
        ]
    )
  }),
)



export default server
