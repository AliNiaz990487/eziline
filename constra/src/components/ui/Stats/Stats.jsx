import Icon1 from "../../../assets/images/fact1.png"
import Icon2 from "../../../assets/images/fact2.png"
import Icon3 from "../../../assets/images/fact3.png"
import Icon4 from "../../../assets/images/fact4.png"

const Stats = () => {
  return (
    <div className="bg-dark">
        <div className="container p-4">
            <div className="d-flex flex-wrap justify-content-center gap-5">
                <div className="d-flex flex-column align-items-center">
                    <img className="img-fluid" src={Icon1} alt="icon" />
                    <p className="text-white fw-bold fs-3 m-0">1789</p>
                    <p className="text-primary fs-6 fw-bold">TOTAL PROJECTS</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img className="img-fluid" src={Icon2} alt="icon" />
                    <p className="text-white fw-bold fs-3 m-0">647</p>
                    <p className="text-primary fs-6 fw-bold">STAFF MEMBERS</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img className="img-fluid" src={Icon3} alt="icon" />
                    <p className="text-white fw-bold fs-3 m-0">4000</p>
                    <p className="text-primary fs-6 fw-bold">HOURS OF WORK</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img className="img-fluid" src={Icon4} alt="icon" />
                    <p className="text-white fw-bold fs-3 m-0">44</p>
                    <p className="text-primary fs-6 fw-bold">CONTRIES EXPERIENCE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats
