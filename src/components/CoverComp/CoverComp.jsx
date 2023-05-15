import "./CoverComp.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sekil from "../../assets/images/logo.png"
const CoverComp = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  

    return (
        <Slider {...settings}>
            <section className="section partners-section">
                <div className="container">
                    <div className="slickjs carousel-partner">
                        <div className="partner-box px-5">
                            <img alt="" className="img-fluid" src={sekil} />
                        </div>
                        <div className="partner-box px-5">
                            <img alt="" className="img-fluid" src={sekil} />
                        </div>
                        <div className="partner-box px-5">
                            <img alt="" className="img-fluid" src={sekil} />
                        </div>
                        <div className="partner-box px-5">
                            <img alt="" className="img-fluid" src={sekil} />
                        </div>
                        <div className="partner-box px-5">
                            <img alt="" className="img-fluid" src={sekil} />
                        </div>
                        <div className="partner-box px-5">
                            <img alt="" className="img-fluid" src={sekil} />
                        </div>
                    </div>
                </div>
            </section>

        </Slider>
    )
}

export default CoverComp