# Crown Clothing V1
E-commerce site built with Create React App following Udemy Course: [Complete React Developer in 2019](https://www.udemy.com/complete-react-developer-zero-to-mastery)
## Setup
- `npx create-react-app crown-clothing-redux`
- `npm install react-router-dom --save`
- `npm install node-sass --save`




  
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