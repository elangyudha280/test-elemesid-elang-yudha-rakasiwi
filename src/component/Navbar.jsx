

// import logo navbar
import logoNavbar from '../assets/images/logo-navbar.png'


const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container container-navbar" >
     <a className="navbar-brand p-0" href="#">
      <img src={logoNavbar} alt="Logo"  className="logo-nav"/>
    </a>
   
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Promotions
                <span className="hot-promotions bg-danger">
                    HOT
                </span>
            </a>
            </li>
            <li className="nav-item" >
            <a className="nav-link" href="#">Blogs</a>
            </li>
            <li className="nav-item" >
            <a className="nav-link" href="#">Contact Us</a>
            </li>
      </ul>
    </div>


    <div className="button-navbar">
            <button className="btn btn-login">Masuk</button>
            <button className="btn btn-daftar">Daftar Sekarang</button>
    </div>
  </div>
</nav>
    )
}

export default Navbar;