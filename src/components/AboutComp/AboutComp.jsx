import "./AboutComp.css"
import about from "../../assets/images/about.jpg"
import {FaRegDotCircle} from "react-icons/fa"
const AboutComp = () => {
  return (
    <section className="section about-section container">
    <div className="row align-items-center">
        <div className="col-md-6 text-center">
            <img alt="" className="img-fluid" src={about}/>
        </div>
        <div className="col-md-6">
            <div className="about-content">
                <div className="about-heading">
                    <span className="subtitle">Bizim haqqımızda</span>
                    <h2 className="section-title">Şirkətimizin XX illik Təcrübəsi</h2>
                </div>
                <div className="about-body">
                    <p className="section-body my-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iu
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                    </p>
                    <ul className="about-list-items">
                        <li className="about-list-item">
              <span className="about-list-icon">
                <FaRegDotCircle/>
              </span>
                            <span className="about-list-text"> 28 Years Experience In Field</span>
                        </li>
                        <li className="about-list-item">
              <span className="about-list-icon">
              <FaRegDotCircle/>
              </span>
                            <span className="about-list-text"> High quality tools and technology in use</span>
                        </li>
                        <li className="about-list-item">
              <span className="about-list-icon">
                <FaRegDotCircle/>
              </span>
                            <span className="about-list-text"> Be accessible at desks and meetings in</span>
                        </li>
                        <li className="about-list-item">
              <span className="about-list-icon">
              <FaRegDotCircle/>
              </span>
                            <span className="about-list-text"> Office Desk and Floor Cleaning Services</span>
                        </li>
                    </ul>
                    <a className="button" href="about.html">Daha Ətraflı</a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutComp