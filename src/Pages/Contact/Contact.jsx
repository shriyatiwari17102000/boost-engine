import React from 'react'
import ContactForm from './ContactForm'
import DigitalJourney from '../../Components/DigitalJourney'
import Faq from '../../Components/Faq'
import Subscription from '../../Components/Subscription'

const Contact = () => {
    return (
        <>
            <div className="bg-black text-white flex flex-col items-center">

                {/* Content */}
                <div className="max-w-6xl flex flex-col md:items-center  px-5 pt-20 md:p-20 gap-5 sm:px-16">
                    <button className="bg-white text-black px-6 py-2 rounded-full mb-6 w-fit">Contact us</button>
                    <h1 className="text-4xl font-semibold mb-6 ">"The Power of AI: How Artificial Intelligence Can Boost Your Business"</h1>
                    <p className="text-start text-lg w-full  leading-relaxed">
                        Whether you have a project in mind, need technical support, or just want to learn more about our services, we'd love to hear from you. Reach out to us using the contact form below or through our contact details. We're committed to responding promptly and look forward to collaborating with you.
                    </p>
                </div>
                <ContactForm />
            </div>

            <div className="flex items-center justify-center mt-20 md:mt-[100px]  px-5 md:px-0 ">

                <Faq />
            </div>
            <div className="flex items-center justify-center">

                <Subscription />
            </div>
        </>
    )
}

export default Contact