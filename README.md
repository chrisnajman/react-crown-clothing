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

- App => homepage.component
  - homepage.component  =>  directory.component
    - directory.component  =>  menu-item.component

### State
directory.component.jsx
  
### Notes
Destructuring used for props:
- directory.component.jsx:
  `.map(({title, imageUrl, size, id})`
- menu-item.component.jsx:
  `MenuItem = ({title, imageUrl, size})`

---

## npm package conflicts
If you get a warning message saying that one of the packages is the wrong version, note down the correct version then open package.json and add:

```
"resolutions": {
  "package-name": "correct-package-version",
  "lastName": "Smith",
  "age": 25
},
```
Then run `npm install`
