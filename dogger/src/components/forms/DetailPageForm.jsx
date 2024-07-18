import React from 'react'

const DetailPageForm = () => {
    return (
        <form className="row g-4 mt-5 mb-5 pt-5 pb-5">
            <div className="col-12">
                <label for="inputName" className="form-label fs-3">Name *</label>
                <input type="text" className="form-control form-control-lg" id="inputName" placeholder="" />
            </div>
            <div className="col-12">
                <label for="inputEmail" className="form-label fs-3">Email *</label>
                <input type="email" className="form-control form-control-lg" id="inputEmail" placeholder="" />
            </div>
            <div className="col-12">
                <label for="inputWebsite" className="form-label fs-3">Website</label>
                <input type="text" className="form-control form-control-lg" id="inputWebsite" />
            </div>
            <div className="">
                <label for="floatingTextarea" className="form-lagel fs-3">Comments</label>
                <textarea style={{height: "30rem"}} className="form-control form-control-lg" placeholder="" id="floatingTextarea"></textarea>
            </div>
            <div className="col-12 mb-5 pb-5">
                <button type="submit" className="btn text-white fs-3" style={{backgroundColor: "var(--bg-clr)", padding: ".5em 1em", borderRadius: "3rem"}}>Post Comment</button>
            </div>
        </form>
    )
}

export default DetailPageForm
