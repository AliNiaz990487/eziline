import Button from './Button'

import work1 from "../../assets/images/work-1.jpg"
import work2 from "../../assets/images/work-2.jpg"
import work3 from "../../assets/images/work-3.jpg"
import work4 from "../../assets/images/work-4.jpg"
import work5 from "../../assets/images/work-5.jpg"
import work6 from "../../assets/images/work-6.jpg"

import person1 from "../../assets/images/person_1.jpg"
import person2 from "../../assets/images/person_2.jpg"
import person3 from "../../assets/images/person_3.jpg"

const WorkCard1 = ({img, personImg, title, titleTop, name, className}) => (
    <div className={`row tw-items-center ${className}`}>
        <div className="col-12 col-md-5 tw-bg-center tw-bg-cover" data-aos="fade-up" style={{backgroundImage: `url(${img})`}}>
            <img src={work3} className='tw-invisible' alt="..." />
        </div>
        <div className="col-12 col-md-7 tw-my-6 md:tw-my-0 md:tw-ps-12" data-aos="fade-up" data-aos-delay={50}>
            <p className="tw-tracking-wider">{titleTop}</p>
            <h4 className="tw-text-xl md:tw-text-2xl">{title}</h4>
            <p className="tw-text-gray-lighter">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            
            <div className="d-flex tw-items-center gap-3 tw-py-8">
                <img src={personImg} alt="" className="tw-w-16 tw-aspect-square rounded-circle" />
                <div>
                    <p>{name}</p>
                    <p className="tw-text-gray-lighter">avo.com</p>
                </div>
            </div>
            <Button label="VIEW PORTFOLIO" className="tw-bg-transparent tw-text-black tw-border-2 tw-tracking-widest tw-text-sm"/>
        </div>
    </div>
)

const WorkCard2 = ({img, personImg, title, titleTop, name, className}) => (
    <div className={`row tw-items-center tw-flex-row-reverse ${className}`}>
        <div className="col-12 col-md-5 tw-bg-center tw-bg-cover" data-aos="fade-up" style={{backgroundImage: `url(${img})`}}>
            <img src={work3} className="tw-invisible" alt="..." />
        </div>
        <div className="col-12 col-md-7 md:tw-text-right tw-my-6 md:tw-my-0 md:tw-pe-12" data-aos="fade-up" data-aos-delay={50}>
            <p className="tw-tracking-wider">{titleTop}</p>
            <h4 className="tw-text-xl md:tw-text-2xl">{title}</h4>
            <p className="tw-text-gray-lighter">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            
            <div className="d-flex tw-items-center gap-3 tw-py-8 md:tw-justify-end">
                <img src={personImg} alt="" className="tw-w-16 tw-aspect-square rounded-circle" />
                <div className="tw-text-left">
                    <p>{name}</p>
                    <p className="tw-text-gray-lighter">avo.com</p>
                </div>
            </div>
            <Button label="VIEW PORTFOLIO" className="tw-bg-transparent tw-text-black tw-border-2 tw-tracking-widest tw-text-sm "/>
        </div>
    </div>
)

const WorkSection = () => {
    console.log(work1)
    return (
        <section className="container">
            <h4 className='tw-uppercase tw-text-xl tw-text-center tw-font-extrabold tw-py-12'>our works</h4>
            <WorkCard1 img={work1} personImg={person1} title="Cassette tape" titleTop="Web Design" name="Jamie Jonson"/>
            <WorkCard2 img={work2} personImg={person2} title="Miniwall Clock" titleTop="Application" name="Jamie Jonson" className="tw-mt-4 lg:-tw-mt-8"/>
            <WorkCard1 img={work3} personImg={person3} title="Avo Portfolio Agency" titleTop="UI/UX Design" name="Jamie Jonson" className="tw-mt-4 lg:-tw-mt-8"/>
            <WorkCard2 img={work4} personImg={person1} title="Hand Writing" titleTop="Web Development" name="Jamie Jonson" className="tw-mt-4 lg:-tw-mt-8"/>
            <WorkCard1 img={work5} personImg={person2} title="Keyboard" titleTop="Illustration" name="Jamie Jonson" className="tw-mt-4 lg:-tw-mt-8"/>
            <WorkCard2 img={work6} personImg={person3} title="Spiral" titleTop="Web Development" name="Jamie Jonson" className="tw-mt-4 lg:-tw-mt-8"/>
        </section>
    )
}

export default WorkSection
