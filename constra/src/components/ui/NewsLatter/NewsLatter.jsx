import React from 'react';

const NewsLatter = () => {
    return (
        <div className='container-fluid p-0'>
            <div className='row m-0'>
                <div className='col-12 col-md-5 bg-primary'>
                    <div className='d-flex flex-column align-items-center align-items-md-end p-3'>
                        <div className="pe-md-5">
                            <h1 className='fs-6'>CAN WE HELP</h1>
                            <h4 className='fs-5 fw-bold text-white'>(+92) 876-879-900</h4>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-7 bg-dark text-white'>
                    <div className="d-flex flex-column flex-md-row flex-wrap gap-3 p-3 align-items-center">
                        <div>
                            <h5 className="fs-5 fw-bold">NEWSLETTER SIGN-UP</h5>
                            <h6 className="fs-6">Latest updates and news</h6>
                        </div>
                        <input 
                            className="bg-dark border text-white p-2 mt-2 mt-md-0"
                            style={{ fontSize: ".8rem", width: "100%", maxWidth: "15rem" }}
                            type="text" 
                            placeholder='Your name and email press enter' 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;
