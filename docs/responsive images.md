# Responsive Images
- serve appropriate image based on size and resolution of device
- up until now: width 100%
    - downside: have to load large image but may never see it that large on small devices
---
## Technique Overview
- not fully fleshed out
- make multiple versions and sizes of images for different sizes/ resolutions
    - multiple images (different types)
    - as size changes - image changes
---
## Resize Technique
- mad-width: 100%
- forced to match width of container
- can do this with other types of media
    - img, embed, object, video
- drawbacks:
    - large high resolution images
    - must be downloaded then skilled
    - a lot of processing power
    - large file sizes
---
## Responsive HTML Images
1. device pixel ratio
    - high res screens get high res images
2. fluid image
    - fluid layouts 
    - images need to squish and stretch
3. variable sized images
4. art direction
    - crop
    - content change
5. type switching
    - browsers support different formats

### Device Pixel Ratio
- < img srcset="name 1x, name 2x" src="location" alt="alt text">
    - srcset gets name and 1x based on ratio
    - x descriptor: defines pixel ratio we are targeting
    - double the pixels (2x), triple the pixels (3x)
    - same image but 2 different sizes/files
### Fluid/ Variable Sized Images
- allows us to tell browser rendered size of image and how many pixels each image has
- browser picks best image for us
- < img srcset="name 1024w, name 640w" sizes="(min-width: 36em) 33.3vw, 100vw src="source" alt="alt text">
    - w tells number of pixels each width is
    - size tells browser number of pixels needed based on layout
    - min width tells when lower than 36em breakpoint changes
        - lower than 36: 100% vw
        - higher than 36: 33% vw
- based on these numbers browser picks most appropriate match
### Art Direction
- < picture>
    - < source media="(min-width: 36em)"
        - srcset="large.jpg  1024w,
        - medium.jpg 640w,
        - small.jpg  320w"
        - sizes="33.3vw" />
   - < source srcset="cropped-large.jpg 2x,
        - cropped-small.jpg 1x" />
   - < img src="small.jpg" alt="my image" />
- < /picture>
- cropping or zooming image
- viewport larger than 36, use top
- viewport smaller than 36, use bottom
- IMG tag needed
### Type Swiching
- < picture>
   - < source type="image/webp" srcset="logo.webp" />
   - < source type="image/png" srcset="logo.png" />
   - < img src="logo.gif" alt="my logo" />
- < /picture>
- multiple sources so browser can load source that works best for it
- moves down list rendering the one closest to top that it can
---
---
# Example Notes
- media sets rules for when source element should be used
- set image sizes for widths
    - open < picture> then open < source>
    - inside of < source> call a media query for min width and add a source for that query
    - add more media queries and sources for each screensize
- browser picks
    - open < picture>
    - add source element with media query
    - after query add size (what vw image takes up IF at least min)
    - after setting that add the images browser can use and pixel with as #w
        - add multiple browser will decide which is best
    - if above is false wil skip
    - < img> with a default source (incase nothing else works), alt size as vw, and image sources with w included
        - for width less than above min
- USE PHOTOSHOP ACTIONS


