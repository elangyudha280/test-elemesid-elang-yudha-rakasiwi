import imgFoodJumbotron from '../../assets/images/mask_group.png'


const JumbotronImg = ()=>{
    return (
        <section className="jumbotron-img">
        <div className="img-food">
           <img src={imgFoodJumbotron} className='' alt="" />
        </div>
        <div className="card-food-jumbotron">
               <img src={imgFoodJumbotron} alt="img food jumbotron" className="img-food-jumbotron" />
               <div className="description-card-food-jumbotron">
                       <h6 className="title-card-food text-capitalize">
                           green salad tomato
                       </h6>
                       <p className="sub-title-card-food">
                           Tomato
                       </p>
                       <div className="stars-food-card">
                       <i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star"></i>
                       </div>
               </div>
           </div>
   </section>
    )
}

export default JumbotronImg