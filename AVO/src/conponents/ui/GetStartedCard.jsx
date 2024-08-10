import React from 'react'
import Button from './Button'

const GetStartedCard = () => {
  return (
    <section className="container tw-bg-cover tw-bg-center tw-mt-40" style={{backgroundImage: "url('src/assets/images/bg_1.jpg')"}} >
        <div className="tw-ps-8 tw-py-20 md:tw-w-2/4">
            <p className="tw-text-primary tw-pb-4">Get Started</p>
            <h4 className="tw-text-white fs-2">Fill in the brief and get the project estimate</h4>
            <p className="tw-text-gray-lighter tw-py-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <Button label="Get Started"/>
        </div>
    </section>
  )
}

export default GetStartedCard
