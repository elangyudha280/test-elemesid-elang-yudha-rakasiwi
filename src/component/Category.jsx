
import { useEffect } from "react";
import imgCupcake from '../assets/images/cupcake_icon.png'
import pizzaIcon from '../assets/images/pizza_icon.png'
import kebabIcon from '../assets/images/kebab_icon.png'
import salmonIcon from '../assets/images/salmon_icon.png'
import doughnutIcon from '../assets/images/doughnut_icon.png'

  // import Swiper JS
  import Swiper,  { Navigation }  from 'swiper';
  // import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

//   component card category
import CardCategory from "./ComponentCategory/CardCategory";

const Category = ()=>{
    useEffect(()=>{
        const swiper = new Swiper(".mySwiper", {
            modules: [Navigation],
            slidesPerView: 1,
            freeMode: true,
            grabCursor:true,
            navigation: {
                prevEl: ".btn-prev-slide",
                nextEl: ".btn-next-slide",
              },
            breakpoints: {
                400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            },
          });
    },[])
    return (
        <section className="category">
            <div className="container">
                <h3 className="title-category text-capitalize">
                    browser our category
                </h3>
                <h4 className="sub-title-category">
                    Receipt
                </h4>

              
            </div>


            <div className="container-xl" id="container-slider">
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <CardCategory iconCard={imgCupcake} titleCard='cupcake' subTitle='22'/>
                        </div>
                        <div className="swiper-slide">
                        <CardCategory iconCard={pizzaIcon} titleCard='pizza' subTitle='25'/>
                        </div>
                        <div className="swiper-slide">
                        <CardCategory iconCard={kebabIcon} titleCard='kebab' subTitle='12'/>
                        </div>
                        <div className="swiper-slide">
                        <CardCategory iconCard={salmonIcon} titleCard='salmon' subTitle='22'/>
                        </div>
                        <div className="swiper-slide">
                        <CardCategory iconCard={doughnutIcon} titleCard='doughnut' subTitle='11'/>
                        </div>
                        </div>
                      
                    
                       
                    </div>
                      <div className="button-slider-category">
                      <button className="btn-prev-slide">
                        <div className="circle-slide">
                         <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <p>prev</p>
                      </button>
                        <button className="btn-next-slide ">
                               <p>next</p>
                               <div className="circle-slide">
                                <i className="fa-solid fa-angle-right"></i>
                                </div>
                        </button>
                      </div>
            </div>
            
         
        </section>
    )
}


export default Category;