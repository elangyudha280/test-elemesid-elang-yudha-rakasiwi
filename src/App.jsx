import React from "react"


// import component Navbar
import Navbar from "./component/Navbar"

// import component jumbotron
import Jumbotron from "./component/jumbotron"



// component App
function App() {

  return (
    <div className="App">
        {/* component navbar */}
        <Navbar/>
        
        {/* component Jumbotron */}
        <Jumbotron/>
    </div>
  )
}

export default App
