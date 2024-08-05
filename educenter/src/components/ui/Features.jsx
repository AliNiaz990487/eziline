import Img from "../../assets/images/banner-feature.png"

import { IoBookOutline } from "react-icons/io5";
import { TfiBlackboard } from "react-icons/tfi";
import { PiNotebookBold } from "react-icons/pi";
import { LuFolderEdit } from "react-icons/lu";

const Features = () => {
  return (
    <div className="tw-bg-gray-100">
      <div className="container md:tw-m-0 md:tw-max-w-full">
        <div className="row" style={{minHeight: "35rem", height: "fit-content"}}>
          <div className="col-12 col-md-4 tw-bg-no-repeat tw-bg-center tw-bg-contain md:tw-bg-cover" style={{backgroundImage: "url('src/assets/images/banner-feature.png')"}}>
            <img src={Img} className="tw-invisible" alt="" />
          </div>
  
          <div className="col-12 col-md-8 tw-bg-gray-100 -tw-mt-32 md:tw-px-12 tw-text-black" style={{zIndex: 1}}>
            <div className="tw-w-full md:tw-w-11/12 md:tw-pt-20">
              <div className="sm:tw-flex tw-gap-12">
                <div className="tw-pt-10 md:tw-pt-0">
                  <div className="tw-text-color-primary tw-text-5xl tw-pb-8"><IoBookOutline /></div>
                  <h4 className="fs-3 fw-bold tw-pb-4">Scholorship News</h4>
                  <p className="fs-6 tw-text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                </div>
                <div className="tw-pt-10 md:tw-pt-0">
                <div className="tw-text-color-primary tw-text-5xl tw-pb-8"><TfiBlackboard /></div>
                  <h4 className="fs-3 fw-bold tw-pb-4">Our Notice Board</h4>
                  <p className="fs-6 tw-text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                </div>
              </div>
            </div>
  
            <div className="tw-w-full md:tw-w-11/12 md:tw-pt-12">
              <div className="sm:tw-flex tw-gap-12">
                <div className="tw-pt-8 md:tw-pt-0">
                  <div className="tw-text-color-primary tw-text-5xl tw-pb-8"><PiNotebookBold /></div>
                  <h4 className="fs-3 fw-bold tw-pb-4">Scholorship News</h4>
                  <p className="fs-6 tw-text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                </div>
                <div className="tw-pt-8 md:tw-pt-0">
                <div className="tw-text-color-primary tw-text-5xl tw-pb-8"><LuFolderEdit /></div>
                  <h4 className="fs-3 fw-bold tw-pb-4">Our Notice Board</h4>
                  <p className="fs-6 tw-text-gray-600 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
