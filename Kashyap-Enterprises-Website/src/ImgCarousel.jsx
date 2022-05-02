import React from 'react'
import "./index.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import Type from './Type';
const ImgCarousel = () => {
   

    return (
        <div>
        <div className="carousel-container text-center ">
                <Carousel infiniteLoop showArrows showIndicators autoPlay useKeyboardArrows dynamicHeight>
                    <div>
                        <img src={image1} alt="Image 1"/>
                        <p className="legend captionclr fw-bolder fs-6">Chemicals for General Industries</p>
                    </div>
                    <div>
                         <img src={image2} alt="Image 2" className='imgheight'/>
                         <p className="legend captionclr fw-bolder fs-6" >Chemicals for Pulp and Paper Industries</p>
                    </div>
                    <div>
                         <img src={image3} alt="Image 3" />
                         <p className="legend captionclr fw-bolder fs-6">Chemicals for textile Industries</p>
                    </div>
                    <div>
                         <img src={image4} alt="Image 4" />
                         <p className="legend captionclr fw-bolder fs-6">Chemicals for Sugar Mills</p>
                    </div> 
                    <div>
                         <img src={image5} alt="Image 5" />
                         <p className="legend captionclr fw-bolder fs-6">Chemicals for Distillery</p>
                    </div>                   
                </Carousel>
            </div>
</div>
    )
}

export default ImgCarousel
