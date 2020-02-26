# Inclusive Design Patterns
- accessible design
- maximum number of users can successfully navigate and enjoy
- Heydon Pickering (expert in web accessiblity)
---
## The Button Example
- button created with div and photoshop image
    - png: non-vector format, can't be scaled
    - pixel < rem/em
    - image loading turned off = button invisible
    - can't tab to div
    - div element inert: means nothing, not the same semantics as a button element
    - label unavailable because it is an image
    - not able to be translated
- know when to use an exisitng solution
    - < button>
    - <b> use most appropriate elements: header, footer, main </b>
---
## Techniques
1. DOCTYPE first line of code
    - tells browser how to interpret content
    - quirks mode - browser can enter this without doctype
2. lang element
    - specifies language of document
    - if page isn't all in one language - can change language attribute for specific elements
    - more indexible by search engines
    - easier to translate
3. semantics
    - well strcutred semantic html with CSS and Java to support
4. scripts at end of body tag
5. managing assets
    - want content to arrive (load) as soon as possible
6. loading fonts
    1. media = "none"
    - onload="if(media!='all')media='all'"
        - this loads the font into the memory and then applies it to all of the text after it has loaded
    2.  NO SCRIPT
        - < noscript>
        - < link rel="stylesheet" href="fonts.css">
        - < /noscript>
    - <b> FUT: flash of unstyled text </b>
        - default font similar to new font
    3. Javascript
        - set java to watch for fonts loaded and then apply them
        - update dom to add class that will apply all fonts
        - add element to keep fonts loaded and stored in the cache
        - FUT seen only once or not at all
    4. subset fonts
        - load only letters needed
7. serve optimized videos and images
    - preload videos
    - want captions, transcript, and audio for videos
8. Title element
    - comes up on search engine results
        - want different links and descriptions for pages
        - will be ranked higher in search engine results
    - practices:
        - page description / author and site info
        - website name / page description
9. Main element
    - designated area on the page for the main content that is UNIQUE from all other pages
        - screen readers and assistive technology look for this section
    - header, sidebar, and footer will be very similar in each HTML 
    1. @print
        - set only main to print
    2. skip link to jump to main
10. legibility
    - does it have orenamentation that gets in the way of comprehension
    - letterforms consistent
    - letterforms distinct in shape
    - does it support all of the needed charatcers and styles
    - letters that riase (d) or drop (y) must have long enough tails
    - d and b should not be an exact mirror
11. line measure
    - lines of text spanning all the way across the page are diffiult to read
    - short lines of text are also exauhsting - require eye to dart back and forth
    - 45-75 characters
12. setting measure
    - no pixels
    - relative units!
13. letting
    - line height
    - line-height: rem
    - do not use fixed units
14. write good content
    - elements should be able to stand alone with their content
### CH UNIT
- ch = 1 character
- can set width based on number of characters
- font size changes - will wrap accordingly