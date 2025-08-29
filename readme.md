## 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: **getElementById selects a single HTML element by its unique id attribute. It returns single element if a matching element is found, otherwise it returns null.

getElementsByClassName selects all the elements that posses a specific class name. It returns a collection containing all matching elements. It returns a live HTML collection.

querySelector selects the first elements in a given CSS selectors and returns a single element if a matching is found. Else it will return null.

querySelectorAll selects all the elements in a given CSS selectors. It returns a collection containing all matching elements.

2. How do you **create and insert a new element into the DOM**?
Answer:

3. What is **Event Bubbling** and how does it work?
Answer: Event Bubbling is a default process in which a event triggers in the innermost element and then propagates up to the DOM tree, its parents , grandparents and so on until it reaches it root or DOM object. 
1. At first, the event is triggered in its innermost element such as a user s on the button.
2. After the event is handled by its target element, it bubbles up to its parent element. 
3. If the parent element have any eventListener it will be triggered then.
4. The process continues until it reached it root or DOM object.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation in JavaScript is a technique in which a single listener is attached to parent element to manage multiple child element.
1. Event Delegation consumes less memory and power process. Thus it improves performance.
2. It simplified code. So, the codebase is clearer and easy to understand.
3. Since listener is attached to parent element, it can handle both existing and newly created child element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: preventDefault() prevents browser's default action associated with a specific event from occurring. It doesn't prevent browser's Event propagation through the DOM tree.
stopPropagation() prevents event from propagating further in the DOM tree.




