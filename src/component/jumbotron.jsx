
// component description jumbotron
import DescriptionJumbotron from './ComponentJumbotron/DescriptionJumbotron';

// component jumbtron img
import JumbotronImg from './ComponentJumbotron/JumbotronImg';

const Jumbotron = () =>{
    return (
        <section className="jumbotron">
            <div className="jumbotron-bg"></div>
            <div className="container container-jumbotron">
                <h2 className="title-jumbotron text-capitalize">
                    good food us <br /> good Mood
                </h2>
                {/* component description jumbotron */}
                <DescriptionJumbotron/>
                {/* component jumbotron img */}
                <JumbotronImg/>
            </div>
        </section>
    )
}


export default Jumbotron;