
import './Faq.css';
import Image from "../../../assets/images/dogger_img_sm_1.jpg";

const Faq = () => {

    const faqs = [
        {
            question: 'Should I stop letting my dog sleep with me at night?',
            answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
        {
            question: 'Is it okay to dress up your dog?',
            answer: 'Dressing up your dog can be fun and safe if done properly. Make sure the costume is comfortable and doesn’t restrict movement or breathing.',
        },
        {
            question: 'Why do dogs like belly rubs so much?',
            answer: 'Belly rubs feel good and can be a sign of trust from your dog. They enjoy the attention and the sensation.',
        },
        {
            question: 'Is a warm dry nose a sign of illness in dogs?',
            answer: 'A warm dry nose can be normal in dogs, but if accompanied by other symptoms, it could indicate a health issue. Always consult your vet if concerned.',
        },
    ];

    return (
        <section data-aos="fade-up" className="container">
            <div className="d-flex flex-column-reverse flex-lg-row">
                <ul className="col" id="faqItemId">
                    {
                        faqs.map((faq, index) => (
                        <div className="faq-item col-9" key={index}>
                            <h2 className="faq-header p-2">
                                <li className="faq-item-question" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {faq.question}
                                </li>
                            </h2>
                            <div id={`collapse${index}`} className="accordion-collapse collapse hide" data-bs-parent="#faqItemId">
                                <div className="faq-item-answer">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </ul>

                <div className="col mb-5 mb-lg-0">
                    <img className="img-fluid" src={Image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Faq;
