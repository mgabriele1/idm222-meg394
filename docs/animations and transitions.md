# CSS Animations and Transitions
- CSS3 Features
    - transitions
    - transformations
    - animations
    - filters
---
## CSS Transition Properties
- let you change one or more CSS properties for an element over a period of time
- five properties that can be used for transitions
    1. transition
    2. transition-property
        - specifies properties transition is for (comma separated)
    3. transition-duration
        - seconds or milliseconds transition will take
    4. transition-timing-function
        - speed curve of the transition
        - values: ease, lnear, ease-in, ease-out, ease-in-out, cubic-bezier
    5. transition-delay
        - seconds or milliseconds before transition starts
- syntax: transition: [property] [duration] [timing-function] [delay];
- example: 
    - a {
        - color: blue;
        - font-size: 100%;
        - transition: color 2s ease-in 1s,
        font-size 2s ease-out 1s;
    - }
    - a:hover {
        - color: red;
        - font-size: 120%;
    - }
- the hover is what makes the transition take place, when the mouse is moved off the element it will transform back
---
## 2D Transforms
- transform lets you rotate, scale, skew, and position an HTML element
- can combine transforms and transitions
- 2D Transforms
    1. transform
        - adds 1 or more transforms to an html element
        - methods: rotate, scale, knew, translate, matrix (combination of all the other methods)
    2. transform-origin
        - changes origin point for transform 
- example: 
    - .image {
        - transition: 2s;
    - }
    - .image:hover {
        - transform: rotateY(180deg);
    - }
---
# <a href="https://3dtransforms.desandro.com/">Transforms Help</a>
---
## CSS Animations
- frame based animations
- animation properties
    1. animation
    2. animation-name
        - @keyframes selecor rule
        - define the keyframes for the animation sequence
    3. animation-duration
        - set a duration for animations in seconds or milliseconds
    4. animation-delay
        - set a delay in seconds or milliseconds
    5. animation-iteration-count
        - number of times animation should run
    6. animation-timing-function
        - set a curve speed
    7. animation-direction
        - direction in which animation should be run
        - normal, reverse, alternate
- shorthand syntax:
    - h1 {
        -  animation: [name]
            - [duration]
            - [timing-function]
            - [delay]
            - [iteration-count]
            - [direction]
    - }
---
### @keyframes
    @keyframes moveright {
        from {
        color: blue;
        margin-left: 20%;
      }
      to {
        color: red;
        margin-left: 60%;
      }
    }
- sets properties for first and last frame, browser fills in the between frames ("tweening")
- can also use percentage points to set up keyframes
    - 0% {}
    - 50% {}
    - 100% {}
---
## CSS Filters
- filters change the appearance of images after they've been loaded into the browser without changing the files
- example:
    - image {
        - filter: [filtermethod(value)];
    - }