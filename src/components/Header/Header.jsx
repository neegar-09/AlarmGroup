import "./Header.css"
// import {AiFillHome} from "react-icons/ai"
import logo from "../../assets/images/logo.png"
const Header = () => {
    return (
        <>
            <header>
                <div className="desktop-header">
                    <div className="container-fluid">
                        <div className="upper-header row">
                            <div className="col-lg-4 col-md-4">
                                <div className="header-phone-holder">
                                    <i className="fas fa-home"></i>
                                    Bakı şəhəri, Yasamal rayonu,Zərdabi küçəsi, ev 17/51, mənzil 111
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-2">
                                <div className="header-phone-holder">
                                    <i className="fas fa-phone-alt"></i>
                                    (+994 12) 434 01 10
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-2">
                                <div className="header-email-holder">
                                    <i className="fas fa-envelope"></i>
                                    alarmgroup.az@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="lower-header row">
                            <div className="col-md-3 text-center">
                                <div className="logo-main">
                                    <a href="index.html">
                                        <img alt="Logo" className="img-fluid logo" src={logo}  title="Home" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <ul className="header-menu vertical-center">
                                    <li className="menu-item">
                                        <a className="active" href="index.html">Ana Səhifə</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">Haqqımızda</a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="#">Test</a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="#">Test</a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="#">Test</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="works.html">İşlərimiz</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="team.html">İşçilərimiz</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">Əlaqə</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-header">
                    <div className="mobile-header-wrapper">
                        <div className="logo-main">
                            <a href="index.html">
                                <img alt="Logo"
                                    className="img-fluid logo" src="images/Alarm.png" title="Home" />
                            </a>
                        </div>
                        <div className="mobile-menu-toggle">
                            <a className="mobile-menu-btn" href="javascript:void(0);">
                                <i className="fa-solid fa-bars fa-fade fa-lg"></i>
                            </a>
                        </div>
                        <div className="mobile-menu">
                            <ul className="mobile-menu-list">
                                <li>
                                    <a className="active" href="index.html">
                                        <span>Ana Səhifə</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">
                                        <span>Haqqımızda</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="works.html">
                                        <span>İşlərimiz</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="team.html">
                                        <span>İşçilərimiz</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">
                                        <span>Əlaqə</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header