import React from 'react'
import { FaPlay } from 'react-icons/fa'

const SuccessStory = () => (
    <div className="container-fluid tw-bg-no-repeat tw-bg-cover tw-py-32" style={{backgroundImage: "url('src/assets/images/success-story.jpg')"}}>
        <div className="container">
            <div className="tw-block md:tw-flex tw-justify-between tw-items-center">
                <div className="tw-flex-1 tw-text-center md:tw-text-left tw-pb-12 md:tw-pb-0 md:tw-pe-32">
                {/* <div className=""> */}
                    <a href="" className="btn btn-primary rounded-circle before:tw-rounded-full tw-py-5 hover:before:tw-text-black"><span className=""><FaPlay /></span></a>
                </div>

                <div className="tw-bg-white tw-text-gray-600 fs-5 tw-leading-8 tw-p-14 tw-flex-1">
                    <h4 className="tw-text-black fs-2 fw-bold">Success Stories</h4>
                    <p className="tw-py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                </div>
            </div>
        </div>
    </div>
)
const Training = () => {
  return (
    <div>
        <div className="bg-primary">
            <div className="container tw-text-center tw-py-20 tw-text-white">
                <p className="fw-bold fs-4">Click to Join the Advance Workshop</p>
                <h4 className="fw-bold fs-2 tw-pb-12">Training In Advannce Networking</h4>
                <a href="" className="btn btn-primary">Join Now</a>
            </div>
        </div>

        <SuccessStory />
    </div>
  )
}
export {SuccessStory}
export default Training
