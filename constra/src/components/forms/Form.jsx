import React from 'react'

const Form = () => {
    return (
        <form className="row g-3 p-5">
            <div className="col-md-4">
                <label for="inputName" className="form-label-sm">Name</label>
                <input type="text" className="form-control form-control-sm rounded-0" id="inputName" />
            </div>
            <div className="col-md-4">
                <label for="inputEmail" className="form-label-sm">Email</label>
                <input type="email" className="form-control form-control-sm rounded-0" id="inputEmail" />
            </div>
            <div className="col-md-4">
                <label for="inputSubject" className="form-label-sm">Subject</label>
                <input type="text" className="form-control form-control-sm rounded-0" id="inputSubject" />
            </div>

            <div className="">
                <label for="floatingTextarea">Message</label>
                <textarea className="form-control form-control-sm rounded-0" style={{minHeight: "8rem"}} id="floatingTextarea"></textarea>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary rounded-0">Sign in</button>
            </div>
        </form>
    )
}

export default Form
