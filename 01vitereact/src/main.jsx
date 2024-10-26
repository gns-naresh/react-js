import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return(
    <div>
      <h1> Custom App | Naresh</h1>
    </div>
  )
}

// const ReactElement = {
//   type : 'a' ,
//   props : {
//       href: 'https://google.com',
//       target : '_blank',
//   },
//   children : 'Click me to visit to google'
// }

const anotherElement = (

  <a href='https://google.com' target='_blank'>visit google</a>
)

const anotherUser = " Naresh G S"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  anotherUser // Elavuated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
   
  // <App />

  reactElement
)
