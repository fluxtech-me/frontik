# Frontik Demo

## Requirements

node >=16

<br/>

## Available Scripts

In the root directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run demo-build`

Builds the app for production to the `build` folder.

<br/>

## How to Create Demo

### Step 1

In `/src/Pages` create new demo page.  
For example see: `/src/Pages/Button`

### Step 2

In `/src/Main/Routers.js` add new route.  
For example:

```jsx
<Route exact path="/button" component={ButtonPage} />
```

### Step 3

In `/src/Pages/Home/HomePage.js` add new route link.  
For example:

```jsx
<Link to="/button">Button</Link>
```

### Step 4

Create your demo in new created demp page.  
DONE
