import SectionTitleDesc from '../../shared/SectionTitleDesc/SectionTitleDesc';
import faqData from '../../../assets/data/faq.json';

const FAQ = () => {
    return (
        <section className='my-24'>
            <SectionTitleDesc title={'Frequently Asked Questions (FAQ)'} desc={'Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!'} titleStyle={'text-secondary'} />
            <div className=" wfull lg:w-3/4 mx-auto mt-10 flex flex-col gap-y-2">
                {
                    faqData.map((item, index) =>
                        <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-bold">{item.question}</div>
                            <div className="collapse-content text-gray-600 text-sm">{item.answer}</div>
                        </div>)
                }
            </div>

        </section>
    );
};

export default FAQ;