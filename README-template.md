# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Pod request access landing page solution](#frontend-mentor---pod-request-access-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](assets/Screen%20Shot%202024-04-23%20at%2012.17.48.png)

### Links

- Solution URL: (https://github.com/MorganEro/FrontEndMentor_Workit_landing_page)
- Live Site URL: (https://morganero.github.io/FrontEndMentor_Workit_landing_page/)

## My process

I attempted to use github projects and issue tickets to help come up with a solution. This was my first attempt to tackle the challenges in a more strategic and linear manner.

I began with creating issue tickets and adding them to a project. Then I made the css variables and some other reusable css.
Next was the html. After that, I attacked each section based on the mobile view. When I finished all sections, I made the media queries for each.
T

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this project, I learned a lot about using media queries and adjusting sizes for different screen views. At first, I set a media query for screens smaller than 928 pixels, trying to match it with the layout I designed in Figma for a 1440-pixel view. But this caused some big problems when switching between different screen sizes. So, I changed it to a query for screens smaller than 1024 pixels, which meant I had to tweak things to make sure everything looked right across different screen sizes. I'm thinking in future projects, I might try building each section and its media queries before moving on to the next one, to see if that works better for me. It was really satisfying to finish the mobile view before moving on to the others.

I also learned that the units you use for positioning can really affect how your layout looks on different screens. Using "vw" and "vh" can totally change things if you're not careful. I found a helpful website by Kevin Powell that helps you decide which units to use, called "https://whatunit.com/."

I also had to spend some time understanding stacking context. I found a useful YouTube video tutorial by Deeecode The Web that helped me out, which you can watch here: "https://www.youtube.com/watch?v=vUCWrPAsWic&t=1s". These were all important lessons that helped me improve my front-end development skills.

### Continued development

I had a great time trouble shooting with stacking context, z-indexing and positioning. I look forward to future challenges and seeing how quickly I can tackle more difficult challenges with the knowledge gained from this project.

## Author

- Website - [Morgan Ero] (https://github.com/MorganEro)
- Frontend Mentor - [Morganero](https://www.frontendmentor.io/profile/MorganEro)
