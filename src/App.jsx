import React from "react"


// import component Navbar
import Navbar from "./component/Navbar"

// import component jumbotron
import Jumbotron from "./component/jumbotron"

// import component trending
import Trending from "./component/Trending"



// component App
function App() {

  return (
    <div className="App">
        {/* component navbar */}
        <Navbar/>
        
        {/* component Jumbotron */}
        <Jumbotron/>

        {/* component trending */}
        <Trending/>
    </div>
  )
}

export default App
