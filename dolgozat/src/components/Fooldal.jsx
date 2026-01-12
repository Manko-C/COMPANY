import { useNavigate } from "react-router-dom";
import Home from "./home.json"
import Carousel from 'react-bootstrap/Carousel';

export default function Fooldal(){
    const navigate = useNavigate()
    return(
        <>
        <header>
            <div>
                <h1>{Home.title}</h1>
                <p>{Home.welcomeText}</p>
            </div>
        </header>
        <main>
        <div className="Carousel_Div">
            <Carousel className="carousel-fixed" style={{width : 600}}>
            {Home.heroImages.map((img,index) =>(


        <Carousel.Item key={index}>
          <div className="carousel-frame">
            <img className="carouselimg" src={img} />
          </div>
        </Carousel.Item>

            ))}
</Carousel>
    </div>
    <div>
        <button onClick={() => navigate(Home.cta.link)} style={{marginTop : 10}}>{Home.cta.text}</button>
    </div>
        </main>
        </>
    )
}