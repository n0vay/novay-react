Yoo Wassup

# Parcel Bundler

- Dev Build
- Local Server
- HMR : Hot Module Replacement
- File Watching Algo used fro HMR written in C++
- Caching - Faster Builds
- Image Optimization
- Minification Bundle and Compress Files
- Consistant Hashing
- Code Splitting
- Differential Bundling - support old browsers
- Diagnostics
- Error handling
- HTTPS support
- Tree Shaking - remove unsused code from build
- Different build for dev and production

# Basic Layout

// Header Component - Logo, nav
// Body Component - Search, Results, Resturant Cards
// Footer Component - Socials, Contact, CopyRight

# Two types of import export

- Default : export default FxName : import FxName from "./utils"
- Named : export FxName : import {FxName} from "./utils"

# Whenever state variable changes, react triggers reconcilliation cycle

# Use efffect

- If no Dependency array, useEffect is called on every render
- If dependency array is empty, useEffect is called on initial render

# Redux

- Advisory of Redux:

1. Subscribe to only those parts of store which are being used on the page, subscibing to whole object will cause unnecessary updates on the page.
2. The main Store uses reducer keyword and the slice usses reducers keyword.

- Redux used to have immutable states in earlier versions
- Redux use immer library to modify state in the reducer
- Redux allows us to mutate state or return new state in a reducer, if not working check JS mutation rules
- Redux dev tools can be used to debug redux based errors
- Use current to console.log(current(state)) the state; import current from toolkit
- RTK Query can be used to create a fetch data and add it to store

# Test Case

- Why testing? Small change in code can cause bugs anywhere in app.
- 2 Types : Manual & Automated testing uses code

# Types of testing (developer)

- Unit Testing : testing one component in isolation :
- Integration Testing : testing flow of action between componenets
- End to End Testing - e2e Testing : simulating user from start page to end page
- Libraries: React testing library uses DOM testing library under hood. npm install -D @testing-library/react
- React testing library uses Jest, which is a JS testing framework. npm install -D jest
- Jest also needs extra dependencies and babel.config.js
- Parcel and jest both use babel and require different config
- Configure parcel config by adding .parcelrc file to disable babel transpilation
- write jest config using npx jest --init
- testing require an environment which is like a browser, called jsdom
- install jest-environment dom package seperately by npm i -D jest-environment-jsdom
- create a **test** folder and name the test file same as the file with extention .test.js
- install @babel/preset-react to make JSX work in test cases
- include it into babel config as ["@babel/preset-react", { runtime: "automatic" }]0
- install npm i -D @testing-library/jest-dom
- When we do console.log of scren.getby, we get the js object which is rendered onscreen [react element, react fibre node, jsx, virtual dom object]
- basic layout of testing is render ->  query -> assert
