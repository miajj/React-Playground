import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// https://react.dev/learn
// React apps are made out of components. A compnents is a piece of UI, which can be as small as a butoon adn as large as an entire page. 
function MyButton() { // React components start with a capital letter. 
  function handleClick() {
    alert('You clicked me!')
  }
  return (
    <button onClick={handleClick}>This is a BUTTON! </button> // HTML elements start with a lowercase letter. 
  )
}

// You can't return multiple JSX tags and you have to wrape them in a <>...</> wrapper. 
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>React playground to learn React in depth.</p>
    </>
  )
}

//JSX lets you use markup into Javascript. User curly braces to wrap javescript code. 
const user = {
  name: "Billie Eilish",
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3OvcS9D4HfgBVOkvEY8mSQi59TmX8MVr7_A&s",
  imageSize: 180
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"profile image of " + user.name}
        // A regular {} object inside the style={} curly braces. 
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  )
}

//Conditional rendering. 
// #1
// function LoginContent(){
//   let content;
//   if(isLoggedIn){
//     content = <p>You are logged in. </p>
//   }else{
//     content = <p>You are signed out. </p>
//   }
//   return (
//     <div>
//       {content}
//     </div>
//   )
// }

//#2
function LoginContent(isLoggedIn) {
  return (
    <div>
      <h1>Conditional rendering</h1>
      {isLoggedIn ? <p>You are logged in. </p> : <p>You are signed out. </p>}
    </div>
  )
}

//#3 No else is needed. 
// function LoginContent(){
//   return (
//     <div>
//       {isLoggedIn&&<p>You are logged in. </p>}
//     </div>
//   )
// }


//Rendering list: 
// use map() to transform an array of items into an array of <li> items
// for each item in the list, there is an uniquely identifier that will help you insert, delete, reorder or update the item. (CRUD)
const fruits = [
  { id: 1, name: 'Apple', emoji: '🍎 ⊹ ࣪ ˖🍃', isCitrus: false },
  { id: 2, name: 'Banana', emoji: '• 🍌*• ☆', isCitrus: false },
  { id: 3, name: 'Strawberry', emoji: '──★ ˙🍓 ̟ !! ', isCitrus: true },
  { id: 4, name: 'Orange', emoji: '‧₊˚🍊༉‧₊˚.', isCitrus: true }
]

function FruitsList() {
  let fruitsList;
  fruitsList = fruits.map(fruit =>
    <li key={fruit.id}
      style={{ color: fruit.isCitrus ? 'orange' : 'blueviolet' }}>
      <p>{fruit.name}</p>
      <p>{fruit.emoji}</p>
    </li>);
  return <ul>{fruitsList}</ul>;
}

// Using State: remember some "information" and display it
function ButtonToCount() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount(0);
  }
  return (
    <>
      <button onClick={handleClick}>
        Clicked {count} times!
      </button>
      <button onClick={handleClick2}>
        Reset
      </button>
    </>
  )
}

function App() {
  //Using Hooks: Functions starting with 'use' are called Hooks. UseState is a build-in hook. 
  // You can call hooks on the top of a component. 
  // Sharing data between components
  // Pass down props from 'MyApp' to 'MyButton' to make both of the buttons display the same shared count. 

  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount(0);
  }
  function ButtonToShare() {
    return (
      <button onClick={handleClick}>
        Clicked {count} times!
      </button>
    )
  }
  function ButtonToReset() {
    return (
      <button onClick={handleClick2}>
        Reset
      </button>
    )
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div>
          <h1>Welcome to my React App! </h1>
          <MyButton />
        </div>

        <div className="App-dark-background">
          <AboutPage />
        </div>

        <div>
          <Profile />
        </div>

        <div className="App-dark-background">
          <LoginContent isLoggedIn={true} />
        </div>

        <div>
          <FruitsList />
        </div>

        <div className="App-dark-background">
          <h1>Use State, Seperate button counts</h1>
          <p><ButtonToCount /></p>
          <p><ButtonToCount /></p>
        </div>

        <div>
          <h1>Use State, Share button counts</h1>
          <p><ButtonToShare onClick={handleClick} count={count} /></p>
          <p><ButtonToShare onClick={handleClick} count={count} /></p>
          <p><ButtonToReset /></p>
        </div>
      </div>
    </>
  );
}

export default App;
