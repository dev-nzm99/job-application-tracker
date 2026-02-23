## 1️. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

- **getElementById()** selects a single element using id.  
- **getElementsByClassName()** selects multiple elements using class and returns a live HTMLCollection.  
- **querySelector()** selects the first matching CSS selector.  
- **querySelectorAll()** selects all matching elements and returns a static NodeList.


## 2️. How to create and insert a new element into the DOM

A new element is created using `document.createElement()` and inserted using methods like  `append()`

Steps:  
1. Create element  
2. Add content  
3. Insert into parent  


## 3️. What is Event Bubbling?

Event bubbling is a process where an event starts from the target element and propagates upward to its parent elements in the DOM.


## 4️. What is Event Delegation? Why useful?

Event delegation is attaching an event listener to a parent element to handle events of its child elements.  
It improves performance and works for dynamically added elements.


## 5️. Difference between preventDefault() and stopPropagation()

- **preventDefault()** stops the browser’s default action (like form submit or link navigation).  
- **stopPropagation()** stops the event from bubbling to parent elements.
