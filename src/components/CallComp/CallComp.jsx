import "./CallComp.css"
import {AiFillAliwangwang} from "react-icons/ai"
import {BsTelephoneInboundFill} from "react-icons/bs"
const CallComp = () => {
  return (
    <section className="section call-section">
    <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-8 ">
                <div className="call-box vertical-center">
                    <div className="call-icon">
                        <AiFillAliwangwang/>
                    </div>
                    <span className="call-text">Collaborate Consulting exists to find the place where being seemingly disparate interests meet.</span>
                </div>
            </div>
            <div className="col-md-4 ">
                <div className="call-box vertical-center">
                    <div className="call-icon">
                        <BsTelephoneInboundFill/>
                    </div>
                    <span className="call-text">0123-456-7890 or Book Appointment</span>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CallComp