import "../Footer/Footer.css"
import logo from "../../assets/images/logo.png"
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import {ImLocation2} from "react-icons/im";
import {BsFillTelephoneFill} from "react-icons/bs"
import {IoTimeSharp} from "react-icons/io5"



const Footer = () => {
  return (
   <>
        <footer>
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="footer-box">
                    <a href="index.html">
                        <img alt="" className="img-fluid logo" src={logo}/>
                    </a>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iu tempor
                        incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <div className="social-icons">
                        <a className="facebook" href="#"> <BsFacebook/></a>
                        <a className="twitter" href="#"><BsTwitter/></a>
                        <a className="linkedin" href="#"><BsLinkedin/></a>
                        <a className="instagram" href="#"> <BsInstagram/></a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                <div className="footer-box">
                    <h2>Səhifələr</h2>  
                    <ul className="footer-navigation">
                        <li><a href="index.html">Ana Səhifə</a></li>
                        <li><a href="#">Haqqımızda</a></li>
                        <li><a href="#">Işlərimiz</a></li>
                        <li><a href="#">İşçilərimiz</a></li>
                        <li><a href="#">Bizimlə Əlaqə</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="footer-box">
                    <h2>Bizimlə Əlaqə</h2>
                    <div className="footer-address">
                        <div className="footer_s_inner">
                            <div className="footer-social-icon">
                                <ImLocation2/>
                            </div>
                            <div className="footer-social-info">
                                <p>
                                    Bakı şəhəri, Yasamal rayonu,Zərdabi küçəsi, ev 17/51, mənzil 111
                                </p>
                            </div>
                        </div>
                        <div className="footer_s_inner">
                            <div className="footer-social-icon">
                                <BsFillTelephoneFill/>
                            </div>
                            <div className="footer-social-info">
                                <p>Telefon: (+994 12) 434 01 10</p>
                            </div>
                        </div>
                        <div className="footer_s_inner">
                            <div className="footer-social-icon">
                               <IoTimeSharp/>
                            </div>
                            <div className="footer-social-info">
                                <p>Vaxt: 9.00-18.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
   </>
  )
}

export default Footer