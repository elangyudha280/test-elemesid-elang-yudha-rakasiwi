

const CardCategory = ({iconCard,titleCard,subTitle})=>{
    return (
    <div className="card-category" data-food={titleCard}>
        <div className="card-category-bg"></div>
        <div className="card-header-category">
            <img src={iconCard} alt="cupcakek_icon" />
        </div>
        <div className="card-body-category">
            <h6 className="title-card-category">{titleCard}</h6>
            <p className="total-item-category">
                {subTitle} items
            </p>
        </div>
    </div>
    )
}

export default CardCategory;