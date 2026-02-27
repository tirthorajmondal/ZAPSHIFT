import SectionTitleDesc from '../../shared/SectionTitleDesc/SectionTitleDesc';
import faqData from '../../../assets/data/faq.json';
import { useState } from 'react';

const FAQ = () => {
    const [faqs, setFaqs] = useState(faqData.slice(0, 4));
    const loadAllFaq = () => {
        setFaqs(faqData);
    }
    return (
        <section className='my-24'>
            <SectionTitleDesc title={'Frequently Asked Questions (FAQ)'} desc={'Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!'} titleStyle={'text-secondary'} />
            <div className=" wfull lg:w-3/4 mx-auto mt-10 flex flex-col gap-y-2">
                {
                    faqs.map((item, index) =>
                        <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-bold">{item.question}</div>
                            <div className="collapse-content text-gray-600 text-sm">{item.answer}</div>
                        </div>)
                }
                <button onClick={loadAllFaq} className={`${faqData.length === faqs.length && 'hidden'} btn btn-secondary mt-4 w-fit mx-auto`}>See More FAQ's</button>
            </div>

        </section>
    );
};

export default FAQ;