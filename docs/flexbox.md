# Flexbox
- <b> bye bye
    - float
    - clear
    - vertical-align </b>
- automatically reads space and arranges content into it
- give parent ability to alter height, width, order inside of it
- works in all 4 directions
- flexbox is a whole module not just a property
- all the direct children are the flex items
---
## Terminology
- parent: container
    - flex container
- child: content inside
    - direct children are flex items
    - items inside direct children follow regular rules
- main axis: primary axis along which all items are laid out (L-->R)(T-->B)
- main start & main end: depends on which direction axis is
- main size: main dimension axis is along
    - width or height depending on axis
- cross axis: opposite axis 
    - cross start
    - cross end
    - cross size
---
## Properties for the Parent
- flex container
- .container {
    - display: flex 
- }
    - means that all of the direct children are flex items
- can set flex direction which determines main axis
    - row (creates a row)
    - row reverse (reverses order of first to last to right to left)
    - column (creates column)
    - column reverse (items reversed bottom to top)
- once display is flex, children items will try to fit on one line by default
- can change to allow items to wrap
- flex wrap property (flex-wrap)
    - wrap
    - no wrap
    - wrap-reverse
- flex-flow (shorthand to combine)
    - flex-flow: flex direction flex wrap
### Positioning Inside Container
- justify-content: (main axis)
    - (flex-start) left
    - (flex-end) right
    - (center) center
    - (space-between) spread evenly
    - (space-around) space around then spread evenly
- align-items: (cross axis)
    - (flex-end) start
    - (flex-start) end
    - (center) center
    - (stretch) stretch to match height
    - (baseline) line up top line of text
- align-content: (aligns whole group)
    - (flex-end) start
    - (flex-start) end
    - (center) center
    - (space-around) space around then spread
    - (stretch) stretch to match height
---
## Properties for the Children
- flex items
- laid out in container by your source order by default
- order:
    - set order as int to change how things lay out on the page
        - 1 moves 1 toward start, -1 moves 1 toward end
    - search engines index code by order it is written - this property allows you to put more important info first in HTML and lay it out differently
    - can put any int you want, the higher you go the farther into the div
- flex-grow:
    - default is 0
    - unitless value
    - give permission for item to grow if necessary
    - integar dictates amount of available space item should take up
        - all set to 1: whatever space is there they will take up 1 proportion of that
        - 2 is allowed to grow twice as much as 1
- flex-shrink:
    - default is 1
    - children are allowed to squish to take up less space
- flex-basis: (legnth, auto, etc.)
    - auto is default
    - will be whatever it needs to be based on content inside of it UNLESS you change it
    - can do this for all children or for individual
    - 100% will stretch to 100% of width or height
    - auto sees how much space needed based on content and splits if needed
- SHORTHAND
    - flex: [flex-grow] [flex-shrink] [flex-basis];
- align-self
    - overrides parent properties
    - auto, start, end, center, baseline, stretch
---
# Example Notes
- set display property to flex FOR PARENT
- <b> <a href="https://caniuse.com/#search=flex">MAKE SURE PROPERTIES ARE OK</a> </b>
- WHEN YOU CHOOSE REVERSED START AND END SWITCH SIDES
        