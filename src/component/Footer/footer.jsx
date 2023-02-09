import logoElemensId from '../../assets/images/logo-navbar.png'

const Footer = ()=>{
    return (
        <footer className="footer container">
            {/* section contact footer */}
            <section className="contact">
                <img src={logoElemensId} alt="logoElemesId" className='img-logo-elemesid' />
                <p className="address">
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
                Kecamatan Setiabudi, Kota Jakarta Selatan, 
                Daerah Khusus Ibukota Jakarta 12950
                </p>
                <div className="social-media">
                    <a href="#">
                    <i className="fa-regular fa-envelope"></i>
                    </a>
                    <a href="#">
                    <i className="fa-solid fa-phone"></i>
                    </a>
                    <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </section>

            {/* section categories footer */}
            <section className="categories">
                <h4 className="title-categories">Categories</h4>
                <ul className="nav-categories">
                    <li><a href="#">cupcake</a></li>
                    <li><a href="#">pizza</a></li>
                    <li><a href="#">kebab</a></li>
                    <li><a href="#">salmon</a></li>
                    <li><a href="3">doughnut</a></li>
                </ul>
            </section>

            {/* section aboutUs footer */}
            <section className="about-us">
                <h4 className="title-about-us">About Us</h4>
                <ul className="nav-about-us">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Report Problem</a></li>
                </ul>
            </section>

               {/* section Newsletters footer */}
               <section className="newsletter">
                <h4 className="title-newsletter">About Us</h4>
                <p className="letter-discount">
                Get now free 50% discount for alll products on your first order
                </p>
                <form action="">
                    <div className="input-email" >
                        <input type="email" name="email" id="email" placeholder='Your email address' />
                        <button className="btn-submit-email" type='submit'>SEND</button>
                    </div>
                </form>

                {/* button email */}
                <a href='#' className="btn-email">
                    <i className="fa-regular fa-envelope"></i>
                    elemesid@gmail.com
                </a>

                {/* button no telephone */}
                <a href='#' className="btn-notelphone">
                <i className="fa-solid fa-phone"></i>
                    0888 1111 2222 
                </a>
            </section>
        </footer>
    )
}

export default Footer;
