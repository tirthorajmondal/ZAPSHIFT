import logo1 from '../../../../assets/brands/casio.png'
import logo2 from '../../../../assets/brands/amazon.png'
import logo3 from '../../../../assets/brands/moonstar.png'
import logo4 from '../../../../assets/brands/start.png'
import logo5 from '../../../../assets/brands/start-people 1.png'
import logo6 from '../../../../assets/brands/randstad.png'

const Brands = () => {

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

    return (
        <section className='my-24'>
            <h3 className='font-extrabold text-3xl text-secondary text-center mb-10'>We've helped thousands of sales teams</h3>
            <div className="flex gap-24 mx-auto w-fit ">
                {
                    logos.map((logo, index) => <img key={index} src={logo} />)
                }
            </div>
        </section>
    );
};

export default Brands;