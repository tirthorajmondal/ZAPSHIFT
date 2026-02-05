import { useNavigate } from 'react-router';
import logo from '../../../assets/logo.png';
const ZapShiftLogo = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/')} className='flex items-end cursor-pointer hover:opacity-85 transition-opacity duration-100' style={{ userSelect: 'none' }}>
            <img src={logo} alt="ZapShift" className="max-w-8 h-auto " style={{}} />
            <p className="text-2xl -ml-3 -mb-1.5 font-extrabold">ZapShift</p>
        </div >
    );
};

export default ZapShiftLogo;