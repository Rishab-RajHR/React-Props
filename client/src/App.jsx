import React, { useState } from 'react'
import FunctionalComponentsInProps from './FunctionalComponentInProps'

const App = () => {
   const [firstName, setName] = useState("Basil");
  return (
    <div>
      <h2>Hello How are you</h2>
      {/* If we want to call the function we will write it many times we want */}
      {/* <FunctionalComponentsInProps name={"Alex"} email={"alex123@gmail.com"} info={{ salary: 60000, mobile: "12345678"}}/>
      <FunctionalComponentsInProps name={"Tovino"} email={"tovino231@gmail.com"} info={{ salary: 70000, mobile: "987901002"}}/> */}
      <FunctionalComponentsInProps name={firstName}/>
      <button onClick={() => {setName("Alex Pandian")}}>Click Me</button>
    </div>
  )
}

export default App
