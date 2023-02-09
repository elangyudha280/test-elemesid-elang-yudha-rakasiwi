
import PizzaPeperoni from '../assets/images/pizza-paperoni.png';
import PizzaMeat from '../assets/images/pizza-meat.png';
import DonerKebab from '../assets/images/doner-kebab.png';
import SalmonRoll from '../assets/images/salmon-roll.png';
import CupcakeChoco from '../assets/images/cupcake-coco.png';
import DoughnutMilk from '../assets/images/donat-milk.png';
import DoughnutUnicorn from '../assets/images/donat-unicorn.png';
import KathiKebab from '../assets/images/kathi-kebab.png';
import CardItemTrending from './componentTrending/cardItemTrending';


const Trending = ()=>{
    return (
        <section className="trending container">
            <h3 className="title-trending text-capitalize">
                browser our trending
            </h3>
            <h4 className="sub-title-trending">
                Receipt
            </h4>

            <div className="container-card-trending">
                <CardItemTrending imgCard={PizzaPeperoni} titleCard='pizza paperoni' SubTitle='pizza'/>
                <CardItemTrending imgCard={PizzaMeat} titleCard='pizza meat' SubTitle='pizza' dataIconStars={2}/>
                <CardItemTrending imgCard={DonerKebab} titleCard='doner kebab' SubTitle='kebab'/>
                <CardItemTrending imgCard={SalmonRoll} titleCard='salmon roll' SubTitle='salmon'  dataIconStars={1}/>
                <CardItemTrending imgCard={CupcakeChoco} titleCard='cupcake choco' SubTitle='cupcake'  dataIconStars={1}/>
                <CardItemTrending imgCard={DoughnutMilk} titleCard='doughnut milk' SubTitle='doughnut'/>
                <CardItemTrending imgCard={DoughnutUnicorn} titleCard='doughnut unicorn' SubTitle='doughnut'  dataIconStars={1}/>
                <CardItemTrending imgCard={KathiKebab} titleCard='kathi kebab' SubTitle='kebab'  dataIconStars={1}/> 
            </div>

            <div className="container-btn-all-receipt">
                <button className="btn btn-all-receipt ">ALL Receipt</button>
            </div>
        </section>
    )
}


export default Trending;