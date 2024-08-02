import React from 'react'
import "./RecentProjects2.css"
import news1 from "../../../assets/images/news1.jpg"
import news2 from "../../../assets/images/news2.jpg"
import news3 from "../../../assets/images/news3.jpg"
const RecentProjects2 = () => {
  return (
    <>
      <div className='container'>
        <div className='row text-center mt-5'>
          <h5 className="fs-6">WORK OF EXCELLENCE</h5>
          <h1 className="fs-3 text">RECENT PROJECTS</h1>
        </div>
        <div className="d-flex gap-5 flex-wrap justify-content-center pb-5">
          <div className="w-100" style={{maxWidth: "17rem"}}>
            <img src={news1} alt="" className='img-fluid' />
            <p className='news11'><a href="">WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI</a></p>
            <a href="#" className='date'>July 20,2017</a>
          </div>
          <div className="w-100" style={{maxWidth: "17rem"}}>
            <img src={news2} alt="" className='img-fluid' />
            <p className='news11'><a href="">
              THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED</a></p>
            <a href="#" className='date'>July 20,2017</a>
          </div>
          <div className="w-100" style={{maxWidth: "17rem"}}>
            <img src={news3} alt="" className='img-fluid' />
            <p className='news11'><a href="">SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES</a></p>
            <a href="#" className='date'>July 20,2017</a>
          </div>
        </div>

        <div className="d-flex justify-content-center my-5"><a href="" className="btn btn-primary rounded-0">SEE ALL POSTS</a></div>

      </div>

    </>
  )
}

export default RecentProjects2