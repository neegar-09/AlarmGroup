import "./ContactComp.css"
const ContactComp = () => {
  return (
    <>
          <section className="section contact-section">
        <div className="container">
            <div className="row vertical-center">
                <div className="col-md-6">
                    <div className="contact-content">
                        <div className="contact-content-heading">
                            <span className="subtitle">Bizimlə Əlaqə</span>
                            <h2 className="section-title">Get In Touch</h2>
                        </div>
                        <div className="contact-content-body">
                            <p>We are a leader in endpoint protection solutions by industry analysts, indep endet
                                testing organizations and security.</p>
                            <div className="contact-info mt-4">
                                <div className="contact-box py-3 vertical-center justify-content-start">
                                    <span className="contact-icon">
                                        <i className="fas fa-phone-alt text-center"></i>
                                    </span>
                                    <div className="contact-text">
                                        <p>(+994 12) 434 01 10</p>
                                    </div>
                                </div>
                                <div className="contact-box py-3 vertical-center justify-content-start">
                                    <span className="contact-icon">
                                        <i className="fa-solid fa-envelope text-center"></i>
                                    </span>
                                    <div className="contact-text">
                                        <p>alarmgroup.az@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-box py-3 vertical-center justify-content-start">
                                    <span className="contact-icon">
                                        <i className="fa-solid fa-location-dot text-center"></i>
                                    </span>
                                    <div className="contact-text">
                                        <p>Bakı şəhəri, Yasamal rayonu,Zərdabi küçəsi, ev 17/51, mənzil 111</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-form">
                        <form action="https://formspree.io/f/xwkjoaob" id="contact-form" method="POST">
                            <label>
                                <input className="contact-input" name="name" placeholder="Ad və Soyad*" required=""
                                       type="text"/>
                            </label>
                            <label>
                                <input className="contact-input" name="email" placeholder="Email*" required=""
                                       type="email"/>
                            </label>
                            <label>
                                <textarea className="contact-input" name="message" placeholder="Mesajınız*" required=""
                                          rows="5" type="text"></textarea>
                            </label>
                            <button className="button" id="my-form-button">Göndər</button>
                            <p id="contact-form-status"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactComp