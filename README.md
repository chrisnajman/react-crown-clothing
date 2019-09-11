# Crown Clothing
E-commerce site built with Create React App following Udemy Course: [Complete React Developer in 2019](https://www.udemy.com/complete-react-developer-zero-to-mastery)
## Setup
- `npm install node-sass --save`
- Create and build out homepage.component.jsx
- Create and build out homepage.styles.scss
- Link SCSS to component
  
### Notes
- I like CSS Modules but I'll go along with SCSS for this course.
- Might prefer different convention for file naming, but again I'll go with the course conventions.
---

## Homepage and Directory Components
- App.js
  - pages/
    - homepage /
      - homepage.component.jsx
      - homepage.styles.scss
  - components/
    - directory/
      - directory.component.jsx (STATE)
      - directory.styles.scss
    - menu-item/
      - menu-item.component.jsx
      - menu-item.styles.scss

- App imports homepage.component
  - homepage.component imports directory.component
    - directory.component imports menu-item.component

  
### Notes
Destructuring used:
- directory.component.jsx:
  `.map(({title, imageUrl, size, id, linkUrl})`
- menu-item.component.jsx:
  `MenuItem = ({title, imageUrl, size})`
---

