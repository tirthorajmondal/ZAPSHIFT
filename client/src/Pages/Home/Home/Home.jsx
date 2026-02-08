import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Benifits from '../Benifits/Benifits';
import BecomeMarchant from '../BecomeMarchant/BecomeMarchant';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <Services />
            <Brands />
            <hr className='border-t-4 border-slate-400 border-dashed' />
            <Benifits />
            <hr className='border-t-4 border-slate-400 border-dashed' />
            <BecomeMarchant />

        </div>
    );
};

export default Home;