import React from "react"


// import component Navbar
import Navbar from "./component/Navbar"

// import component jumbotron
import Jumbotron from "./component/jumbotron"

// import component trending
import Trending from "./component/Trending"

// import component footer
import Footer from "./component/footer"

// import component footer copy right
import FooterCopyRight from "./component/footerCopyRight"



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

        {/* component footer copy right */}
        <FooterCopyRight/>
    </div>
  )
}

export default App
