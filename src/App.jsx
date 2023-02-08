import React from "react"


// import component Navbar
import Navbar from "./component/Navbar"

// import component jumbotron
import Jumbotron from "./component/jumbotron"

// import component trending
import Trending from "./component/Trending"
import Footer from "./component/footer"



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

        {/* component footer */}
        <Footer/>
    </div>
  )
}

export default App
