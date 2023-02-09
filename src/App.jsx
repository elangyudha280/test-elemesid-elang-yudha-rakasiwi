import React from "react"


// import component Navbar
import Navbar from "./component/Navbar"

// import component jumbotron
import Jumbotron from "./component/jumbotron"

// import component category
import Category from "./component/Category"

// import component trending
import Trending from "./component/Trending"

// import component footer
import Footer from "./component/Footer/footer"

// import component footer copy right
import FooterCopyRight from "./component/Footer/footerCopyRight"

// importo component footer for mobile
import FooterMobile from "./component/Footer/footerMobile"



// component App
function App() {


  return (
    <div className="App">
        {/* component navbar */}
        <Navbar/>
        
        {/* component Jumbotron */}
        <Jumbotron/>

        {/* component category */}
        <Category/>

        {/* component trending */}
        <Trending/>

        {/* component footer */}
        <Footer/>

        {/* component footer copy right */}
        <FooterCopyRight/>

        {/* footer Mobile */}
        <FooterMobile/>
    </div>
  )
}

export default App
