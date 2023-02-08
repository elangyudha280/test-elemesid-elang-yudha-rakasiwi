
const CardItemTrending = ({imgCard,titleCard,SubTitle,dataIconStars=0})=>{

    // fungsi check icon
   const checkIcon = ()=>{
        switch(dataIconStars.toString()) {
            case '1':
            return  (
                <>
               <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star empty-stars"></i>
             </>
            );
            case '2':
                return (
                    <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star empty-stars"></i>
                    <i className="fa-solid fa-star empty-stars"></i>
                </>
            );
            default:
            return (
                <>
               <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star empty-stars"></i>
             </>
            );
        }
    }


    return(
        <div className="card-item" data-food={SubTitle}>
                    <div className="img-card-item" >
                     <img src={imgCard} alt={titleCard} className="iimg-card-trending"  />
                    </div>
                    <h3 className="title-card-item">
                        {titleCard}
                    </h3>
                    <h4 className="sub-title-card-item">
                        {SubTitle}
                    </h4>
                    <div className="stars-ranting">
                           {checkIcon()}
                    </div>
        </div>
    )
}

export default CardItemTrending;