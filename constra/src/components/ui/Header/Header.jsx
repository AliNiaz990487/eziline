import Image from "../../../assets/images/banner1.jpg"
import "./Header.css"

const Header = ({ title, tab1, tab2 }) => {
    return (
        <div className="common-header">
            {/* <img src={Image} className="img-fluid" alt="" /> */}
            <div className="text-white text-center">
                <h1 className="fw-bold">{title}</h1>
                <div className="fs-6 fw-bold">
                    <span>HOME</span>
                    <span className="px-2">/</span>
                    <span>{tab1}</span>
                    <span className="px-2">/</span>
                    <span>{tab2}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
