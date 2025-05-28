# Roll Number: 150096724032
# JavaScript MCQs & Answers
# Revise Core JavaScript Concepts Simply with It!


## DOM (Document Object Model)

1. **What does DOM stand for?**
   - a) Document Object Model
   - b) Data Object Model
   - c) Digital Object Mapper
   - d) Display Output Model
   
   Ans: a

2. **Which method is used to select an element by its ID?**
   - a) getElement()
   - b) getElementByClass()
   - c) getElementById()
   - d) selectById()
   
   Ans: c

3. **What does document.querySelector(".box") select?**
   - a) All elements with class "box"
   - b) The first element with class "box"
   - c) An element with ID "box"
   - d) None of the above
   
   Ans: b

4. **How do you change the text of an element with ID "message"?**
   - a) document.getElementById("message").text = "Hello"
   - b) document.message.innerHTML = "Hello"
   - c) message.innerText = "Hello"
   - d) document.getElementById("message").innerText = "Hello"
   
   Ans: d

5. **What is the purpose of innerHTML?**
   - a) To store data in the browser
   - b) To add CSS to elements
   - c) To get or set the HTML content of an element
   - d) To delete an element
   
   Ans: c


## Events

1. **What is an event in JavaScript?**
   - a) A built-in method
   - b) A user or browser action
   - c) A CSS property
   - d) A JavaScript object
   
   Ans: b

2. **Which event occurs when a user clicks on an HTML element?**
   - a) onmouseover
   - b) onload
   - c) onclick
   - d) onchange
   
   Ans: c

3. **How can you add a click event to a button in JavaScript?**
   - a) button.onClick = function()
   - b) addEventListener("click")
   - c) button.click = handleClick()
   - d) button.onclickEvent = clickHandler
   
   Ans: b

4. **What does event.preventDefault() do?**
   - a) Prevents default CSS
   - b) Stops default action like form submission
   - c) Prevents HTML rendering
   - d) Deletes the event
   
   Ans: b

5. **Which method is used to attach an event handler?**
   - a) attachEvent()
   - b) setEvent()
   - c) addEventListener()
   - d) handleEvent()
   
   Ans: c


## Variables

1. **How do you declare a variable in JavaScript?**
   - a) var myVar;
   - b) let myVar;
   - c) const myVar;
   - d) All of the above
   
   Ans: d

2. **Which variable type allows reassignment?**
   - a) const
   - b) let
   - c) function
   - d) string
   
   Ans: b

3. **Which keyword declares a block-scoped variable?**
   - a) var
   - b) global
   - c) let
   - d) static
   
   Ans: c

4. **What will happen if you use a variable without declaring it?**
   - a) Error
   - b) It becomes a global variable
   - c) It becomes undefined
   - d) It is ignored
   
   Ans: a

5. **Which keyword creates a constant in JavaScript?**
   - a) let
   - b) var
   - c) const
   - d) define
   
   Ans: c


## Functions

1. **What is a function?**
   - a) A loop
   - b) A reusable block of code
   - c) A data type
   - d) A condition
   
   Ans: b

2. **How do you define a function named sayHello?**
   - a) function sayHello() {}
   - b) def sayHello() {}
   - c) let sayHello = {}
   - d) function: sayHello {}
   
   Ans: a

3. **How do you call a function in JavaScript?**
   - a) call sayHello
   - b) sayHello
   - c) sayHello()
   - d) call(sayHello)
   
   Ans: c

4. **What is the keyword to return a value from a function?**
   - a) send
   - b) yield
   - c) return
   - d) output
   
   Ans: c

5. **What is a parameter in a function?**
   - a) A return value
   - b) A variable passed into a function
   - c) A built-in variable
   - d) A type of function
   
   Ans: b


## Mixed Concepts

1. **What will typeof "hello" return?**
   - a) string
   - b) text
   - c) object
   - d) char
   
   Ans: a

2. **What does console.log() do?**
   - a) Displays content on the webpage
   - b) Logs errors only
   - c) Outputs messages to the browser console
   - d) Saves data
   
   Ans: c

3. **How do you write a comment in JavaScript?**
   - a) /* comment */
   - b) // comment
   - c) ## comment
   - d) ** comment **
   
   Ans: b

4. **Which of these is a valid function expression?**
   - a) function = () {}
   - b) let add = function(x, y) { return x + y; }
   - c) add = (x, y) return x + y;
   - d) func(x, y) => x + y
   
   Ans: b

5. **What does NaN mean?**
   - a) Not a Number
   - b) Null and None
   - c) New and Null
   - d) No active Node
   
   Ans: a

6. **Which method is used to convert a string to a number?**
   - a) parseInt()
   - b) toNumber()
   - c) convertNumber()
   - d) parse()
   
   Ans: a


## Bonus Conceptual Questions:

1. **Why is using let safer than var?**
   
Ans: `let` keeps variables contained within their code blocks (like inside if statements) and prevents accidental duplicate declarations, making your code more predictable.

2. **What is the main benefit of separating JavaScript from HTML?**
   
Ans: It's like keeping your tools organized. HTML handles structure, JavaScript handles behavior thus, making your code easier to maintain and update.

3. **Why is Math.random() useful in games or UI effects?**
   
Ans: It adds surprise and variety to make games more fun (like random treasure drops) and interfaces more natural (like varied animations).

4. **What happens if two event listeners are attached to the same element?**
   
Ans: Both will run one after another when the event happens, like having two people answer to the same question in viva but one by one being disciplined.

5. **Why should we use functions to organize code?**
   
Ans: Functions are like cards, they package repeatable tasks into neat, reusable units that make your code cleaner, easier to understand and saves a bunch of time.


## Practical Understanding:

1. **Why does Math.floor(Math.random() * 10) only go up to 9?**
   
Ans: Math.random() gives numbers from 0 up to 1 (but not including), so when multiplied by 10 and rounded down, you get integers 0-9.

2. **What does addEventListener("click", function(){...}) do?**
   
Ans: It tells an element to run specific code when clicked, while still allowing other click actions to work too.

3. **Why is it helpful to give buttons ids or classes in the DOM?**
   
Ans: IDs and classes are like name tags that help you find, style, and organize buttons in your code.

4. **Can you assign a function to a variable in JavaScript? Why?**
   
Ans: Yes! In JavaScript, functions can be stored in variables like any other value, letting you use them whenever needed.

5. **What's the difference between a function declaration and expression?**
   
Ans: Function declarations (`function name(){}`) are available throughout their scope, while expressions (`const name = function(){}`) only exist after they're defined.

## This Repo and this Short Revision is of my college curriculum, Instructor: Poonam Khanvilkar.
## If you find it helpful in polishing your JavaScript concepts, consider starring this Repository!