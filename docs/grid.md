# Grid
- 2D layout system
---
## What Grid System Looks Like
- page is divided up into some number of invisible columns (12 typical starting point)
- total width of columns + margins = 100% of browser
---
## How to Set Up Grid
- .col-1 {width:percent of browser}
    - continue this down for however many columns you want with percentage adding up to 100
- < div class="row">
    - < div class="col-1">
- row divs holding all of the column divs
---
## Browser Support
- IE11 - some support, but shitty
- no Opera
- <b> Firefox = best dev tools for grid </b>
---
## CSS Grid Terminology
- similar termonology and functionality to flexbox
- < div class="container">
    - < div class ="item-1">
- container = parent, item child (grid element)
    - only direct children respond to grid properties
- display set to grid
- dividing lines that make up structure of a grid: grid line
    - any direction
- terminology
    - space between two adjacent grid lines: grid track
    - space between 2 row and 2 column (unit): grid cell
    - total space surrounded by 4 grid lines (any number of cells): grid area
---
---
## Properties of the Parent
- grid container
    - .container {
        - display: grid / inline-grid / subgrid;
    - }
- define columns and rows of grid
    - .container {
        - grid-template-columns: track-size / [ line-name] / track-size...
        - grid-template-rows: track-size / [ line-name] / track-size...
    - }
- SHORTHAND: grid-template: rows/ columns
    - NEED /
- how to reference columns and rows
    - line-name lets you give each a name
    - reference by their number
    - can leave out grid-template-row and it will auto size to height of content in them
- track-size can be: px, %, auto, etc.
- can tell a div to span from line 1-4, row heights, etc.
- <b> NEW UNIT (fr)</b>
    - only for grid
    -  fraction of free space
    - 1fr 1fr 1fr; (each takes up 1/3)
    - repeat (3, 1fr); (shorthand for above)
- free space is calculated after all NON FLEXIBLE items are put in - fr evenly split up leftover space
---
## Grid template areas (ROWS)
- grid-template-areas: "< grid-area-name>"
- each different line for each different row
    - 'header header header header' (all 4 are header)
    - 'main main . sidebar' (2 main, 1 blank, 1 sidebar)
- can use media queries to rearrange design with areas
---
## Gap
- puts gap between all columns/ rows
- grid-column-gap: line-size
- grid-row-gap: line-size
- gap: row column (shorthand)
---
## Align Content
- justify-items: (ROW)
    - start
    - end
    - center
    - stretch (fills entire grid cell)
    - applies to all items inside of container
- align-items: (COLUMN)
    - start
    - end
    - center
    - stretch (fills entire grid cell)
    - applies to all items inside of container
- align-self (individual grid items)
- justify-content: (ROW)
    - used when size of grid < size of grid container
    - aligns all of the content in the grid to location in container
    - start
    - end
    - center
    - stretch (fills entire grid cell)
    - space-around
    - space-between
    - space-evenly
- align-content: (COLUMN)
    - used when size of grid < size of grid container
    - aligns all of the content in the grid to location in container
    - start
    - end
    - center
    - stretch (fills entire grid cell)
    - space-around
    - space-between
    - space-evenly
---
---
## Properties of the Children
- grid items
    - automatically get dropped into the cells in the order it is written
- grid-column-start: number / name / span (#)
- grid-column-end: number / name / span (#)
    - ex: 4 will make content stop after unit 3
- SHORTHAND: grid-column: start/ end; (NEED THE /)
    - span: can tell how many columns to span over rather then speify both start and end
- gird-row-stat: number / name / span (#)
- grid-row-end: number / name / span (#)
    - allows you to create grid areas filling both columns and rows
    - can also tell grid element where to start and how many to span
- SHORTHAND:
    - grid-area: row start/ column start/ row end/ column end;
    - NEED /
- can overlap elements (z-index)
- if no end point is specified it will automatically fill 1 grid unit
- order
    - reorder elements
    - 3 moves 3 right, -3 moves 3 left
---
## Align Children
- position one or more elements uniquely
- moves content around in 1 grid cell
- justify-self: (ROW)
    - start
    - end
    - center
    - stretch
- align-self: (COLUMN)
    - start
    - end
    - center
    - stretch
---
## Grid to Automatically adjust
- no media queries needed!
- min/ max
    - grid-template-columns: repeat (4, minmax(200px, 1fr))
- we don't have to specify a specific number of columns - can tell browswer to fit as many as possible
    - auto fit
        - based on available space and min/ max will fit as many as possible
    - auto fill
        - creates empty columns to fill space
        - as viewport gets wider and content is all in one row, will add extra empty columns to end of row pushing content to left
    - grid-template-columns: repeat (autofit, minmax(200px, 1fr))
---
---
# Example Notes
- style sheet start:
    - html {
        - box-sizing: border-box;
        - font size: 100%;
    - }
    - *, * before, * after {
        - box-sizing: initial;
    - }
- TIP
    - use borders or background colors while setting up
- in dev tools on firefox if you click grid next to your div it will show you your grid
    - can turn on line numbers
    - expand lines indefinitely
    - turn on line names
- grid-template-rows: auto;
- BUILD HTML TO OPTIMIZE BROWSER AND REORDER CONTENT WITH CSS

