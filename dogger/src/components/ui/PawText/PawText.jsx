import { FaPaw } from "react-icons/fa";

import "./PawText.css";
const PawText = (props) => {
  return (
    <section className="container" data-aos="fade-up">
        <div className={`paw-wrapper ${props.className}`}>
          <div className='ft-asm-icon paw m-5'>
              <FaPaw />
          </div>
          <h4 className="text-black text-uppercase">{props.heading}</h4>
          <p className="">{props.peragraph}</p>
        </div>
    </section>
  )
}

export default PawText
